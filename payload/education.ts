import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: '동서대학교',
      subTitle: '국제물류학 학사 졸업',
      startedAt: '2016-03',
      endedAt: '2022-02',
    },
    {
      title: '부산 대동고등학교',
      subTitle: '자연계 졸업 (부산광역시)',
      startedAt: '2013-03',
      endedAt: '2016-02',
    },
  ],
};

export default education;
