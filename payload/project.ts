import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: '하드웨어 모니터링 솔루션 개발',
      startedAt: '2025-06',
      where: '라인업코리아 (LineupKorea)',
      descriptions: [
        {
          content: 'SNMP 기반 실시간 하드웨어 모니터링 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '데이터센터 관리 시스템 DB 설계 및 구축' },
            { content: '서버 파일 → XML 파싱 → DB 저장 자동화 프로세스 개발' },
            { content: 'Wireshark를 활용한 네트워크 패킷 분석으로 SNMP 프로토콜 데이터 확인' },
          ],
        },
        {
          content: '신규 입사자 온보딩 프로세스 효율화',
          weight: 'MEDIUM',
          descriptions: [
            { content: '프레임워크 및 애플리케이션 관련 내용 체계적 문서화' },
            { content: '소스코드 분석 가이드 및 개발 환경 설정 매뉴얼 작성' },
            { content: '신규 입사자 온보딩 시간 50% 단축 달성' },
          ],
        },
        {
          content: '개발팀 협업 효율성 개선을 위한 표준화 도입',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Git과 DB 컨벤션이 없어 발생하는 작업 복잡도 및 커뮤니케이션 이슈 해결' },
            { content: 'Git 브랜치 전략, 커밋 메시지, DB 네이밍 컨벤션 정립 및 문서화' },
            { content: '작업 복잡도 50% 감소 및 팀 커뮤니케이션 효율성 증대' },
          ],
        },
        {
          content: '확장 가능한 마이크로서비스 아키텍처 기반 웹 애플리케이션 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '마이크로서비스 아키텍처 기반의 프레임워크를 활용한 장비 모니터링 서비스의 모듈화 및 독립 배포 환경 구축',
            },
            { content: 'SNMP 프로토콜 기반 네트워크 장비 데이터 수집 및 실시간 모니터링 구현' },
          ],
        },
      ],
    },
    {
      title: '개발 서버, 인프라 서버 구축 및 관리',
      startedAt: '2025-04',
      endedAt: '2025-06',
      where: '라인업코리아 (LineupKorea)',
      descriptions: [
        {
          content: '개발 환경 확장성 한계 해결을 위한 컨테이너 가상화 도입',
          weight: 'MEDIUM',
          descriptions: [
            { content: '로컬 환경 의존성 문제 및 서버 확장 시 설정 복잡도 이슈 해결' },
            { content: 'Docker 기반 컨테이너 환경으로 배포 효율성 100% 향상 및 환경 표준화' },
            { content: '개발/스테이징/프로덕션 환경 일관성 보장' },
          ],
        },
        {
          content: '소스코드 관리 체계화 및 안정성 확보',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'GitLab 구축 및 자동 백업 시스템 구현' },
            { content: '백업 성공/실패, 스토리지 사용량 실시간 모니터링 자동화' },
            { content: '99.9% 소스 보존율 달성' },
          ],
        },
        {
          content: '개발 생산성 극대화를 위한 CI/CD 파이프라인 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '수동 배포로 인한 시간 소모 및 휴먼 에러 문제 해결' },
            { content: 'GitLab Webhook과 Jenkins Pipeline 연동으로 빌드/배포 자동화' },
            { content: '배포 시간 95% 단축 (10분~1시간 → 1분)으로 개발 생산성 극대화' },
          ],
        },
        {
          content: '팀 협업 효율성 향상을 위한 실시간 알림 시스템 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Jenkins와 MS Teams 연동으로 빌드/머지 상태 실시간 알림 서비스 구현' },
            { content: '팀원 작업 내용 즉시 공유 및 충돌 최소화' },
            { content: '빌드/배포 실패 시 즉시 알림으로 장애 대응 시간 단축' },
          ],
        },
      ],
    },
    {
      title: '성당 전체 통계 모니터링 웹 개발 및 유지보수',
      startedAt: '2024-09',
      endedAt: '2025-03',
      where: '라인업코리아 (LineupKorea)',
      descriptions: [
        {
          content: 'Java, Spring, JSP 등을 사용하여 웹 애플리케이션 개발',
          weight: 'MEDIUM',
        },
        {
          content: 'RESTful 설계 원칙 기반 CRUD 구현',
          weight: 'MEDIUM',
        },
        {
          content: 'Javascript와 라이브러리를 사용한 동적 모니터링 화면 구현',
          weight: 'MEDIUM',
        },
        {
          content: '온프레미스, 내부망 환경에서 99.5% 안정성 달성 및 다양한 서버 이슈 해결 경험',
          weight: 'MEDIUM',
        },
      ],
    },
    {
      title: '대학교 웹 솔루션 개발',
      startedAt: '2024-05',
      endedAt: '2024-08',
      where: '에듀에듀 (EduEdu)',
      descriptions: [
        {
          content: '보안성 강화를 위한 이중 인증 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 단일 토큰 방식의 보안 취약점 개선' },
            { content: 'JWT Access Token과 Refresh Token을 활용한 이중 인증/인가 시스템 구현' },
            { content: '보안성 200% 강화 및 사용자 편의성 동시 확보' },
          ],
        },
        {
          content: '전사 사용자 행동 추적을 위한 로깅 시스템 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'AOP 패턴을 활용한 투명한 웹 페이지 로깅 시스템 개발' },
            { content: 'CRUD 이벤트 및 페이지 방문 기록 자동 수집' },
            { content: '사용자 행동 분석 데이터 축적으로 서비스 개선 기반 마련' },
          ],
        },
        {
          content: '시스템 성능 최적화를 위한 캐시 전략 도입',
          weight: 'MEDIUM',
          descriptions: [
            { content: '반복적인 DB 조회로 인한 페이지 로드 지연 문제 해결' },
            { content: 'Redis 캐시를 활용한 Refresh Token 관리 및 정적 데이터 캐싱' },
            { content: '페이지 로드 속도 65% 개선 (1,000ms → 300~400ms)' },
          ],
        },
      ],
    },
    {
      title: 'PHP 웹 서비스 유지보수',
      startedAt: '2023-12',
      endedAt: '2024-04',
      where: '에듀에듀 (EduEdu)',
      descriptions: [
        {
          content: '관리자 중심의 퀴즈 관리 시스템 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: '기존 개발자 의존적인 퀴즈 생성 프로세스 개선' },
            { content: '관리자 직접 퀴즈 생성/관리 기능 개발' },
            { content: '합격/불합격 기준 및 재시험 횟수 커스터마이징 기능 구현' },
            { content: '강의 수강 완료자만 퀴즈 응시 가능한 권한 체계 구축' },
          ],
        },
        {
          content: '사용자 만족도 향상을 위한 피드백 시스템 도입',
          weight: 'MEDIUM',
          descriptions: [
            { content: '강의 설문조사 및 예약 서비스 구현' },
            { content: '사용자 만족도 70% 향상 달성' },
          ],
        },
      ],
    },
  ],
};

export default project;
