// 운동재활 용어집. 정의는 일반적으로 통용되는 의미를 간단히 풀어 쓴 것이며, 교육용 설명입니다.
export type Term = { ko: string; en: string; def: string; group: string };

export const groups = ['운동재활 기본', '운동 방식', '평가 · 측정', '부하 · 복귀', '근거 · 전문성'];

export const terms: Term[] = [
  // 운동재활 기본
  { group: '운동재활 기본', ko: '운동재활', en: 'Exercise Rehabilitation', def: '손상이나 질환 이후 기능을 되찾기 위해 운동을 중심 수단으로 단계적으로 적용하는 접근입니다.' },
  { group: '운동재활 기본', ko: '가동범위', en: 'Range of Motion (ROM)', def: '관절이 움직일 수 있는 범위. 재활 초기에 가장 먼저 확인하고 회복하는 요소 중 하나입니다.' },
  { group: '운동재활 기본', ko: '가동성과 안정성', en: 'Mobility & Stability', def: '관절이 필요한 만큼 움직이는 능력(가동성)과 움직임 중 흔들리지 않게 유지하는 능력(안정성)을 함께 이르는 말입니다.' },
  { group: '운동재활 기본', ko: '수술 후 재활', en: 'Post-operative Rehabilitation', def: '수술 뒤 보호기부터 기능 회복까지, 수술 의사의 프로토콜에 따라 단계적으로 진행하는 재활입니다.' },
  { group: '운동재활 기본', ko: '프리햅', en: 'Prehabilitation', def: '수술 전에 근력과 기능, 수술에 대한 이해를 높여 수술 후 회복을 돕는 준비 프로그램입니다.' },
  { group: '운동재활 기본', ko: '기준 기반 진행', en: 'Criteria-based Progression', def: '시간이 지났다는 이유만이 아니라, 정해진 기능·통증 반응 기준을 충족해야 다음 단계로 넘어가는 방식입니다.' },
  { group: '운동재활 기본', ko: '만성 근골격계 통증', en: 'Chronic Musculoskeletal Pain', def: '근육, 힘줄, 관절 등에서 생기는 통증이 일반적으로 3개월 이상 이어지는 상태를 이르는 말입니다.' },
  { group: '운동재활 기본', ko: '골관절염', en: 'Osteoarthritis', def: '관절연골이 점진적으로 손상되며 통증과 기능 저하가 생기는 대표적인 퇴행성 관절 질환입니다.' },
  { group: '운동재활 기본', ko: '조직 치유 단계', en: 'Phases of Tissue Healing', def: '손상된 조직이 회복되는 과정을 염증기, 증식기, 재형성기로 나누어 설명하는 틀입니다. 단계별로 적절한 부하가 달라집니다.' },
  { group: '운동재활 기본', ko: '통증과학', en: 'Pain Science', def: '통증을 조직 손상뿐 아니라 신경계, 심리, 사회적 요인이 함께 만드는 경험으로 이해하는 학문 분야입니다.' },
  { group: '운동재활 기본', ko: '운동 사슬', en: 'Kinetic Chain', def: '인접한 관절과 분절이 연결되어 힘을 주고받으며 움직임을 만든다는 개념입니다.' },
  { group: '운동재활 기본', ko: '신경근 조절', en: 'Neuromuscular Control', def: '신경계가 근육의 활성 시점과 크기를 조절해 관절을 안정시키고 정확한 움직임을 만드는 능력입니다.' },
  { group: '운동재활 기본', ko: '고유수용감각', en: 'Proprioception', def: '눈으로 보지 않아도 관절의 위치와 움직임을 느끼는 감각입니다.' },
  // 운동 방식
  { group: '운동 방식', ko: '등척성 수축', en: 'Isometric Contraction', def: '관절이 움직이지 않는 상태에서 근육이 힘을 내는 수축입니다.' },
  { group: '운동 방식', ko: '구심성 · 원심성 수축', en: 'Concentric / Eccentric', def: '근육이 짧아지며 힘을 내는 것이 구심성, 길어지며 버티는 것이 원심성 수축입니다.' },
  { group: '운동 방식', ko: '등속성 수축', en: 'Isokinetic Contraction', def: '일정한 속도로 움직이도록 통제된 상태에서 힘을 내는 수축으로, 전용 장비로 측정·훈련합니다.' },
  { group: '운동 방식', ko: '개방 운동사슬', en: 'Open Kinetic Chain (OKC)', def: '손이나 발의 끝이 자유롭게 움직이는 운동입니다. 예: 의자에 앉아 무릎 펴기.' },
  { group: '운동 방식', ko: '폐쇄 운동사슬', en: 'Closed Kinetic Chain (CKC)', def: '손이나 발의 끝이 고정되어 여러 관절이 함께 움직이는 운동입니다. 예: 스쿼트.' },
  { group: '운동 방식', ko: '플라이오메트릭', en: 'Plyometrics', def: '근육이 늘어났다 빠르게 줄어드는 성질을 이용해 점프처럼 빠른 힘을 내도록 훈련하는 방식입니다.' },
  { group: '운동 방식', ko: '점진적 과부하', en: 'Progressive Overload', def: '몸이 적응하도록 운동의 부하를 단계적으로 늘려 가는 원리입니다.' },
  { group: '운동 방식', ko: 'FITT', en: 'Frequency · Intensity · Time · Type', def: '운동 처방의 기본 요소인 빈도, 강도, 시간, 종류를 가리키는 약어입니다.' },
  // 평가 · 측정
  { group: '평가 · 측정', ko: '임상추론', en: 'Clinical Reasoning', def: '평가에서 얻은 정보를 해석해 무엇이 문제이고 어떤 중재를 선택할지 판단하는 사고 과정입니다.' },
  { group: '평가 · 측정', ko: '환자보고결과', en: 'Patient-Reported Outcome Measure (PROM)', def: '환자나 선수가 직접 응답하는 증상, 기능, 삶의 질 점수입니다.' },
  { group: '평가 · 측정', ko: '기능 검사', en: 'Functional Test', def: '한 발 점프처럼 실제 동작을 수행하게 해 기능 수준을 확인하는 검사입니다.' },
  { group: '평가 · 측정', ko: '좌우 대칭 지수', en: 'Limb Symmetry Index (LSI)', def: '손상 쪽과 반대쪽의 수행 값을 비교한 비율입니다. 해석에는 개인과 종목의 맥락이 필요합니다.' },
  { group: '평가 · 측정', ko: '레드 플래그', en: 'Red Flags', def: '심각한 병리를 의심하게 하는 위험 신호로, 발견되면 즉시 의사에게 의뢰해야 하는 징후입니다.' },
  { group: '평가 · 측정', ko: '적응증과 금기', en: 'Indication / Contraindication', def: '어떤 중재를 적용해도 되는 경우(적응증)와 해서는 안 되는 경우(금기)를 이르는 말입니다.' },
  { group: '평가 · 측정', ko: '운동 자각도', en: 'Rating of Perceived Exertion (RPE)', def: '운동이 얼마나 힘들게 느껴지는지를 숫자로 표현하는 주관적 강도 척도입니다.' },
  // 부하 · 복귀
  { group: '부하 · 복귀', ko: '복귀 연속체', en: 'Return-to-Sport Continuum', def: '손상 후 참여 복귀, 스포츠 복귀, 퍼포먼스 복귀로 이어지는 단계적 흐름으로, 2016년 국제 합의문(Bern)에서 제시되었습니다.' },
  { group: '부하 · 복귀', ko: '직장 복귀', en: 'Return to Work', def: '질환이나 수술 뒤 직장 업무에 요구되는 신체 능력을 갖추고 일터로 돌아가는 것을 이르는 말입니다.' },
  { group: '부하 · 복귀', ko: '워크로드', en: 'Workload', def: '훈련과 경기로 몸에 가해진 부하와 그에 대한 반응을 이르는 말입니다.' },
  { group: '부하 · 복귀', ko: '급성:만성 부하 비율', en: 'Acute:Chronic Workload Ratio (ACWR)', def: '최근의 부하를 장기간 부하와 비교하는 지표입니다. 활용과 해석 방식에 학술적 논쟁이 있어 신중히 쓰입니다.' },
  { group: '부하 · 복귀', ko: '디로드', en: 'Deload', def: '회복과 적응을 돕기 위해 계획적으로 부하를 낮추는 기간입니다.' },
  { group: '부하 · 복귀', ko: '심리적 준비도', en: 'Psychological Readiness', def: '복귀에 대한 자신감과 불안 등 심리 상태입니다. 척도(예: ACL-RSI)로 점검하기도 합니다.' },
  { group: '부하 · 복귀', ko: '재손상', en: 'Re-injury', def: '이미 손상을 입었던 부위나 같은 종류의 손상이 다시 생기는 것입니다.' },
  { group: '부하 · 복귀', ko: '공유 의사결정', en: 'Shared Decision-making', def: '의료진과 선수·환자가 정보를 나누며 함께 결정을 내리는 방식입니다.' },
  { group: '부하 · 복귀', ko: '다학제 팀', en: 'Multidisciplinary Team (MDT)', def: '의사, 물리치료사, 트레이너, 코치 등 여러 직종이 한 팀으로 협력하는 체계입니다.' },
  // 근거 · 전문성
  { group: '근거 · 전문성', ko: '근거기반 실무', en: 'Evidence-based Practice (EBP)', def: '연구 근거, 임상 경험, 환자의 가치와 선호를 통합해 의사결정을 하는 방식입니다.' },
  { group: '근거 · 전문성', ko: '지속적 전문성 개발', en: 'Continuing Professional Development (CPD)', def: '자격을 얻은 뒤에도 교육과 학술 활동으로 전문성을 계속 개발하고 기록하는 제도입니다.' },
  { group: '근거 · 전문성', ko: '직무 범위', en: 'Scope of Practice', def: '법령과 교육, 자격에 따라 한 직종이 수행할 수 있는 업무의 범위입니다.' },
  { group: '근거 · 전문성', ko: '의뢰', en: 'Referral', def: '자신의 범위를 넘는 문제를 적절한 전문가에게 보내는 것입니다.' },
];
