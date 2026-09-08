import type { CompanyProject, SideProject } from './types';

// 이력서에는 무슨 프로젝트인지·내 역할·한 일만 평문으로. 기술 선택 근거와 예상 면접 질문은 notes/ (git 제외)에서 관리한다.
export const companyProjects: CompanyProject[] = [
  {
    name: 'Rainbow Monitoring (데이터센터 모니터링 솔루션)',
    org: '라인업코리아',
    start: '2025-06',
    end: null,
    summary:
      '대학 고객사 약 30곳에서 사용하는 데이터센터 모니터링 웹입니다. 프로젝트를 리드하며 설계·개발, 배포 파이프라인, 개발 프로세스 정립을 맡았습니다.',
    work: [
      '서버실·랙·장비 3단 계층 관리와 상태 대시보드 개발',
      '장비 상태 판정 기준 단일화, 수집 에이전트 데이터의 IP 기준 매칭·주기 동기화',
      'GitLab·Jenkins 기반 CI/CD 파이프라인 전 과정 자동화 (MR 검증부터 배포·롤백·알림까지)',
      'MR 검증 CI: 빌드·테스트와 Gemini API 기반 AI 코드 리뷰 자동화',
      '배포 파이프라인: 빌드 → 전송 → 재기동 → 헬스체크, 실패 시 자동 롤백, 배포 이력 Notion 기록·Teams 알림',
      '커밋 컨벤션·MR 템플릿과 Claude Code 훅·rules·skill 구성으로 AI 협업 개발 워크플로우 정립',
    ],
    tech: ['Java 17', 'Spring Boot 3', 'Spring Security', 'PostgreSQL', 'JPA', 'QueryDSL', 'Thymeleaf', 'Three.js', 'Jenkins', 'GitLab', 'Claude Code'],
  },
  {
    name: 'Rainbow 수집기(C) 인수·안정화',
    org: '라인업코리아',
    start: '2026-08',
    end: '2026-08',
    summary:
      '외주로 개발된 장비 상태 수집기(C)를 인수해 운영 가능한 수준으로 안정화했습니다. AI로 C 코드베이스를 분석해 직접 수정했습니다.',
    work: [
      '인수 판단을 위한 결함 재검토 (지적 12건 처리 현황 대조)',
      '패킷 검증 누락 등 안정성 결함 TDD 수정',
      'PostgreSQL advisory lock으로 수집 프로세스 중복 기동 방지',
      '운영 중 관측된 상태 플래핑 원인 규명·수정',
      'CMake 기반 재현 가능한 빌드 구성',
    ],
    tech: ['C', 'CMake', 'PostgreSQL', 'ICMP', 'HMAC-SHA256', 'AES-GCM', 'Claude Code'],
  },
  {
    name: '서울기록원 기록관리시스템 웹 취약점 조치',
    org: '라인업코리아',
    start: '2026-08',
    end: '2026-08',
    summary:
      '서울기록원 영구기록물관리시스템의 외부 보안 진단 지적 6건(인가, 경로 추적, 파일 업로드, Stored XSS, TLS)을 조치했습니다.',
    work: [
      '인가 검사를 서버 측 라우팅 경로 기준으로 재구성, 인코딩·path parameter 우회 차단',
      '파일 업로드 허용목록 전환, 경로 추적 정규화 봉쇄',
      'Stored XSS 출력 인코딩 처리 (벤더 JS innerHTML 분기 수정)',
      '테스트가 없던 코드베이스에 단위테스트 78건 추가',
      'TLS 항목은 원인 분석 후 인프라팀 이관',
    ],
    outcome: ['조치 후 재진단 통과'],
    tech: ['Java', 'Spring Security', 'Spring MVC', 'JUnit', 'Claude Code'],
  },
  {
    name: '서울기록원 기록관리시스템 정리기술 모듈 개발',
    org: '라인업코리아',
    start: '2026-02',
    end: null,
    summary:
      '2017년부터 운영된 약 20만 LOC 레거시 시스템(Spring Boot 1.5·Oracle)의 고도화를 담당했습니다. 개발자가 SQL로 직접 처리하던 전거·기록물 대량 작업을 사용자 신청 → 관리자 승인 → 반영 흐름으로 바꾸고, 관련 화면을 "정리 기술" 메뉴 그룹으로 묶어 전용 역할을 부여했습니다.',
    work: [
      '신청 → 승인 → 반영 공통 파이프라인 설계 (승인 시점 단일 트랜잭션 반영, 실패 시 전체 롤백)',
      '전거 일괄 등록, 철/건 일괄 수정, 관계전거 다중선택, 신청·승인 관리, 헤더 알림 화면 개발',
      '기록물 데이터 추출 기능(약 44만 건 규모): 조건 필터·계층 트리 추출, 백그라운드 잡 큐, SXSSF 청크 엑셀 생성',
      '승인 시점 낙관적 락으로 변경 충돌 검출, 대량 처리 대응 (행 상한, Oracle IN 1000 제한 청킹)',
      '메뉴·권한 등록 SQL을 환경 독립적·멱등하게 작성',
    ],
    outcome: [
      '기존 수작업 SQL 누락 4,074건 정정',
      '추출 245초 → 1~3초 (통계 부재 풀스캔 진단·고정)',
      '기록건 미리보기 27.9초 → 2.3초',
    ],
    tech: ['Java 8', 'Spring Boot 1.5', 'Oracle 19c', 'MyBatis', 'JPA', 'QueryDSL', 'Apache POI', 'Claude Code'],
  },
  {
    name: '한양대학교 학과평가 시스템 구축',
    org: '라인업코리아',
    start: '2025-08',
    end: '2025-12',
    summary:
      '학부·대학원 학과평가 자료를 관리하고 약 6년치 학교 전체 통계를 조회하는 시스템을 FineReport 기반으로 구축했습니다.',
    work: [
      '평가 자료 업로드·보관·관리 화면과 연도별 통계 리포트 구축',
      '약 6년치 데이터 집계용 PostgreSQL 쿼리 설계·작성',
      '리포트 화면의 조회·동적 표시 기능 구현',
    ],
    tech: ['FineReport', 'PostgreSQL', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: '개발·인프라 서버 구축 및 운영',
    org: '라인업코리아',
    start: '2025-04',
    end: '2025-06',
    summary: '개발팀의 배포와 소스 관리 환경을 재구축했습니다.',
    work: [
      'Docker 컨테이너 환경 표준화',
      'GitLab·Jenkins 온프레미스 자체 구축, Webhook 기반 CI/CD 파이프라인으로 빌드·배포 전 과정 자동화',
      '저장소 자동 백업·모니터링, MS Teams 알림 연동',
      '표준 문서화 프로세스와 Git·DB 컨벤션 정립',
    ],
    outcome: ['배포 시간 단축 (20분~1시간 → 10분)', '소스 보존율 99.9% 달성'],
    tech: ['Docker', 'GitLab', 'Jenkins', 'Linux', 'nginx'],
  },
  {
    name: '통계 모니터링 웹 개발·운영',
    org: '라인업코리아',
    start: '2024-09',
    end: '2025-03',
    summary: '온프레미스 내부망에서 운영되는 통계 모니터링 웹을 개발하고 운영했습니다.',
    work: [
      'Java/Spring/JSP 기반 개발, RESTful 설계 원칙의 CRUD 구현',
      'JavaScript 라이브러리 기반 동적 모니터링 화면 구현',
      '내부망 서버 이슈 진단·해결 등 운영 대응',
    ],
    outcome: ['가동률 99.5% 안정 운영'],
    tech: ['Java', 'Spring', 'JSP', 'JavaScript', 'MySQL'],
  },
  {
    name: '대학교 웹 솔루션 개발',
    org: '에듀에듀',
    start: '2024-05',
    end: '2024-08',
    summary: '대학 웹 플랫폼의 인증 체계와 성능을 개선했습니다.',
    work: [
      'JWT Access + Refresh Token 이중 인증/인가 구현',
      'Redis 기반 토큰 관리와 정적 데이터 캐싱',
      'AOP 기반 전사 페이지 로깅 시스템 구현',
      'RESTful API 구조로 신규 요구사항 20건 이상 반영',
    ],
    outcome: ['페이지 로드 속도 65% 개선 (1,000ms → 300~400ms)'],
    tech: ['Java', 'Spring', 'JSP', 'MyBatis', 'JWT', 'Redis', 'MySQL'],
  },
  {
    name: 'LMS 웹 서비스 유지보수',
    org: '에듀에듀',
    start: '2023-12',
    end: '2024-04',
    summary: 'PHP 기반 LMS를 유지보수하며 관리자용 퀴즈 관리와 설문·예약 기능을 개발했습니다.',
    work: [
      '관리자 퀴즈 생성·관리 기능 (합격 기준·재시험 횟수 커스터마이징)',
      '강의 수강 완료자 응시 권한 체계 구현',
      '강의 설문조사·예약 서비스 구현',
    ],
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
