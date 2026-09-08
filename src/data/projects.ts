import type { CompanyProject, SideProject } from './types';

// 서술 순서: summary(무엇 + 문제) → work(기술 선택과 그 이유) → outcome(실제 성과가 있을 때만)
export const companyProjects: CompanyProject[] = [
  {
    name: '하드웨어 모니터링 솔루션',
    org: '라인업코리아',
    start: '2025-06',
    end: null,
    summary:
      '각 고객사에 납품된 장비의 상태를 한 화면에서 모니터링하기 위한 솔루션입니다. 그동안은 장비 상태를 수작업으로 점검해야 했고, 장비 데이터를 모아 볼 수 있는 화면이 없었습니다.',
    work: [
      'SNMP 프로토콜로 장비 데이터 수집: 목적이 장비 정보의 간단한 모니터링이었기 때문에, syslog 같은 상세 로그 수집 대신 장비 상태를 가볍게 조회할 수 있는 SNMP를 선택',
      '장비 정보와 수집 데이터를 관리하는 모니터링 전용 DB 설계·구축',
      '서버 파일 → XML 파싱 → DB 저장으로 이어지는 수집 자동화 파이프라인 개발',
      'Wireshark 패킷 분석으로 장비별 SNMP 응답 데이터 구조 검증',
    ],
    tech: ['Java', 'Spring Boot', 'JPA', 'MySQL', 'Redis', 'Docker'],
  },
  {
    name: '한양대학교 학과평가 시스템 구축',
    org: '라인업코리아',
    start: '2025-08',
    end: '2025-12',
    summary:
      '학부·대학원 학과평가 자료를 시스템에 업로드해 보관·관리하고, 약 6년치 학교 전체 데이터를 바탕으로 연도별 평가 내용과 학생 수 같은 학교 전반의 통계를 한곳에서 확인할 수 있는 시스템입니다.',
    work: [
      'FineReport 기반으로 평가 자료 업로드·보관·관리 화면과 연도별 통계 리포트 구축: 회사 파트너 솔루션이라 리포팅 엔진을 따로 만들지 않고 검증된 제품 위에서 화면과 통계 설계에 집중',
      '약 6년치 학교 전체 데이터(평가 자료·학생 수 등)를 집계하는 PostgreSQL 쿼리 설계·작성: 대량 데이터를 리포트에서 다루기 위해 집계 쿼리 중심으로 구성',
      'JavaScript·HTML·CSS로 리포트 화면의 조회·동적 표시 기능 구현',
    ],
    tech: ['FineReport', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: '개발·인프라 서버 구축 및 운영',
    org: '라인업코리아',
    start: '2025-04',
    end: '2025-06',
    summary:
      '개발팀의 배포와 소스 관리 환경을 재구축한 프로젝트입니다. 배포가 수동이라 한 번에 20분~1시간씩 걸리고 휴먼 에러가 잦았으며, 개발 환경이 로컬에 묶여 있고 소스 백업 체계도 없었습니다.',
    work: [
      'Docker 컨테이너로 환경 표준화: 로컬 의존성 때문에 생기던 개발/스테이징/프로덕션 환경 불일치를 없애기 위해',
      'GitLab과 Jenkins를 온프레미스로 자체 구축: 하드웨어 유통·솔루션 회사라 사내 서버를 쉽게 확보할 수 있어, 클라우드 비용 없이 내부망 안에서 소스와 빌드를 관리',
      'GitLab Webhook + Jenkins Pipeline으로 빌드·배포 자동화, 저장소 자동 백업과 백업 성공·실패·스토리지 사용량 모니터링',
      'Jenkins 빌드·머지 알림을 MS Teams로 연동: 회사 표준 협업 도구라 별도 채널 없이 팀 전체가 즉시 확인',
    ],
    outcome: ['배포 시간 단축 (20분~1시간 → 10분)', '소스 보존율 99.9% 달성'],
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
      'Java/Spring/JSP로 개발: 내부망에서 운영 중인 기존 시스템 스택에 맞춰 호환성과 유지보수 연속성을 우선',
      'RESTful 설계 원칙 기반 CRUD 구현, JavaScript 라이브러리를 활용한 동적 모니터링 화면 구현',
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
      'JWT Access + Refresh Token 이중 인증/인가: 단일 토큰은 탈취되면 만료 전까지 막을 수 없어, 수명이 짧은 Access Token과 재발급용 Refresh Token으로 분리',
      'Refresh Token을 Redis에서 관리: 추후 서버 스케일 아웃 시 인스턴스 간 세션 공유가 가능하도록',
      '정적 데이터 Redis 캐싱: 반복적인 DB 조회가 페이지 로드 지연의 원인이었기 때문에',
      'AOP 기반 전사 페이지 로깅: 각 화면 코드를 수정하지 않고 CRUD 이벤트·방문 기록을 일괄 수집',
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
      '기존 PHP 기반 LMS 위에 관리자용 퀴즈 생성·관리 기능 구축 (합격 기준·재시험 횟수 커스터마이징)',
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
