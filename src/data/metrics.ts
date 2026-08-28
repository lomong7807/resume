import type { Metric } from './types';

export const metrics: Metric[] = [
  {
    value: '95',
    suffix: '%',
    label: '배포 시간 단축',
    basis: 'CI/CD 파이프라인 구축 — 최대 1시간 → 1분',
  },
  {
    value: '65',
    suffix: '%',
    label: '페이지 로드 개선',
    basis: 'Redis 캐싱 — 1,000ms → 300~400ms',
  },
  {
    value: '50',
    suffix: '%',
    label: '온보딩 시간 단축',
    basis: '개발팀 표준 문서화 프로세스 도입',
  },
  {
    value: '99.9',
    suffix: '%',
    label: '소스 보존율',
    basis: 'GitLab 자동 백업·모니터링 구축',
  },
];
