// 운동재활 프레임워크 데이터: 역량 영역, 복귀 연속체(Return-to-Sport), 역할 구분표, 참고 기준.
// 해외 기준(BASRaT·IFSPT·NSCA·ACSM 등)의 구조를 학습해 우리 학회의 언어로 새로 쓴 것이며, 원문을 옮기지 않았다.

export type Competency = { id: string; icon: string; title: string; en: string; desc: string; items: string[] };

export const competencies: Competency[] = [
  {
    id: 'assess', icon: 'clipboard', title: '평가와 임상추론', en: 'Assessment & Clinical Reasoning',
    desc: '손상의 기전과 개인의 상태를 체계적으로 평가하고, 근거에 따라 임상적 판단을 내립니다.',
    items: ['병력 청취와 위험 요인 파악', '기능·움직임 평가와 결과 해석', '평가에서 중재로 이어지는 임상추론'],
  },
  {
    id: 'prevent', icon: 'shield', title: '손상 예방과 위험 관리', en: 'Injury Prevention & Risk',
    desc: '부상 위험 요인을 먼저 찾아 줄이고, 훈련 부하가 몸에 주는 영향을 관리합니다.',
    items: ['위험 요인 선별(스크리닝)', '부하·워크로드 관리의 원칙', '예방 운동 프로그램의 설계와 적용'],
  },
  {
    id: 'treat', icon: 'cross', title: '치료적 중재', en: 'Therapeutic Management',
    desc: '급성기 관리부터 통증·기능 회복까지, 적응증과 한계를 이해하고 근거에 따라 중재를 선택합니다.',
    items: ['급성기 손상의 초기 관리', '통증과학에 기반한 접근', '수기·물리적 인자 치료의 적응과 한계'],
  },
  {
    id: 'program', icon: 'dumbbell', title: '운동재활 설계와 진행', en: 'Exercise Rehabilitation Programming',
    desc: '가동범위에서 근력, 신경근 조절, 기능 동작으로 이어지는 단계별 프로그램을 설계하고 진행 기준을 세웁니다.',
    items: ['단계별 목표와 진행 기준 설정', '점진적 과부하의 적용', '연령·종목·동반 질환에 따른 개별 조정'],
  },
  {
    id: 'rts', icon: 'flag', title: '복귀 의사결정', en: 'Return-to-Sport Decision-making',
    desc: '"언제 돌아갈 수 있는가"를 기능·심리·맥락 기준으로 판단하고, 팀과 함께 결정합니다.',
    items: ['복귀 연속체(참여·스포츠·퍼포먼스)의 이해', '기능 검사와 심리적 준비도 평가', '다학제 팀과의 공유 의사결정'],
  },
  {
    id: 'perf', icon: 'activity', title: '퍼포먼스·컨디셔닝 연계', en: 'Performance & Conditioning Interface',
    desc: '재활이 끝나는 지점에서 컨디셔닝으로 매끄럽게 넘기고, 종목 특이적 훈련과 연결합니다.',
    items: ['재활에서 컨디셔닝으로의 전환', '스포츠 특이적 훈련과의 연계', '코치·트레이너와의 협업'],
  },
  {
    id: 'ebp', icon: 'chart', title: '근거기반 실무와 연구', en: 'Evidence-based Practice & Research',
    desc: '문헌을 비판적으로 읽고, 임상 결과를 측정하며, 현장의 질문을 연구로 발전시킵니다.',
    items: ['문헌 검색과 비판적 읽기', '임상 결과 측정(환자보고결과·기능검사)', '임상 연구의 수행과 발표'],
  },
  {
    id: 'pro', icon: 'users', title: '전문성 · 윤리 · 협력', en: 'Professionalism, Ethics & Collaboration',
    desc: '직무의 범위와 법적 책임을 분명히 알고, 다른 직종과 협력하며 계속 배웁니다.',
    items: ['직무 범위와 법적 책임의 이해', '환자·선수의 자기결정 존중', '다직종 협업과 지속적 전문성 개발(CPD)'],
  },
];

export type Phase = {
  id: string; no: string; ko: string; en: string; goal: string; lead: string;
  domains: { title: string; items: string[] }[];
};

