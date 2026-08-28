import type { CompanyProject, SideProject } from './types';

export const companyProjects: CompanyProject[] = [
  {
    name: '하드웨어 모니터링 솔루션',
    org: '라인업코리아',
    start: '2025-06',
    end: null,
    summary:
      '수작업으로 점검하던 데이터센터 장비를 대시보드에서 실시간으로 확인할 수 있게 만드는 솔루션입니다. SNMP 기반 데이터 수집부터 화면까지 개발을 담당하고 있습니다.',
    work: [
      '장비 정보와 수집 데이터를 관리하는 모니터링 전용 DB 설계·구축',
      '서버 파일 → XML 파싱 → DB 저장으로 이어지는 수집 자동화 파이프라인 개발',
      'Wireshark 패킷 분석으로 SNMP 프로토콜 데이터 구조 검증',
      'MSA 기반 프레임워크로 모니터링 서비스 모듈화 및 독립 배포 환경 구성',
    ],
    tech: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Redis', 'Kafka', 'Docker'],
  },
  {
    name: '개발·인프라 서버 구축 및 운영',
    org: '라인업코리아',
    start: '2025-04',
    end: '2025-06',
    summary:
      '배포가 수동이라 한 번에 10분~1시간씩 걸리고 소스 백업 체계도 없던 개발 환경을, 컨테이너 기반 자동화 인프라로 재구축했습니다.',
    work: [
      'Docker 기반 컨테이너 환경 표준화로 개발/스테이징/프로덕션 환경 일관성 확보',
      'GitLab 구축 + 자동 백업 시스템, 백업 성공·실패와 스토리지 사용량 모니터링 자동화',
      'GitLab Webhook + Jenkins Pipeline 연동으로 빌드·배포 자동화',
      'Jenkins ↔ MS Teams 연동으로 빌드·머지 상태 실시간 알림',
    ],
    outcome: ['배포 시간 95% 단축 (10분~1시간 → 1분)', '소스 보존율 99.9% 달성'],
    tech: ['Docker', 'GitLab', 'Jenkins', 'Linux', 'nginx'],
  },
  {
    name: '통계 모니터링 웹 개발·운영',
    org: '라인업코리아',
    start: '2024-09',
    end: '2025-03',
    summary:
      '외부 인터넷이 차단된 온프레미스 내부망에서 통계 데이터를 집계·시각화하는 모니터링 웹을 개발하고, 서버 장애 대응을 포함한 운영 전반을 담당했습니다.',
    work: [
      'Java/Spring/JSP 기반 웹 애플리케이션 개발, RESTful 설계 원칙 기반 CRUD 구현',
      'JavaScript 라이브러리를 활용한 동적 모니터링 화면 구현',
      '온프레미스 서버 이슈 진단·해결 등 운영 대응',
    ],
    outcome: ['내부망 제약 환경에서 가동률 99.5% 안정 운영'],
    tech: ['Java', 'Spring', 'JSP', 'JavaScript', 'MySQL'],
  },
  {
    name: '대학교 웹 솔루션 개발',
    org: '에듀에듀',
    start: '2024-05',
    end: '2024-08',
    summary:
      '단일 토큰 인증과 1초가 넘는 페이지 로드가 약점이던 대학 웹 플랫폼의 인증 체계와 성능을 개선했습니다.',
    work: [
      'JWT Access + Refresh Token 이중 인증/인가 시스템 구현',
      'Redis로 Refresh Token 관리 및 정적 데이터 캐싱',
      'AOP 패턴 기반 전사 페이지 로깅 시스템으로 CRUD 이벤트·방문 기록 자동 수집',
    ],
    outcome: [
      '페이지 로드 속도 65% 개선 (1,000ms → 300~400ms)',
      '토큰 탈취 시 피해를 제한하는 인증 구조 확보',
    ],
    tech: ['Java', 'Spring', 'JSP', 'MyBatis', 'JWT', 'Redis', 'MySQL'],
  },
  {
    name: 'LMS 웹 서비스 유지보수',
    org: '에듀에듀',
    start: '2023-12',
    end: '2024-04',
    summary:
      '퀴즈 생성·관리가 개발자에게 의존하던 LMS를 관리자가 직접 운영할 수 있게 개선하고, 설문조사·예약 등 운영 기능을 함께 구축했습니다.',
    work: [
      '관리자용 퀴즈 생성·관리 기능 구축 (합격 기준·재시험 횟수 커스터마이징)',
      '강의 수강 완료자만 응시할 수 있는 권한 체계 구현',
      '강의 설문조사·예약 서비스 구현',
    ],
    outcome: ['퀴즈 생성과 합격 기준·재시험 정책 변경을 개발 배포 없이 관리자 화면에서 바로 처리'],
    tech: ['PHP', 'JavaScript', 'jQuery', 'MySQL', 'Apache'],
  },
];

export const sideProjects: SideProject[] = [
  {
    name: 'LotteON',
    description:
      '여러 입점 업체의 상품을 검색·비교하고 장바구니에 담아 구매하는 멀티 벤더 커머스 플랫폼. JPA와 MyBatis를 역할별로 분리해 병행 사용했습니다.',
    period: '2023.10 - 2023.11',
    role: '4인 팀 프로젝트 팀장. 상품 도메인 전담(상세·검색·장바구니·주문), 전체 커밋의 65% 기여',
    tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'JPA', 'MyBatis', 'Thymeleaf', 'MySQL'],
    repo: 'https://github.com/lomong7807/LotteON',
  },
  {
    name: 'HelloWorld',
    description:
      '지식 공유 게시판·채용 공고·강의 수강을 묶은 개발자 커뮤니티 플랫폼. 댓글·대댓글은 자기참조 구조와 소프트 삭제로 트리가 끊기지 않게 설계했습니다.',
    period: '2023.11 - 2023.12',
    role: '4인 팀 프로젝트. 커뮤니티 도메인 담당(게시물 상세, 댓글·대댓글, 글 검색)',
    tech: ['Java 17', 'Spring Boot 3', 'JPA', 'QueryDSL', 'JWT', 'React', 'TypeScript'],
    repo: 'https://github.com/lomong7807/HelloWorld',
  },
];
