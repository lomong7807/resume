import type { ExternalLink } from './types';

export const profile = {
  name: '강윤수',
  alias: 'lomong',
  role: 'Backend & DevOps Engineer',
  tagline:
    'Java/Spring 백엔드 개발부터 Docker·Jenkins 기반 배포 환경 구축까지, 서비스의 개발과 운영을 함께 책임지는 개발자입니다.',
  photo: 'profile.jpg',
  links: [
    { label: 'GitHub', url: 'https://github.com/lomong7807' },
    { label: 'Blog', url: 'https://lomong7807.tistory.com/' },
  ] satisfies ExternalLink[],
};

export const seo = {
  title: '강윤수 | Backend & DevOps Engineer',
  description:
    'Java/Spring 백엔드 개발과 Docker·Jenkins 기반 DevOps 환경 구축을 함께 하는 개발자 강윤수의 포트폴리오. CI/CD 자동화로 배포 시간 95% 단축, Redis 캐싱으로 페이지 로드 65% 개선.',
};
