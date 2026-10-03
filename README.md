# 대한운동재활학회 (KAER) 홈페이지

Astro 정적 사이트. 카이로프랙틱교육원·오스테오파시 학회 사이트와 같은 구조(`TeamSYM/chirokorea-web`, `TeamSYM/kaopt-web`)를 바탕으로 새로 만들었다.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/ 생성 (sitemap 포함)
```

## 어디를 고치나
| 바꾸려는 것 | 파일 |
|---|---|
| 학회명, 슬로건, 연락처, **소속·협약 상태값** | `src/data/site.ts` |
| 8개 역량, 복귀 연속체(체크리스트), 역할 구분표, 참고 기준 | `src/data/framework.ts` |
| 교육 단계·모듈, 평점(CPD) 기준, 회원 유형 | `src/data/education.ts` |
| 용어집 | `src/data/glossary.ts` |
| 색(팔레트) | `src/styles/global.css` 맨 위 `:root` |
| 로고·대표 이미지·일러스트 | `public/img/` (생성 스크립트: `tools/make_assets.py`, 파일을 직접 교체해도 된다) |

## 반드시 확정해서 채울 값 (비어 있으면 화면에서 숨겨지거나 "설립 추진"으로 표기된다)
1. `site.ts` → `parent.status`: 대한물리치료사협회 승인 공문 등 근거가 확정되면 `'approved'`. 그 전에는 "산하 학회 설립 추진"으로 표기된다.
2. `site.ts` → `partner.status`, `partner.signedDate`: 업무협약 체결이 확정되면 일자를 넣는다. `partner.logo`에 협회 로고 경로를 넣으면 이름 표기 대신 로고가 나온다.
3. `site.ts` → `contact`: 이메일·전화·주소. 비어 있으면 푸터에 "문의 양식 이용" 안내만 나온다.
4. `education.ts` → `programStatus`: 교육과정·평점 기준을 이사회가 확정하면 `'confirmed'`로 바꾸고 `hours`(시수)를 채운다. 지금 값은 모두 **안(案)**이다.
5. 임원 명단, 회비는 확정 전이라 게재하지 않았다.

## 의도적으로 넣지 않은 것
- 방문 통계 전송과 상담 채팅 위젯: 사내 워크스페이스에 사이트를 등록해야 동작하고 방문자 정보를 보내므로, 이 사이트가 정해진 뒤 따로 연결한다.
- 검색엔진용 구조화 데이터(JSON-LD)와 메타 설명에는 **소속·협력 관계를 넣지 않았다.** 승인 근거가 확정된 뒤에 추가한다.
- 네이버·구글 소유확인 코드 자리는 없다. 서치어드바이저·서치 콘솔 등록 후 `Base.astro`에 메타 태그를 추가한다.

## 배포 전 점검
- 신청 폼은 `/api/apply.php`(NAS PHP)로 보낸다. 같은 NAS 구성(`deploy/`, `site-deployer`)을 쓰려면 별도 설정이 필요하다. 이 저장소에는 아직 `deploy/`가 없다.
- `astro.config.mjs`의 `site`와 `public/robots.txt`의 도메인은 가칭(`www.kaer.or.kr`)이다.
- 법률 검토: 의료법(광고 등)·의료기사법에 비추어 "치료" 관련 표현, 역할 구분표, 협력회원 안내를 확인한다.
- 개인정보 처리방침(`/privacy/`)은 초안이다.
- 로고 사용 허락: 대한물리치료사협회 로고(`public/img/partners/kpta.png`)는 오스테오파시 학회 사이트에서 쓰던 파일이다. 이 사이트에서의 사용도 확인한다.
- 엠블럼은 임시 디자인이다. 정식 로고가 정해지면 교체한다.

## 다루는 영역
근골격계 질환, 수술 후 재활, 스포츠 손상과 복귀 세 영역을 같은 뼈대(평가 → 단계적 운동재활 → 복귀 기준)로 다룬다. 영역·예시는 `src/data/framework.ts`의 `domains`, 수술 후 재활 로드맵은 `postopPhases`에 있다. 수술 후 재활은 시기가 아닌 기준으로 서술했고, 프로토콜은 수술 의사의 지시를 따른다고 명시했다.

학습한 국내외 기준과 출처는 `docs/BENCHMARK_NOTES.md`에 정리했다.
