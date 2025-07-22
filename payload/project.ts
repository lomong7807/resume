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
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
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
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: '성당 전체 통계 모니터링 웹 개발 및 유지보수',
      startedAt: '2025-09',
      endedAt: '2025-03',
      where: '라인업코리아 (LineupKorea)',
      descriptions: [
        {
          content:
            'Initiated and lead a collaborative project aimed at optimizing the Linux Kernel for various hardware architectures.',
        },
        {
          content:
            'Achieved significant improvements in system performance and resource management.',
          weight: 'MEDIUM',
          descriptions: [
            { content: '30% improvement in system resource efficiency' },
            { content: 'Job Scheduler Refactor and Optimization' },
          ],
        },
      ],
    },
    {
      title: 'Global Linux Bootcamp',
      startedAt: '2024-05',
      endedAt: '2024-08',
      where: '에듀에듀 (EduEdu)',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
    {
      title: 'Global Linux Bootcamp',
      startedAt: '2023-12',
      endedAt: '2024-04',
      where: '에듀에듀 (EduEdu)',
      descriptions: [
        {
          content:
            'Organized and conducted training bootcamps focusing on Linux system engineering skills.',
        },
        {
          content:
            'Successfully trained over 5,000 participants in system administration and security. ',
        },
      ],
    },
  ],
};

export default project;
