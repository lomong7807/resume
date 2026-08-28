# 2026-08-28 포트폴리오 리뉴얼 작업 기록

## 변경 요약

타인의 Next.js 템플릿 포크였던 기존 포트폴리오(lomong7807.github.io/resume)를 Astro 5 기반 자체 제작 사이트로 전면 재구축했다. 미니멀 에디토리얼 디자인(웜 모노크롬 + 딥블루 포인트 1색), 상단 고정 네비+스크롤 스파이, 성과 수치를 전면에 내세운 메트릭 카드, 문제→해결→성과 구조의 프로젝트 카드가 핵심이다. 콘텐츠는 기존 payload 전체를 원자재로 재작성했고 사용자 승인을 받았다.

## 변경 파일

- `src/styles/global.css` — 디자인 토큰(색·타이포·레이아웃)과 공통 패턴(chip/bullets/card/reveal/print)
- `src/layouts/Base.astro` — SEO/OG 메타, 폰트(Pretendard Variable + Noto Serif KR), reveal·스크롤 스파이 스크립트
- `src/data/*.ts` — 콘텐츠 전부 (profile/metrics/about/skills/experience/projects/education). 타입은 `types.ts`
- `src/components/*.astro` — Nav/Hero/Section(직접 작성, 디자인 기준) + About/Skills/Experience/Projects/Education/Footer(병렬 위임 후 검수)
- `src/lib/inline.ts` — 데이터 문자열의 `**`/`==` 인라인 마커 → HTML 변환 (이스케이프 포함)
- `.github/workflows/deploy.yml` — withastro/action 기반 Pages 배포
- `public/` — 프로필 사진(구 저장소에서 이전, 640px 리사이즈), 파비콘, OG 이미지(1200×630, 헤드리스 Chrome으로 렌더)

## 판단/결정

- **기술 스택 Astro 5**: 콘텐츠가 타입드 데이터 파일에 분리돼 기존 payload 편집 경험과 동일, 순수 정적 출력, Actions 공식 지원
- **콘텐츠 재작성** (사용자 승인 완료): 자기소개 3문단 → 헤드라인+3포인트, 프로젝트를 문제→해결→성과 구조로. 근거 불명 수치 2건("보안성 200%", "만족도 70%")은 사실 서술로 전환. 프로젝트명 2건 변경(성당→통계 모니터링, PHP→LMS). 고교 학력·Weight Training·이메일 비노출. 템플릿 잔재(더미 섹션, 원작자 크레딧, Lorem ipsum OG) 전부 제거
- **사이드 프로젝트**: LotteON 채택(팀장·커밋 65%·문서화 우수), Kmarket 제외(README 부재). HelloWorld는 기여 15%라 "커뮤니티 도메인 담당"으로 톤 조절. LotteON 기간은 README 기준(실제 커밋은 10월 집중 — 팀 원본의 개인 사본 추정)
- **병렬 실행**: 조사 1(사이드 저장소 분석) + 구현 3(About·Skills / Experience·Projects / Education·Footer, 파일 비중첩 분할, Opus) 병렬 투입, 완료 후 전체 diff 일괄 검수. 검수에서 성과 블록 액센트 보더 제거 1건 수정

## 검증

- `npm run build` 성공, 1280/768/375 스크린샷 전 섹션 확인, 인쇄 PDF 정상(네비 숨김), JS 비활성 시 전 콘텐츠 노출(reveal은 `html.js` 하에서만 숨김), 외부 링크 5건 HTTP 200

## 배포 구조

- 원격 `lomong7807/resume`: 기존 main → `legacy` 브랜치 백업 후 새 히스토리로 main 교체(force-push)
- Pages 소스: legacy(`main:/docs` 수동 커밋) → GitHub Actions 워크플로 빌드로 전환
- base path `/resume` (`astro.config.mjs`)

## 리스크/후속

- Pages 전환 직후 몇 분간 CDN 캐시로 구 사이트가 보일 수 있음
- 콘텐츠 수정은 `src/data/*.ts` 편집 후 main 푸시만으로 자동 배포됨
