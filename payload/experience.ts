import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    {
      title: '라인업코리아 (LineupKorea)',
      positions: [
        {
          title: '솔루션연구소 선임 개발자',
          startedAt: '2024-09',
          descriptions: [
            '인프라 솔루션 기업(70명~, 개발팀 6~8명)',
            '개발 및 배포 확장성 100% 개선을 위한 컨테이너 가상화 환경 설계 및 도입',
            '개발용 서버 Infra 구축 및 운영 체계 확립',
            'Jenkins를 사용한 CI/CD 파이프라인 도입 및 관리',
            '개발팀 내 표준 문서화 프로세스 도입으로 신규 입사자 온보딩 시간 50% 단축',
            'SNMP 프로토콜 기반 하드웨어 모니터링 대시보드 웹 개발',
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
          title: '개발사업팀 연구원',
          startedAt: '2023-12',
          endedAt: '2024-08',
          descriptions: [
            'SI 솔루션 기업(개발팀 15~20명)',
            '기업 웹 플랫폼의 핵심 기능과 레거시 개선 및 20+건의 신규 요구사항 반영',
            '확장 가능한 CRUD API 아키텍처 구축',
            'AOP 패턴을 활용한 전사 웹 페이지 로깅 시스템 구현',
            'JWT+Refresh Token 기반 이중 인증/인가 시스템 구현',
            'Redis 캐시 도입으로 캐시 관리 구현',
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
