import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'Java',
    },
    {
      title: 'JavaScript',
    },
  ],
};

const frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'Spring Boot',
    },
  ],
};

const infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'AWS',
    },
    {
      title: 'nginx',
    },
    {
      title: 'Redis',
    },
    {
      title: 'Apache',
    },
    {
      title: 'Kafka',
    },
    {
      title: 'Linux',
    },
    {
      title: 'Ansible',
    },
    {
      title: 'Docker',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'Postgresql',
    },
  ],
};

const tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'IntelliJ',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'Vim',
    },
    {
      title: 'Jenkins',
    },
    {
      title: 'Github',
    },
    {
      title: 'GitLab',
    },
    {
      title: 'MS Teams',
    },
  ],
};

const misc: ISkill.Skill = {
  category: 'Misc',
  items: [
    {
      title: 'DevOps',
    },
    {
      title: 'Weight Training',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [programmingLanguages, frameworks, infrastructure, tools, misc],
  // tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
