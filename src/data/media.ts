// 사진·영상 목록과 출처. 모두 상업적 이용이 가능한 무료 라이선스 자료이며, 촬영자와 원본 주소를 함께 기록한다.
// 사진 속 인물은 모델이며 학회 회원이나 실제 환자가 아니다. (출처 페이지 /credits/ 에서도 안내한다.)

export type Photo = {
  src: string; alt: string; w: number; h: number; pos?: string;
  by: string; url: string; site: 'Unsplash' | 'Pexels';
};

export const photos = {
  'msk-shoulder': {
    src: '/img/photos/msk-shoulder.jpg', w: 1600, h: 1067, pos: 'center 30%',
    alt: '트레이너가 어깨 위로 팔을 올려 스트레칭하는 사람의 자세를 잡아 주는 모습',
    by: 'Andres Ayrton', url: 'https://www.pexels.com/photo/positive-overweigh-woman-stretching-arms-with-asian-trainer-in-park-6551249/', site: 'Pexels',
  },
  'postop-knee': {
    src: '/img/photos/postop-knee.jpg', w: 1600, h: 1067, pos: 'center 55%',
    alt: '한 사람이 누워 있는 사람의 발을 잡고 하체 운동을 도와주는 모습',
    by: 'Ketut Subiyanto', url: 'https://www.pexels.com/photo/a-man-doing-sit-ups-4853717/', site: 'Pexels',
  },
  'sport-start': {
    src: '/img/photos/sport-start.jpg', w: 1600, h: 720, pos: 'center 55%',
    alt: '육상 트랙에서 출발 자세를 취한 선수',
    by: 'Serghei Trofimov', url: 'https://unsplash.com/photos/XIKBB9upCcI', site: 'Unsplash',
  },
  'gait-bars': {
    src: '/img/photos/gait-bars.jpg', w: 1000, h: 1500, pos: 'center 40%',
    alt: '마주 선 두 사람이 손을 맞잡고 균형 자세를 지도하는 모습',
    by: 'Ketut Subiyanto', url: 'https://www.pexels.com/photo/young-man-and-girl-doing-arm-stretching-exercise-4852728/', site: 'Pexels',
  },
  'clinic-team': {
    src: '/img/photos/clinic-team.jpg', w: 1600, h: 1068, pos: 'center 40%',
    alt: '진료실에서 의사가 환자와 마주 앉아 내용을 확인하는 모습',
    by: 'Chokniti Khongchum', url: 'https://www.pexels.com/photo/a-woman-in-white-lab-gown-5593720/', site: 'Pexels',
  },
  reformer: {
    src: '/img/photos/reformer.jpg', w: 1000, h: 1500, pos: 'center 45%',
    alt: '운동 기구 위에서 자세를 점검하며 지도하는 트레이너와 이용자',
    by: 'Ketut Subiyanto', url: 'https://www.pexels.com/photo/a-couple-setting-up-an-elliptical-trainer-4853878/', site: 'Pexels',
  },
  'teach-dumbbell': {
    src: '/img/photos/teach-dumbbell.jpg', w: 1600, h: 1067, pos: 'center 45%',
    alt: '트레이너가 케이블 운동 기구를 당기는 이용자에게 자세를 안내하는 모습',
    by: 'Andres Ayrton', url: 'https://www.pexels.com/photo/optimistic-asian-coach-clapping-hands-while-supporting-woman-6551434/', site: 'Pexels',
  },
  'demo-arm': {
    src: '/img/photos/demo-arm.jpg', w: 1600, h: 1067, pos: 'center 45%',
    alt: '두 사람이 마주 서서 팔 스트레칭 동작을 함께 시연하는 모습',
    by: 'Ketut Subiyanto', url: 'https://www.pexels.com/photo/young-athletes-training-togather-outdoors-4853032/', site: 'Pexels',
  },
  'care-hands': {
    src: '/img/photos/care-hands.jpg', w: 1600, h: 1067, pos: 'center 40%',
    alt: '트레이너가 상대의 팔꿈치를 잡고 어깨 스트레칭을 부드럽게 도와주는 모습',
    by: 'Andres Ayrton', url: 'https://www.pexels.com/photo/asian-trainer-helping-plus-sized-female-stretching-in-park-6551241/', site: 'Pexels',
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

// 홈 히어로 영상: 아래 세 클립을 이어 붙여 약 17초로 편집했다(무음, 반복 재생).
export const heroVideo = {
  src: '/video/hero.mp4',
  poster: '/video/hero-poster.jpg',
  clips: [
    { title: 'A couple exercising together', by: 'Ketut Subiyanto', url: 'https://www.pexels.com/video/a-couple-exercising-together-4858885/' },
    { title: 'A couple exercising together', by: 'Ketut Subiyanto', url: 'https://www.pexels.com/video/a-couple-exercising-together-4858700/' },
    { title: 'Couple doing exercise together', by: 'Ketut Subiyanto', url: 'https://www.pexels.com/video/couple-doing-exercise-together-4858884/' },
  ],
};
