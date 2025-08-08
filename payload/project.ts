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
          content: '데이터센터 관리 시스템 DB 설계 및 구축',
          weight: 'MEDIUM',
        },
        {
          content: '서버에서 파일을 읽어와 xml 파일로 파싱하여 DB에 저장',
          weight: 'MEDIUM',
          descriptions: [{ content: '서버 파일 -> XML 파싱 -> DB 저장 자동화 프로세스 개발' }],
        },
        {
          content: '프레임워크 및 애플리케이션 관련 내용 문서화',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '신규 입사자들이 관련 정보 및  소스코드 분석에 어려움이 있어 해당 내용을 문서화',
            },
            { content: '해당 문서들을 통해 온보딩 시간 50% 단축' },
          ],
        },
        {
          content: 'Git, DB 컨벤션 도입',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Git과 DB 컨벤션이 없어 복잡도 증가 및 타인의 작업 내용을 이해하는데 어려움이 있었음',
            },
            {
              content:
                '컨벤션 정립 및 문서 작성 도입으로 작업 복잡도 40% 감소 및 팀 커뮤니케이션 효율성 증대',
            },
          ],
        },
        {
          content: '마이크로서비스 아키텍처 기반 웹 애플리케이션 개발',
          weight: 'MEDIUM',
        },
        {
          content: '장비 모니터링 서비스 개발을 위한 전반적인 네트워크에 대한 이해 및 경험',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '장비의 SNMP 프로토콜을 사용해 데이터를 가져오는 정보들을 이해하기 위해 네트워크에 대한 이해 경험',
            },
            {
              content: 'Wireshark를 사용해 패킷 내용 확인',
            },
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
          content:
            '기존 로컬에서 실행하던 애플리케이션과 각종 인프라들을 다른 서버에 추가 구축시 확장성을 고려하여 컨테이너 가상화 추진 및 도입',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Docker 기반 환경으로 배포 효율성 100% 향상 및 소스 관리 체계화' },
          ],
        },
        {
          content: 'GitLab 구축 및 자동 백업 설정',
          weight: 'MEDIUM',
          descriptions: [
            { content: '자동 백업 설정으로 99.9% 소스 보존율 달성' },
            { content: ' 백업 성공/실패, 스토리지 사용량 실시간 모니터링 자동화' },
          ],
        },
        {
          content: 'Jenkins 활용 CI/CD 파이프라인 구축',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'GitLab Webhook Trigger와 Jenkins Pipeline으로 빌드 및 배포 자동화' },
            {
              content:
                '개발 서버에 작업 내용 배포 시간 95% 단축 (10분~1시간 -> 1분)으로 개발 생산성 극대화',
            },
          ],
        },
        {
          content: 'Jenkins와 MS Teams 연동으로 빌드/머지 상태 실시간 알림 서비스 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '각자 작업한 내용이 merge 되면 해당 작업 내용을 MS Teams에서 바로 확인할 수 있게끔 알림',
            },
            {
              content:
                '팀원이 작업한 내용을 간단하게 확인할 수 있게 되어 작업 효율성 증대 및 충돌 최소화',
            },
            { content: '개발 서버에 반영시 빌드 또는 배포에 문제가 발생하면 알림' },
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
          content: '관리자 시스템 개발',
          weight: 'MEDIUM',
        },
        {
          content: 'JWT를 사용한 로그인 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Access Token과 Refresh Token을 사용한 인증/인가 구현으로 보안성 200% 강화',
            },
          ],
        },
        {
          content: 'AOP 패턴을 활용한 웹 페이지 로깅 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'CRUD 이벤트 및 페이지 방문 기록을 모두 남기기 위해 AOP를 사용한 로깅 처리 구현',
            },
            { content: '페이지 방문 시 계정 정보와 간단한 정보들을 DB에 저장' },
            { content: '이벤트 발생 시 계정 정보와 이벤트 내용 및 관련 데이터들을 DB에 저장' },
          ],
        },
        {
          content: 'Redis 캐시 도입으로 페이지 로드 속도 65% 개선',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Refresh Token를 캐시에서 관리하여 불필요한 DB 접근 감소' },
            {
              content:
                '바뀌는 일이 잘 없는 메뉴와 같은 정적인 부분들은 캐시처리하여 페이지 로드 속도 증가 (약 1,000ms -> 3~400ms)',
            },
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
          content: '관리자 시스템 기능 개선',
          weight: 'MEDIUM',
        },
        {
          content: '관리자 중심의 퀴즈 생성/관리 기능 개발',
          weight: 'MEDIUM',
          descriptions: [
            { content: '관리자가 직접 퀴즈를 추가 및 생성할 수 있게끔 구현' },
            { content: '합격/불합격 기준 및 재시험 횟수 커스터마이징 가능' },
            { content: '강의 수강 완료자만 퀴즈 응시 가능한 체계 구축' },
          ],
        },
        {
          content: '강의 설문조사 및 예약 서비스로 사용자 만족도 40% 향상',
          weight: 'MEDIUM',
        },
      ],
    },
  ],
};

export default project;
