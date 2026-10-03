<?php
// 회원 가입 · 문의 폼 처리 (NAS Web Station + PHP 8.x)
// 제출 내용은 웹 루트 밖의 JSONL 파일에 한 줄씩 저장한다.

declare(strict_types=1);

date_default_timezone_set('Asia/Seoul');

// 저장 위치: 컨테이너 환경변수 DATA_DIR (웹 루트 밖). 없으면 사이트 폴더 바깥의 data.
define('DATA_DIR', getenv('DATA_DIR') ?: __DIR__ . '/../../data');
// 새 신청 알림 메일 (NAS에 메일 발송 설정이 되어 있을 때만 동작). 비워두면 발송 안 함.
const NOTIFY_EMAIL = '';

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function reply(int $code, array $body): void {
    http_response_code($code);
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    reply(405, ['ok' => false, 'error' => 'method']);
}

// 스팸 방지용 숨은 필드
if (!empty($_POST['website'])) {
    reply(200, ['ok' => true]);
}

// NAS 역방향 프록시 → nginx 컨테이너를 거치므로 REMOTE_ADDR는 내부 주소다.
// 내부 주소에서 온 요청일 때만 X-Forwarded-For의 첫 번째 값을 방문자 IP로 쓴다.
function clientIp(): string {
    $remote = $_SERVER['REMOTE_ADDR'] ?? '';
    $fwd = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
    $isInternal = !filter_var($remote, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE | FILTER_FLAG_NO_RES_RANGE);
    if ($isInternal && $fwd !== '') {
        $first = trim(explode(',', $fwd)[0]);
        if (filter_var($first, FILTER_VALIDATE_IP)) return $first;
    }
    return $remote;
}

$clean = static fn($v, int $max) => mb_substr(trim(strip_tags((string)($v ?? ''))), 0, $max);

$type    = ($_POST['type'] ?? '') === 'inquiry' ? 'inquiry' : 'apply';
$name    = $clean($_POST['name'] ?? '', 50);
$phone   = $clean($_POST['phone'] ?? '', 20);
$email   = $clean($_POST['email'] ?? '', 100);
$job     = $clean($_POST['job'] ?? '', 30);
$license = $clean($_POST['license'] ?? '', 30);
$category = $clean($_POST['category'] ?? '', 20);
$message = $clean($_POST['message'] ?? '', 2000);
$agree   = ($_POST['agree'] ?? '') === '1';

if ($name === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL) || !$agree) {
    reply(422, ['ok' => false, 'error' => 'invalid']);
}
if ($type === 'inquiry' && $message === '') {
    reply(422, ['ok' => false, 'error' => 'invalid']);
}

if (!is_dir(DATA_DIR) && !mkdir(DATA_DIR, 0750, true)) {
    reply(500, ['ok' => false, 'error' => 'storage']);
}

$row = [
    'at'      => date('c'),
    'type'    => $type,
    'name'    => $name,
    'phone'   => $phone,
    'email'   => $email,
    'job'     => $job,
    'license' => $license,
    'category'=> $category,
    'message' => $message,
    'ip'      => clientIp(),
];

$ok = file_put_contents(
    DATA_DIR . '/submissions.jsonl',
    json_encode($row, JSON_UNESCAPED_UNICODE) . "\n",
    FILE_APPEND | LOCK_EX
);
if ($ok === false) {
    reply(500, ['ok' => false, 'error' => 'storage']);
}

if (NOTIFY_EMAIL !== '') {
    $subject = '=?UTF-8?B?' . base64_encode(($type === 'apply' ? '[가입 신청] ' : '[문의] ') . $name) . '?=';
    $body = "구분: {$type} {$category}\n성함: {$name}\n전화: {$phone}\n이메일: {$email}\n근무처: {$job}\n면허번호: {$license}\n\n{$message}\n";
    @mail(NOTIFY_EMAIL, $subject, $body, "Content-Type: text/plain; charset=UTF-8\r\n");
}

reply(200, ['ok' => true]);
