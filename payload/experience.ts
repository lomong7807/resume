import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '라인업코리아 (LineupKorea)',
      positions: [
        {
          title: '솔루션연구소 선임 개발자 (개발팀 8~10명)',
          startedAt: '2024-09',
          descriptions: [
            '주요 역할: 하드웨어 모니터링 솔루션 개발 및 개발팀 인프라 환경 구축/운영 총괄',
            '로컬 환경 의존성 문제 해결을 위한 Docker 기반 컨테이너 환경 도입으로 배포 효율성 100% 개선',
            'GitLab, Jenkins 기반 CI/CD 파이프라인 구축으로 배포 시간 95% 단축 (10분~1시간 → 1분)',
            '개발팀 표준 문서화 프로세스 도입으로 신규 입사자 온보딩 시간 50% 단축',
            'SNMP 프로토콜 기반 하드웨어 모니터링 대시보드 웹 개발로 데이터센터 관리 효율성 증대',
            '마이크로서비스 아키텍처 기반 분산 시스템 설계 및 운영 경험 축적',
          ],
          skillKeywords: [
            'Java',
            'SpringBoot',
            'JavaScript',
            'jQuery',
            'JPA',
            'MySQL',
            'PostgreSQL',
            'Redis',
            'Docker',
            'Kafka',
            'Linux',
            'Jenkins',
          ],
        },
      ],
    },
    {
      title: '에듀에듀 (EduEdu)',
      positions: [
        {
          title: '개발사업팀 연구원 (개발팀 15~20명)',
          startedAt: '2023-12',
          endedAt: '2024-08',
          descriptions: [
            '주요 역할: 고객사 웹 플랫폼 핵심 기능 개발 및 레거시 시스템 현대화',
            'JWT + Refresh Token 기반 이중 인증/인가 시스템 구현으로 보안성 200% 강화',
            'AOP 패턴 활용한 전사 웹 페이지 로깅 시스템 구현으로 사용자 행동 분석 기반 마련',
            '확장 가능한 RESTful API 아키텍처 구축으로 20+건의 신규 요구사항 효율적 반영',
            '관리자 중심 퀴즈 관리 시스템 구축으로 사용자 만족도 70% 향상',
          ],
          skillKeywords: [
            'Java',
            'PHP',
            'Spring',
            'JSP',
            'MySQL',
            'JavaScript',
            'jQuery',
            'MyBatis',
            'Thymeleaf',
            'JWT',
            'Redis',
            'Linux',
            'Apache',
          ],
        },
      ],
    },
  ],
};

export default experience;