export const phases: Phase[] = [
  {
    id: 'participation', no: '01', ko: '참여 복귀', en: 'Return to Participation',
    goal: '훈련과 경기 현장에 안전한 범위에서 다시 참여하기 시작하는 단계입니다.',
    lead: '의사·물리치료사가 주도하고, 스포츠재활사·트레이너는 정해진 안전 범위 안에서 보조합니다.',
    domains: [
      { title: '의학 · 조직 회복', items: ['증상(통증·부종)이 안정되어 있다', '의사 소견과 제한 사항이 확인되었다', '악화를 시사하는 위험 신호가 없다'] },
      { title: '기능', items: ['일상 동작을 통증 없이 수행한다', '기본 가동범위가 확보되었다', '기초 근력과 균형 회복이 확인되었다'] },
      { title: '심리 · 맥락', items: ['활동 재개에 대한 불안·두려움을 점검했다', '참여 범위와 강도를 지도자와 합의했다'] },
    ],
  },
  {
    id: 'sport', no: '02', ko: '스포츠 복귀', en: 'Return to Sport',
    goal: '종목 고유의 훈련과 경기에 단계적으로 복귀하는 단계입니다.',
    lead: '물리치료사와 스포츠재활사가 공동으로, 종목 동작 중심의 기능 훈련을 이끕니다.',
    domains: [
      { title: '기능 기준', items: ['점프·착지·방향 전환 등 종목 동작을 수행한다', '좌우 근력·파워의 비대칭이 목표 범위 안에 있다', '반복 수행 후에도 증상과 동작의 질이 유지된다'] },
      { title: '부하 내성', items: ['훈련 강도·양을 단계적으로 늘려도 반응이 안정적이다', '회복(수면·피로)을 함께 모니터링한다'] },
      { title: '심리 준비', items: ['복귀 준비도를 척도로 점검했다(자신감·불안)', '본인이 복귀 계획에 직접 참여했다'] },
      { title: '의사결정', items: ['의사·치료사·트레이너·지도자가 공유 기준으로 합의했다'] },
    ],
  },
  {
    id: 'performance', no: '03', ko: '퍼포먼스 복귀', en: 'Return to Performance',
    goal: '손상 이전 이상의 경기력을 되찾고, 이를 오래 유지하는 단계입니다.',
    lead: '컨디셔닝·퍼포먼스 팀이 주도하고, 의료진은 모니터링과 자문으로 함께합니다.',
    domains: [
      { title: '경기력', items: ['경기 강도와 빈도에 노출되어도 반응이 안정적이다', '기록과 지표가 목표 수준에 도달했다'] },
      { title: '재손상 예방', items: ['재손상 위험 요인을 주기적으로 모니터링한다', '예방 운동이 일상 루틴에 포함되어 있다'] },
      { title: '장기 관리', items: ['시즌 단위의 워크로드 계획이 있다', '정기 점검 일정이 정해져 있다'] },
    ],
  },
];

export const rtsNote = '교육용 개념 틀입니다. 실제 복귀 판단은 개인의 상태, 종목, 시기와 관련 법령에 따라 의사와 다학제 팀이 내립니다.';
export const rtsCitation = {
  text: 'Ardern CL, Glasgow P, Schneiders A, et al. 2016 Consensus statement on return to sport from the First World Congress in Sports Physical Therapy, Bern. Br J Sports Med. 2016.',
  doi: 'https://doi.org/10.1136/bjsports-2016-096278',
};

// 역할 구분표. ●: 주도·수행, ○: 참여·협력, —: 해당 없음
export type Role = '●' | '○' | '—';
export const roleCols = ['의사', '물리치료사 (정회원)', '스포츠재활사 · 트레이너 (협력회원)'];
export const roleRows: { act: string; sub?: string; v: [Role, Role, Role] }[] = [
  { act: '의학적 진단 · 처방', v: ['●', '—', '—'] },
  { act: '물리치료적 평가 · 치료', sub: '의사의 지도 아래, 관련 법령의 범위 안에서', v: ['○', '●', '—'] },
  { act: '운동재활 프로그램 설계 · 진행', v: ['○', '●', '○'] },
  { act: '운동 지도 · 컨디셔닝 · 퍼포먼스 훈련', v: ['—', '○', '●'] },
  { act: '복귀 단계의 모니터링 · 기능 평가 공유', v: ['○', '●', '○'] },
  { act: '복귀 의사결정 참여 (공유 의사결정)', v: ['●', '●', '○'] },
  { act: '팀·구단·학교 현장과의 소통과 교육', v: ['○', '○', '●'] },
];
export const roleNote = '본 표는 학회가 지향하는 협력 모델의 개념도입니다. 직무의 범위는 의료법·의료기사법 등 관계 법령과 소속 기관의 규정을 따릅니다.';

