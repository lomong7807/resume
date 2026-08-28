import type { SkillCategory } from './types';

export const skills: SkillCategory[] = [
  {
    name: 'Languages',
    items: [{ name: 'Java', primary: true }, { name: 'JavaScript' }],
  },
  {
    name: 'Backend',
    items: [
      { name: 'Spring Boot', primary: true },
      { name: 'JPA' },
      { name: 'MyBatis' },
    ],
  },
  {
    name: 'Infra & Database',
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
    name: 'Tools',
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
