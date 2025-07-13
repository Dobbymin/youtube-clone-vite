# YouTube Clone with Vite

YouTube 클론 프로젝트입니다. React와 Vite를 사용하여 YouTube의 메인 페이지를 구현했습니다.

## 🚀 기술 스택

- **Frontend Framework**: React 19
- **Build Tool**: Vite
- **Package Manager**: Bun
- **State Management**: TanStack Query (React Query)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Styling**: CSS Modules
- **Icons**: FontAwesome
- **YouTube Integration**: react-youtube

## 📁 프로젝트 구조

```
src/
├── app/
│   ├── providers/          # React Query, Router 등 프로바이더
│   └── routes/             # 라우팅 설정
├── features/
│   └── main/
│       ├── apis/           # YouTube API 호출 함수들
│       ├── components/     # UI 컴포넌트들
│       ├── data/           # 정적 데이터
│       └── hooks/          # 커스텀 훅들
├── pages/                  # 페이지 컴포넌트들
└── shared/
    ├── constants/          # 상수 정의
    └── libs/               # 유틸리티 라이브러리
```

## 🎯 주요 기능

- **비디오 플레이어**: YouTube 비디오 재생
- **비디오 정보 표시**: 제목, 설명, 조회수 등
- **채널 정보**: 채널명, 구독자 수 등
- **Up Next 섹션**: 추천 비디오 목록
- **반응형 디자인**: 다양한 화면 크기 지원

## 🛠️ 설치 및 실행

### Prerequisites

> [Bun](https://bun.sh/) 설치 필요
```bash
# Bun 설치 (with npm)
npm install -g bun
```


### 설치

```bash
# 의존성 설치
bun install
```

### 개발 서버 실행

```bash
# 개발 모드로 실행
bun run dev
```

### 빌드

```bash
# 프로덕션 빌드
bun run build
```

### 미리보기

```bash
# 빌드된 결과물 미리보기
bun run preview
```

## 🔧 환경 설정

YouTube API를 사용하기 위해 환경 변수를 설정해야 합니다.

1. `.env` 파일을 프로젝트 루트에 생성
2. YouTube Data API v3 키를 설정:

```env
VITE_YOUTUBE_API_KEY=your_youtube_api_key_here
```

## 📝 스크립트

- `bun run dev`: 개발 서버 실행
- `bun run build`: 프로덕션 빌드
- `bun run preview`: 빌드 결과물 미리보기
- `bun run lint`: ESLint 검사
- `bun run format`: Prettier 포맷팅

## 🌟 Bun 사용의 장점

이 프로젝트는 **Bun**을 패키지 매니저로 사용합니다:

- **빠른 설치**: npm보다 30배 빠른 패키지 설치
- **JavaScript 런타임**: Node.js 대안으로 사용 가능
- **번들러 내장**: Vite와 함께 사용하여 더욱 빠른 개발 환경
- **TypeScript 지원**: 기본적으로 TypeScript 지원
- **환경 변수**: `.env` 파일 자동 로드

## 📄 라이선스

이 프로젝트는 학습 목적으로 제작되었습니다.
