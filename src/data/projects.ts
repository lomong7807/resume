import type { CompanyProject, SideProject } from './types';

export const companyProjects: CompanyProject[] = [
  {
    name: '하드웨어 모니터링 솔루션',
    org: '라인업코리아',
    start: '2025-06',
    end: null,
    problem:
      '데이터센터의 서버·네트워크 장비 상태를 수작업으로 점검해야 했고, 장비 데이터를 한곳에서 볼 수 있는 시스템이 없었습니다.',
    solution: [
      'SNMP 프로토콜 기반 실시간 모니터링 시스템 설계 — 관리 시스템 DB 설계·구축',
      '서버 파일 → XML 파싱 → DB 저장으로 이어지는 수집 자동화 파이프라인 개발',
      'Wireshark 패킷 분석으로 SNMP 프로토콜 데이터 구조 검증',
      'MSA 기반 프레임워크로 모니터링 서비스 모듈화 및 독립 배포 환경 구성',
    ],
    outcome: ['수작업 점검을 대시보드 기반 실시간 모니터링으로 대체 (진행 중)'],
    tech: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Redis', 'Kafka', 'Docker'],
  },
  {
    name: '개발·인프라 서버 구축 및 운영',
    org: '라인업코리아',
    start: '2025-04',
    end: '2025-06',
    problem:
      '배포가 수동이라 한 번에 10분~1시간이 걸리고 휴먼 에러가 잦았으며, 개발 환경이 로컬에 묶여 있고 소스 백업 체계가 없었습니다.',
    solution: [
      'Docker 기반 컨테이너 환경 표준화 — 개발/스테이징/프로덕션 환경 일관성 확보',
      'GitLab 구축 + 자동 백업 시스템, 백업 성공·실패와 스토리지 사용량 모니터링 자동화',
      'GitLab Webhook + Jenkins Pipeline 연동으로 빌드·배포 자동화',
      'Jenkins ↔ MS Teams 연동으로 빌드·머지 상태 실시간 알림',
    ],
    outcome: [
      '배포 시간 95% 단축 (10분~1시간 → 1분)',
      '소스 보존율 99.9% 달성',
      '빌드·배포 실패 즉시 알림으로 장애 대응 시간 단축',
    ],
    tech: ['Docker', 'GitLab', 'Jenkins', 'Linux', 'nginx'],
  },
  {
    name: '통계 모니터링 웹 개발·운영',
    org: '라인업코리아',
    start: '2024-09',
    end: '2025-03',
    problem:
      '온프레미스 내부망이라는 제약된 환경에서 통계 모니터링 웹을 개발하고 안정적으로 운영해야 했습니다.',
    solution: [
      'Java/Spring/JSP 기반 웹 애플리케이션 개발 — RESTful 설계 원칙 기반 CRUD 구현',
      'JavaScript 라이브러리를 활용한 동적 모니터링 화면 구현',
    ],
    outcome: ['내부망 환경에서 99.5% 안정 운영, 다양한 서버 이슈 해결 경험 축적'],
    tech: ['Java', 'Spring', 'JSP', 'JavaScript', 'MySQL'],
  },
  {
    name: '대학교 웹 솔루션 개발',
    org: '에듀에듀',
    start: '2024-05',
    end: '2024-08',
    problem:
      '단일 토큰 인증이라 토큰 탈취에 취약했고, 반복적인 DB 조회로 페이지 로드에 1초 이상 걸렸습니다.',
    solution: [
      'JWT Access + Refresh Token 이중 인증/인가 시스템 구현',
      'Redis로 Refresh Token 관리 및 정적 데이터 캐싱',
      'AOP 패턴 기반 전사 페이지 로깅 시스템 — CRUD 이벤트·방문 기록 자동 수집',
    ],
    outcome: [
      '페이지 로드 속도 65% 개선 (1,000ms → 300~400ms)',
      '토큰 탈취 시 피해를 제한하는 인증 구조 확보',
      '사용자 행동 데이터 축적 기반 마련',
    ],
    tech: ['Java', 'Spring', 'JSP', 'MyBatis', 'JWT', 'Redis', 'MySQL'],
  },
  {
    name: 'LMS 웹 서비스 유지보수',
    org: '에듀에듀',
    start: '2023-12',
    end: '2024-04',
    problem: '퀴즈 생성·관리가 개발자에게 의존해, 운영 요청이 있을 때마다 개발 리소스가 소모됐습니다.',
    solution: [
      '관리자가 직접 퀴즈를 생성·관리하는 시스템 구축 — 합격 기준·재시험 횟수 커스터마이징',
      '강의 수강 완료자만 응시할 수 있는 권한 체계 구현',
      '강의 설문조사·예약 서비스 구현',
    ],
    outcome: ['개발자 개입 없이 운영자가 직접 퀴즈 운영', '설문 기반 사용자 피드백 루프 마련'],
    tech: ['PHP', 'JavaScript', 'jQuery', 'MySQL', 'Apache'],
  },
];

// 사이드 프로젝트 — 저장소 조사 후 채움
export const sideProjects: SideProject[] = [];
