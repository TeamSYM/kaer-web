// 대한운동재활학회(KAER) 사이트 공통 데이터.
// 값이 비어 있는 항목(연락처·주소·회비 등)은 화면에서 자동으로 숨겨진다. 임의의 값을 넣지 않는다.

export const site = {
  name: '대한운동재활학회',
  nameEn: 'Korean Academy of Exercise Rehabilitation',
  short: 'KAER',
  // 협회 내 공식 편제상의 명칭. 소속 안내 문구에 쓴다.
  formalName: '대한운동재활물리치료분과학회',
  slogan: '치료에서 복귀까지, 근거로 이어지는 운동재활.',
  sloganEn: 'From Treatment to Return to Performance.',
  // 아래는 학회 사무국에서 확정되면 채운다. 비어 있으면 푸터·문의 화면에 표시되지 않는다.
  contact: { email: '', phone: '', address: '', hours: '' },
};

// 소속: (사)대한물리치료사협회 산하 대한운동재활물리치료분과학회(학회 측 확인).
export const parent = {
  name: '(사)대한물리치료사협회',
  short: '대한물리치료사협회',
  en: 'Korea Physical Therapy Association',
  url: 'http://www.kpta.co.kr/',
  logo: '/img/partners/kpta.png',
  parentSociety: '',
  status: 'approved' as 'approved' | 'pending',
};

// 협력 기관: 대한스포츠재활사협회와의 업무협약(MOU).
// status 가 'agreed' 이면 "협약을 맺고 협력"으로, 'planned' 이면 "협약을 추진"으로 표기한다. signedDate 는 확정되면 'YYYY-MM-DD'.
export const partner = {
  name: '대한스포츠재활사협회',
  short: '스포츠재활사협회',
  status: 'agreed' as 'agreed' | 'planned',
  signedDate: '',
  url: '',
  logo: '', // 로고 파일(/img/partners/...)이 확정되면 경로를 넣는다. 비어 있으면 이름 표기로 대신한다.
};

export const nav = [
  { href: '/about/', label: '학회 소개' },
  { href: '/exercise-rehab/', label: '운동재활' },
  { href: '/partnership/', label: '협력 · MOU' },
  { href: '/education/', label: '교육 · 자격' },
  { href: '/membership/', label: '회원 안내' },
  { href: '/resources/', label: '자료실' },
];

export const inquiryTypes = ['정회원 가입', '준회원 가입', '협력회원 가입', '기관회원 · 제휴', '교육과정', '학술 · 연구', '기타'];

// 화면 곳곳에서 같은 문장을 쓰도록 한 곳에서 만든다. 상태값이 바뀌면 사이트 전체 표기가 함께 바뀐다.
export const parentLine = parent.status === 'approved' ? `${parent.name} 산하 ${site.formalName}` : `${parent.name} 산하 학회 설립 추진`;
export const partnerLine = partner.status === 'agreed'
  ? `${partner.name}와 업무협약(MOU)을 맺고 협력합니다`
  : `${partner.name}와 업무협약(MOU)을 추진합니다`;
