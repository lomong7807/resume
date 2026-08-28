import type { AboutPoint } from './types';

export const about = {
  headline: '개발부터 배포·운영까지, 팀의 생산성을 함께 키우는 백엔드 개발자',
  points: [
    {
      title: 'End-to-End 백엔드',
      body: 'Java/Spring Boot 기반 웹 애플리케이션 개발을 중심으로 MySQL·PostgreSQL 데이터베이스 설계, Redis 캐시 최적화, SNMP 프로토콜 기반 하드웨어 모니터링까지, 도메인을 가리지 않고 확장성과 유지보수성을 고려한 시스템을 만들어 왔습니다.',
    },
    {
      title: '팀 전체의 생산성',
      body: '수작업 배포를 CI/CD 파이프라인으로 자동화해 배포 시간을 95% 줄였고, 표준 문서화로 신규 입사자 온보딩 기간을 절반으로 단축했습니다. Git·DB 컨벤션을 정립해 팀의 커뮤니케이션 비용을 낮추는 일에도 기여합니다.',
    },
    {
      title: '꾸준한 기록',
      body: '개발 경험과 학습 내용을 블로그와 Notion에 꾸준히 기록합니다. 문제를 만나면 원인을 끝까지 파고들고, 해결 과정을 남겨 다음 사람의 시간을 아끼는 것을 중요하게 생각합니다.',
    },
  ] satisfies AboutPoint[],
};
