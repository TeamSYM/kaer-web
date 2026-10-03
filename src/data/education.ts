// 교육 · 자격 · 회원 데이터. 모두 "안(案)"이며, 이사회에서 확정되면 status 를 'confirmed' 로 바꾼다.
// 확정되지 않은 시수·회비·점수는 넣지 않았다(비어 있으면 화면에서 "확정 후 안내"로 표시).

export const programStatus: 'proposal' | 'confirmed' = 'proposal';

export type Track = 'both' | 'A' | 'B';
export const tracks = {
  A: { label: '임상 트랙', who: '물리치료사(정회원)', desc: '평가·치료·운동재활과 복귀 의사결정을 임상 관점에서 다룹니다.' },
  B: { label: '운동 · 컨디셔닝 트랙', who: '스포츠재활사·트레이너 등(협력회원)', desc: '운동 지도, 컨디셔닝, 복귀 후 훈련 설계를 다룹니다. 의료행위 영역은 포함하지 않습니다.' },
};

export type Level = {
  id: string; no: string; title: string; en: string; goal: string;
  modules: { name: string; track: Track }[]; hours?: string;
};

export const levels: Level[] = [
  {
    id: 'foundation', no: 'Level 1', title: '기초 과정', en: 'Foundation',
    goal: '운동재활을 이해하는 공통 언어와 사고방식을 익힙니다.',
    modules: [
      { name: '기능해부와 생체역학', track: 'both' },
      { name: '손상과 조직 치유', track: 'both' },
      { name: '평가의 기초와 임상추론', track: 'A' },
      { name: '운동 처방의 기초(FITT · 점진적 과부하)', track: 'both' },
      { name: '근거기반 실무(EBP) 입문', track: 'both' },
      { name: '직무 범위 · 윤리 · 법규', track: 'both' },
    ],
  },
  {
    id: 'clinical', no: 'Level 2', title: '임상 과정', en: 'Clinical',
    goal: '부위별 근골격계 질환과 수술 후 상태를 평가에서 재활까지 이어서 다룹니다.',
    modules: [
      { name: '어깨', track: 'both' },
      { name: '무릎 (전방십자인대 등)', track: 'both' },
      { name: '발목 · 발', track: 'both' },
      { name: '요추 · 골반 · 고관절', track: 'both' },
      { name: '수술 후 재활 (인공관절 · 십자인대 · 회전근개 · 척추)', track: 'A' },
      { name: '근골격계 만성 질환의 운동 처방', track: 'both' },
      { name: '신경근 조절과 통증과학', track: 'A' },
      { name: '근력 · 파워 훈련의 원리와 적용', track: 'B' },
    ],
  },
  {
    id: 'return', no: 'Level 3', title: '복귀 과정', en: 'Return to Sport',
    goal: '재활이 일상·직장·스포츠 복귀로 이어지도록 기준과 협업 방식을 배웁니다.',
    modules: [
      { name: '기능 검사와 복귀 기준', track: 'both' },
      { name: '의료진 승인 이후의 운동 지도', track: 'B' },
      { name: '부하 · 워크로드 관리', track: 'both' },
      { name: '심리적 준비도와 선수 교육', track: 'both' },
      { name: '공유 의사결정과 다학제 협업', track: 'both' },
      { name: '사례 컨퍼런스', track: 'both' },
    ],
  },
  {
    id: 'specialist', no: 'Level 4', title: '전문 과정', en: 'Specialist',
    goal: '종목·대상별 심화와 임상 연구, 슈퍼비전을 통해 전문성을 완성합니다.',
    modules: [
      { name: '종목별 심화 (구기 · 육상 · 격투 등)', track: 'both' },
      { name: '임상 연구 과제 수행', track: 'both' },
      { name: '임상 실습과 슈퍼비전', track: 'A' },
      { name: '현장 연계 실습(팀 · 학교 · 센터)', track: 'B' },
    ],
  },
];

export const credentialNote = '교육과정과 자격 요건은 이사회 확정 전의 안(案)입니다. 시수와 비용은 확정 후 안내합니다.';

// 평점(CPD) 계산기 기준(안). 2년 주기를 가정한다.
export const cpd = {
  cycleYears: 2,
  target: 100,
  rows: [
    { id: 'course', label: '학회 교육과정 수강', unit: '과정', points: 20 },
    { id: 'congress', label: '학술대회 · 세미나 참석', unit: '회', points: 10 },
    { id: 'online', label: '온라인 교육 이수', unit: '과정', points: 5 },
    { id: 'case', label: '임상 사례 컨퍼런스 참여', unit: '회', points: 5 },
    { id: 'present', label: '학술 발표 (구연 · 포스터)', unit: '건', points: 15 },
    { id: 'paper', label: '논문 게재 (저자)', unit: '편', points: 30 },
    { id: 'service', label: '학회 위원회 활동', unit: '년', points: 10 },
  ],
};

export type Member = { id: string; title: string; en: string; who: string; can: string[]; cannot?: string; featured?: boolean };
export const members: Member[] = [
  {
    id: 'regular', title: '정회원', en: 'Regular Member', featured: true,
    who: '물리치료사 면허를 가진 보건의료인',
    can: ['모든 교육과정(임상 트랙)과 학술 활동 참여', '평점(CPD) 관리와 수료 인증', '위원회 활동과 학회 운영 참여'],
  },
  {
    id: 'associate', title: '준회원', en: 'Associate Member', who: '물리치료학 전공 학생 및 졸업 예정자',
    can: ['기초 과정과 학술 행사 참여', '임상 사례 컨퍼런스 청강'],
  },
  {
    id: 'partner', title: '협력회원', en: 'Partner Member', who: '스포츠재활사 · 선수트레이너 · 운동 전문가 등',
    can: ['운동 · 컨디셔닝 트랙 교육 참여', '복귀 프로세스 공동 연구와 학술 행사 참여', '현장 사례 공유와 교류'],
    cannot: '의료행위에 해당하는 영역의 교육·활동은 포함하지 않습니다.',
  },
  {
    id: 'org', title: '기관회원', en: 'Institutional Member', who: '병원 · 재활센터 · 구단 · 학교 · 연구기관',
    can: ['소속 인력의 교육 · 연수 협력', '공동 연구와 현장 프로젝트', '학회 행사 후원 · 제휴'],
  },
];

// 회원 유형 찾기
export const finder = [
  { key: 'pt', label: '물리치료사 면허가 있습니다', result: 'regular' },
  { key: 'student', label: '물리치료학을 공부하는 학생입니다', result: 'associate' },
  { key: 'trainer', label: '스포츠재활사 · 트레이너 · 운동 전문가입니다', result: 'partner' },
  { key: 'org', label: '병원 · 센터 · 구단 · 학교를 대표합니다', result: 'org' },
];
