import type { Experience } from './types';

export const experiences: Experience[] = [
  {
    company: '라인업코리아',
    role: '솔루션연구소 선임 개발자',
    team: '개발팀 8~10명',
    start: '2024-09',
    end: null,
    summary: '하드웨어 모니터링 솔루션 개발과 개발팀 인프라 환경 구축·운영 총괄',
    highlights: [
      'GitLab·Jenkins 기반 CI/CD 파이프라인 구축 — 배포 시간 ==95% 단축== (10분~1시간 → 1분)',
      'Docker 컨테이너 환경 도입으로 로컬 의존성 제거, 개발·스테이징·프로덕션 환경 표준화',
      'SNMP 프로토콜 기반 하드웨어 모니터링 대시보드 개발로 데이터센터 관리 효율화',
      '표준 문서화 프로세스 도입 — 신규 입사자 온보딩 시간 ==50% 단축==',
      'Git 브랜치 전략·커밋 메시지·DB 네이밍 컨벤션 정립으로 협업 비용 절감',
    ],
    tech: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'PostgreSQL', 'Redis', 'Docker', 'Kafka', 'Jenkins', 'Linux'],
  },
  {
    company: '에듀에듀',
    role: '개발사업팀 연구원',
    team: '개발팀 15~20명',
    start: '2023-12',
    end: '2024-08',
    summary: '고객사 웹 플랫폼 핵심 기능 개발 및 레거시 시스템 현대화',
    highlights: [
      'JWT Access + Refresh Token 이중 인증/인가 시스템 구현 — 단일 토큰 방식의 탈취 취약점 보완',
      'Redis 캐싱 도입으로 페이지 로드 속도 ==65% 개선== (1,000ms → 300~400ms)',
      'AOP 패턴 기반 전사 웹 페이지 로깅 시스템 구현 — 사용자 행동 분석 기반 마련',
      'RESTful API 아키텍처 구축으로 ==20건+== 신규 요구사항 효율적 반영',
      '관리자 중심 퀴즈 관리 시스템 구축으로 운영의 개발자 의존 제거',
    ],
    tech: ['Java', 'Spring', 'PHP', 'JSP', 'MyBatis', 'Thymeleaf', 'JWT', 'Redis', 'MySQL', 'Linux', 'Apache'],
  },
];