// 학회가 배운 국내외 기준. 사실은 각 기관의 공식 자료에 적힌 내용만 옮겼다.
export const benchmarks = [
  {
    org: 'BASRaT', full: 'British Association of Sport Rehabilitators and Trainers', country: '영국',
    what: '영국 스포츠재활사의 직능단체이자 전문표준원(PSA)이 인증한 등록기관입니다.',
    learn: ['대학 학위 과정을 인증하고 교육 프레임워크를 공개', '직무 범위를 문서로 규정(역할 구분, Role Delineation)', '공개 등록부, 2년 주기의 CPD, 직무 적합성 심의 절차'],
    apply: '역할 구분표 · 역량 프레임워크 · 평점(CPD) 제도 · 윤리위원회',
    url: 'https://www.basrat.org/',
  },
  {
    org: 'IFSPT', full: 'International Federation of Sports Physical Therapy', country: '국제',
    what: '스포츠물리치료사의 국제 연맹으로, 스포츠물리치료의 역량과 표준을 정리해 공개합니다.',
    learn: ['손상 예방·급성기 중재·재활·퍼포먼스 향상을 포괄하는 역량 체계', '역량마다 세부 기준(standards)을 두는 방식', 'EU 지원 프로젝트(SPA)로 스포츠물리치료의 역량과 표준을 개발한 이력'],
    apply: '8개 역량 영역 · 복귀 연속체 교육',
    url: 'https://ifspt.org/sports-physiotherapy',
  },
  {
    org: 'NSCA', full: 'National Strength and Conditioning Association', country: '미국',
    what: '1978년 설립된 근력·컨디셔닝 전문가 단체로, 72개국 이상 6만 명 이상의 회원·자격자가 있다고 소개합니다.',
    learn: ['독립 인증기관(NCCA)의 인정을 받은 자격 체계', '학술지(JSCR) 중심의 근거 기반 교육', '컨디셔닝 현장 전문가의 표준을 문서화'],
    apply: '협력회원(운동·컨디셔닝) 교육 기준 · 근거 중심 훈련 교육',
    url: 'https://www.nsca.com/',
  },
  {
    org: 'ACSM · Exercise is Medicine', full: 'American College of Sports Medicine', country: '미국',
    what: '스스로 세계 최대 규모의 스포츠의학·운동과학 단체라고 소개하며, 신체활동 평가와 처방을 진료의 표준으로 만드는 글로벌 이니셔티브(Exercise is Medicine)를 운영합니다.',
    learn: ['의료진이 운동을 치료 계획에 포함하도록 돕는 체계', '의료와 운동 전문가를 잇는 의뢰(리퍼럴) 구조'],
    apply: '치료와 운동의 연계 · 의사와 운동 전문가를 잇는 협력 모델',
    url: 'https://acsm.org/eim/',
  },
  {
    org: '대한선수트레이너협회', full: 'Korea Athletic Trainers Association (KATA)', country: '한국',
    what: '국내에서 선수트레이너(AT) 민간자격을 운영하는 단체입니다.',
    learn: ['협회 준회원 · 평점 · 학력/경력에 따른 응시 자격 구조', '현장(팀·학교)과 연결된 인력 양성 방식'],
    apply: '트레이너 직군과의 협력 방식 · 현장 연계',
    url: 'https://rkata.or.kr/',
  },
  {
    org: '대한스포츠의학회', full: 'Korean Society of Sports Medicine', country: '한국',
    what: '의사 중심의 스포츠의학 학회로, 1984년 창간된 대한스포츠의학회지(KCI 등재)를 발행합니다.',
    learn: ['의학적 진단·승인과 재활·훈련을 잇는 다학제 구조', '의사를 대상으로 한 스포츠의학 인증 제도와 평점 운영'],
    apply: '의사와의 협력 창구 · 복귀 의사결정의 의학적 기준 확인',
    url: '',
  },
];

export const nameNotice = '본 학회는 "한국운동재활학회" 및 "한국운동재활복지협회" 등 이름이 비슷한 다른 단체와 별개의 단체입니다.';
