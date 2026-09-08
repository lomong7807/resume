import type { Experience } from './types';

// 경력은 업무 개요만 간략히. 구체적인 문제·기술·성과는 projects.ts에서 다룬다.
export const experiences: Experience[] = [
  {
    company: '라인업코리아',
    role: '솔루션연구소 선임 개발자',
    team: '개발팀 8~10명',
    start: '2024-09',
    end: null,
    summary: '데이터센터 모니터링 솔루션 개발 리드, 공공기관 기록관리시스템 고도화·보안 조치, 개발팀 인프라와 개발 프로세스 구축',
    highlights: [
      '데이터센터 모니터링 솔루션(Rainbow) 개발 리드, 외주 C 수집기 인수·안정화',
      '공공기관 기록관리시스템(서울기록원) 고도화 및 웹 취약점 조치',
      '개발팀 인프라 구축·운영 (Docker 환경 표준화, GitLab·Jenkins 기반 CI/CD 파이프라인 자동화)',
      '고객사 통계·리포트 시스템 개발 (한양대학교 학과평가 시스템, 통계 모니터링 웹)',
      '개발 프로세스 정립 (표준 문서화, Git·DB 컨벤션, AI 협업 개발 워크플로우)',
    ],
    tech: ['Java', 'Spring Boot', 'JPA', 'QueryDSL', 'Thymeleaf', 'MySQL', 'PostgreSQL', 'Oracle', 'Redis', 'Docker', 'Jenkins', 'Linux'],
  },
  {
    company: '에듀에듀',
    role: '개발사업팀 연구원',
    team: '개발팀 15~20명',
    start: '2023-12',
    end: '2024-08',
    summary: '고객사 웹 플랫폼 핵심 기능 개발 및 레거시 시스템 현대화',
    highlights: [
      '대학 웹 플랫폼 개발 (인증 체계 개선, 성능 개선, 로깅 시스템)',
      'LMS 웹 서비스 유지보수 및 운영 기능 개발 (퀴즈 관리, 설문·예약)',
      'RESTful API 설계·구현으로 신규 요구사항 대응',
    ],
    tech: ['Java', 'Spring', 'PHP', 'JSP', 'MyBatis', 'Thymeleaf', 'JWT', 'Redis', 'MySQL', 'Linux', 'Apache'],
  },
];
