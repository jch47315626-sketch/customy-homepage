# 커스토미(Customy) 홈페이지

앱 · 보드게임 · 교육 게임을 만드는 커스토미의 회사 소개 사이트. 기획은 [`docs/PLAN.md`](docs/PLAN.md) 참고.

## 실행

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # out/ 에 정적 사이트 생성 (어떤 정적 호스팅에도 업로드 가능)
```

| 명령 | 설명 |
|---|---|
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript 검사 |

## 구조

- `src/app/` — 페이지 (홈, 프로젝트, 원소연희, 자람, 소개)
- `src/components/` — 공통 컴포넌트 (헤더, 푸터, 화분 일러스트, 자람 데모 등)
- `src/data/` — 사이트·프로젝트 문구
- `public/brand/` — 로고, 마스코트
- `public/wonso/` — 원소연희 상세페이지에서 잘라낸 이미지

## 배포 (Cloudflare)

`main` 브랜치에 푸시하면 Cloudflare가 자동으로 빌드·배포한다. Node 버전은 `.node-version`(22), 응답 헤더는 `public/_headers`.

**Workers 방식** (대시보드 Create app → Git 저장소 가져오기, 현재 기본)

| 설정 | 값 |
|---|---|
| 프로젝트 이름 | `customy-homepage` (`wrangler.jsonc`의 `name`과 같아야 함) |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |

**Pages 방식**

| 설정 | 값 |
|---|---|
| Framework preset | None |
| Build command | `npm run build` |
| Build output directory | `out` |
