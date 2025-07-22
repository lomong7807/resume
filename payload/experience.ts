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
            '개발 및 배포 확장성을 위한 컨테이너 가상화 환경 추진 및 도입',
            '개발용 서버 Infra 구축 및 운영',
            'Jenkins를 사용한 CI/CD 파이프라인 도입 및 관리',
            '개발팀 내 자료 문서화 추진',
            'SNMP 프로토콜을 이용한 하드웨어 모니터링 대시보드 웹 개발',
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
            '기업 웹 홈페이지 레거시 개선 및 신규 요구사항 반영',
            'CRUD API 개발',
            'AOP를 이용한 웹 페이지 전체 로깅 구현',
            'JWT와 Refresh Token을 활용한 인증/인가 시스템 구현',
            'Redis를 활용한 캐시 관리 구현',
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
          ],
        },
      ],
    },
  ],
};

export default experience;
