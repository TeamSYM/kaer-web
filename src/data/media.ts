// 사진·영상 목록과 출처. 모두 상업적 이용이 가능한 무료 라이선스 자료이며, 촬영자와 원본 주소를 함께 기록한다.
// 사진 속 인물은 모델이며 학회 회원이나 실제 환자가 아니다. (출처 페이지 /credits/ 에서도 안내한다.)

export type Photo = {
  src: string; alt: string; w: number; h: number; pos?: string;
  by: string; url: string; site: 'Unsplash' | 'Pexels';
};

export const photos = {
  'msk-shoulder': {
    src: '/img/photos/msk-shoulder.jpg', w: 1600, h: 1066, pos: 'center 30%',
    alt: '물리치료사가 엎드린 환자의 어깨 관절을 움직이며 치료하는 모습',
    by: 'Marc Zeman', url: 'https://unsplash.com/photos/uLWW09LLG04', site: 'Unsplash',
  },
  'postop-knee': {
    src: '/img/photos/postop-knee.jpg', w: 1600, h: 1066, pos: 'center 35%',
    alt: '물리치료사가 누워 있는 환자의 무릎을 잡고 가동 치료를 하는 모습',
    by: 'yury kirillov', url: 'https://unsplash.com/photos/pbUWW-CBoqY', site: 'Unsplash',
  },
  'sport-start': {
    src: '/img/photos/sport-start.jpg', w: 1600, h: 720, pos: 'center 55%',
    alt: '육상 트랙에서 출발 자세를 취한 선수',
    by: 'Serghei Trofimov', url: 'https://unsplash.com/photos/XIKBB9upCcI', site: 'Unsplash',
  },
  'gait-bars': {
    src: '/img/photos/gait-bars.jpg', w: 1000, h: 1500, pos: 'center 42%',
    alt: '평행봉 앞에서 환자와 이야기하며 보행 재활을 돕는 치료사',
    by: 'Ortopediatri Çocuk Ortopedi Akademisi', url: 'https://unsplash.com/photos/7vXHRcMGETQ', site: 'Unsplash',
  },
  'clinic-team': {
    src: '/img/photos/clinic-team.jpg', w: 1600, h: 1066, pos: 'center 40%',
    alt: '평행봉을 잡은 환자 곁에서 진료 내용을 확인하는 의사',
    by: 'Ortopediatri Çocuk Ortopedi Akademisi', url: 'https://unsplash.com/photos/B3qVNvZ0AHY', site: 'Unsplash',
  },
  reformer: {
    src: '/img/photos/reformer.jpg', w: 1000, h: 1500, pos: 'center 45%',
    alt: '재활 운동 기구 위에 누운 환자를 지도하는 치료사',
    by: 'Ahmet Kurt', url: 'https://unsplash.com/photos/-MLRlIgtPYU', site: 'Unsplash',
  },
  'teach-dumbbell': {
    src: '/img/photos/teach-dumbbell.jpg', w: 1600, h: 1066, pos: 'center 45%',
    alt: '치료사가 환자의 손을 잡고 가벼운 덤벨 운동을 안내하는 모습',
    by: 'Sincerely Media', url: 'https://unsplash.com/photos/gWQNG2wMLwA', site: 'Unsplash',
  },
  'demo-arm': {
    src: '/img/photos/demo-arm.jpg', w: 1600, h: 1066, pos: 'center 45%',
    alt: '치료사와 환자가 마주 서서 팔 운동을 시연하는 모습',
    by: 'Sincerely Media', url: 'https://unsplash.com/photos/lFAiVJNtmj4', site: 'Unsplash',
  },
  'care-hands': {
    src: '/img/photos/care-hands.jpg', w: 1600, h: 1066, pos: 'center 40%',
    alt: '치료사가 환자의 팔을 잡고 부드럽게 지지하는 모습',
    by: 'Sincerely Media', url: 'https://unsplash.com/photos/qzmPDJJOz4c', site: 'Unsplash',
  },
} satisfies Record<string, Photo>;

export type PhotoKey = keyof typeof photos;

// 홈 히어로 영상: 아래 세 클립을 이어 붙여 14초로 편집했다(무음, 반복 재생).
export const heroVideo = {
  src: '/video/hero.mp4',
  poster: '/video/hero-poster.jpg',
  clips: [
    { title: 'Man on knees strengthening the back', by: 'Kampus Production', url: 'https://www.pexels.com/video/man-on-knees-strengthening-the-back-6111110/' },
    { title: 'Man having a physical therapy', by: 'Kampus Production', url: 'https://www.pexels.com/video/man-having-a-physical-therapy-6111045/' },
    { title: 'Man having a physical therapy', by: 'Kampus Production', url: 'https://www.pexels.com/video/man-having-a-physical-therapy-6111025/' },
  ],
};
