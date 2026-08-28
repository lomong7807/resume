# 강윤수 포트폴리오

Backend & DevOps Engineer 강윤수의 포트폴리오 사이트입니다.

**https://lomong7807.github.io/resume/**

## 기술 구성

- [Astro 5](https://astro.build) + TypeScript, 정적 단일 페이지
- GitHub Actions → GitHub Pages 자동 배포 (`main` 푸시 시)
- 콘텐츠는 전부 `src/data/*.ts`에 분리되어 있어, 마크업을 건드리지 않고 데이터 파일만 수정하면 됩니다

## 콘텐츠 수정

| 내용 | 파일 |
|---|---|
| 이름·직함·태그라인·링크 | `src/data/profile.ts` |
| 히어로 메트릭 카드 | `src/data/metrics.ts` |
| 자기소개 | `src/data/about.ts` |
| 기술 스택 | `src/data/skills.ts` |
| 경력 | `src/data/experience.ts` |
| 프로젝트 (회사/사이드) | `src/data/projects.ts` |
| 학력·활동 | `src/data/education.ts` |

경력·프로젝트 본문에서는 `==텍스트==`(수치 강조), `**텍스트**`(굵게) 인라인 마커를 쓸 수 있습니다.

## 로컬 실행

```bash
npm install
npm run dev      # http://localhost:4321/resume
npm run build    # dist/ 정적 빌드
```

이전 버전(Next.js 템플릿 기반)은 [`legacy` 브랜치](https://github.com/lomong7807/resume/tree/legacy)에 보존되어 있습니다.
