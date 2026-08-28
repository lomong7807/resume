import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    name: '언어',
    items: [{ name: 'Java', primary: true }, { name: 'JavaScript' }],
  },
  {
    name: '백엔드',
    items: [
      { name: 'Spring Boot', primary: true },
      { name: 'JPA' },
      { name: 'MyBatis' },
    ],
  },
  {
    name: '인프라·DB',
    items: [
      { name: 'Docker', primary: true },
      { name: 'Jenkins', primary: true },
      { name: 'MySQL', primary: true },
      { name: 'PostgreSQL', primary: true },
      { name: 'Redis', primary: true },
      { name: 'Kafka' },
      { name: 'nginx' },
      { name: 'Apache' },
      { name: 'Linux' },
      { name: 'Ansible' },
      { name: 'AWS' },
    ],
  },
  {
    name: '도구',
    items: [
      { name: 'IntelliJ' },
      { name: 'VS Code' },
      { name: 'Vim' },
      { name: 'GitHub' },
      { name: 'GitLab' },
      { name: 'MS Teams' },
    ],
  },
];
