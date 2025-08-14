import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    'Java/Spring Boot 기반의 웹 애플리케이션 개발자로 근무하며 Docker/Jenkins를 활용한 DevOps 환경 구축까지 End-to-End 백엔드 개발 경험을 쌓았습니다. MySQL, PostgreSQL을 활용한 데이터베이스 설계부터 Redis 캐시 최적화, SNMP 프로토콜 기반 하드웨어 모니터링 시스템까지 다양한 도메인에서 확장성과 유지보수성을 고려한 시스템을 구축해왔습니다.',
    '단순한 개발을 넘어 팀 전체의 생산성 향상에 기여하는 것을 중요하게 생각합니다. 기존 수작업 배포 프로세스를 CI/CD 파이프라인으로 자동화하여 배포 시간을 95% 단축시켰고, 체계적인 문서화를 통해 신규 입사자 온보딩 시간을 50% 단축시켰습니다. 또한 Git/DB 컨벤션 도입으로 팀 커뮤니케이션 효율성을 크게 개선한 경험이 있습니다.',
    '개발자에게는 지속적인 학습과 개선이 필수라고 생각하며, 평소 개발 경험과 학습 내용을 개인 Notion에 체계적으로 기록하고 있습니다. 도메인 특성과 확장성 요구사항을 깊이 분석하여 최적화된 해결책을 제시하고, 동료들과의 효과적인 협업을 통해 더 나은 서비스를 만들어가는 개발자로 성장하고 있습니다.',
  ],
  sign: 'kys',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
