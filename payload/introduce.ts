import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '웹 백엔드 개발자로 다양한 경험이 있습니다. Java, Spring, MySQL, PotsgreSQL 등을 사용하여 서비스를 설계, 개발, 운영한 경험이 있습니다. 개발에 필요한 서버를 처음부터 끝까지 구성하고 관리하며 확장성과 유지 보수성이 높은 백엔드에 대한 고민을 언제나 하고 있습니다. ',
    '평소 개발 경험과 공부한 내용을 기록하는 것을 좋아하여 항상 개인 Notion에 글을 작성해둡니다. 무엇이든 시작을 하면 꾸준하게 하는 것을 좋아하여 개발 공부와 성장을 멈추지 않고 있습니다.',
    '개발자에게는 더 나은 방식을 끊임없이 고민하고 실천하는 것이 필요하다고 생각합니다. 단순히 본인에게 익숙한 방식을 반복하는 것이 아닌, 능동적으로 도메인의 특징, 예상 트래픽, 확장성 요구사항 등을 깊이 있게 분석하고 이에 최적화된 해결책을 제시하여 개선하려 합니다.',
    '또한 개발자는 혼자 일하지 않기에 기술적 역량뿐만 아니라 소프트 스킬도 중요하게 생각합니다. 실제로 기존에 그때그때 필요하면 메일로만 전달하던 애플리케이션 정보, 서버 정보, 매뉴얼 등을 체계적으로 문서화하여 신규 입사자 온보딩 시간을 50% 이상 단축시키고 팀원 전체의 업무 효율을 증대시켰습니다. 개발 역량은 당연한 기본 소양이고, 팀원들과의 협업과 소통을 통한 소프트 스킬이야말로 중요한 차별화 요소라고 생각합니다. 이러한 역량을 바탕으로 내일은 오늘보다 더 나은 개발자가 되고 싶습니다.',
  ],
  sign: 'kys',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
