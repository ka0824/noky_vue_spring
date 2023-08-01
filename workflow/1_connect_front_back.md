# 1. 프론트엔드, 백엔드 연결하기

## 목차


### [1. 프론트엔드 프로젝트 생성](#1-프론트엔드-프로젝트-생성-1)
### [2. 백엔드 프로젝트 생성](#2-백엔드-프로젝트-생성-1)
### [3. 프론트엔드 빌드 파일 백엔드 폴더에 넣기](#3-프론트엔드-빌드-파일-백엔드-폴더에-넣기-1)
### [4. 프론트엔드 파일 빌드하기](#4-프론트엔드-파일-빌드하기-1)
### [5. 백엔드에서 프론트엔드 화면 뜨는지 확인](#5-백엔드에서-프론트엔드-화면-뜨는지-확인-1)
### [6. 개발을 위한 프록시 설정하기](#6-개발을-위한-프록시-설정하기-1)

----------------------------------------------

<br />

### 1. 프론트엔드 프로젝트 생성

- vite 명령어를 통해 Vue 프로젝트 생성
  
```
npm create vite
```

<br />

----------------------------------------------

<br />

### 2. 백엔드 프로젝트 생성

- vs코드에서 'Spring Initializr Java Support' 익스텐션 사용해 스프링 프로젝트 생성
- 'ctrl + shift + p' 단축키를 사용해 팔렛트를 연 후 다음 명령어 입력 

```
Spring Initialzr: Create a Maven Project
```

<br />

---------------------------------------------

<br />

### 3. 프론트엔드 빌드 파일 백엔드 폴더에 넣기

- 프론트엔드 폴더에서 vite.config.ts에 다음 코드 추가

```
vite.config.ts

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "../back/src/main/resources/static",
  },
});

```

<br />

---------------------------------------------------

<br />

### 4. 프론트엔드 파일 빌드하기

- npm을 통해 라이브러리 설치

```
npm i
```

- 명령어를 통해 파일 빌드하기

```
npm run build
```

<br />

---------------------------------------------------

<br />

### 5. 백엔드에서 프론트엔드 화면 뜨는지 확인

- 스프링 부트 서버 실행하기

```
/src/main/java/com/noky/backend/BackendApplication.java

package com.noky.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class BackendApplication {
        // 아래 메서드 실행
	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

}

```

- vue 화면이 뜨면 성공

<br />

----------------------------------------------------

<br />

### 6. 개발을 위한 프록시 설정하기

- 최종 배포 단계에서는 프론트엔드 파일을 빌드해서 서버 폴더에 넣어줄 것이기에 하나의 포트만 사용
- 그러나 개발 단계에서는 계속 빌드하면서 확인할 수 없기 때문에, 프론트엔드 포트, 백엔드 포트를 모두 사용
- 따라서, 개발 단계에서는 프록시 설정을 통해 스프링 부트가 실행되는 포트로 url 요청을 보내줘야 함.
- 그러므로, 프록시 설정은 개발단계에서만 사용됨.
- vite 설정 파일 코드를 다음과 같이 수정
```
vite.config.ts

import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },

    // 해당 경로에 bulid 파일을 만듬.
  build: {
    outDir: "../backend/src/main/resources/static",
  },

      // '/api'로 요청하면 'http://localhost:8080'(스프링 부트가 실행되는 포트)로 요청을 보내게 됨.
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
        secure: false,
        ws: true,
      },
    },
  },
});

```
