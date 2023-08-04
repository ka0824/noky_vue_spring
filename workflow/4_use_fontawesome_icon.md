# 4. Font Awesome 아이콘 사용하기

## 목차

### [1. Font Awesome 라이브러리 설치](#1-font-awesome-라이브러리-설치-1)
### [2. 사용할 아이콘 찾기](#2-사용할-아이콘-찾기-1)
### [3. 아이콘 코드 가져오기](#3-아이콘-코드-가져오기-1)
### [4. 아이콘 적용하기](#4-아이콘-적용하기-1)

<br />

---------

<br />

### 1. Font Awesome 라이브러리 설치

```
npm i --save @fortawesome/fontawesome-svg-core

// 무료버전
npm i --save @fortawesome/free-solid-svg-icons
npm i --save @fortawesome/free-regular-svg-icons
npm i --save @fortawesome/free-brands-svg-icons

// vue3 버전 맞춰서 설치
npm i --save @fortawesome/vue-fontawesome@latest-3
```

<br />

------

<br />

### 2. 사용할 아이콘 찾기

- [아이콘 찾기](https://fontawesome.com/icons)

<br />

------

<br />

### 3. 아이콘 코드 가져오기

- icon의 타입과 아이콘 이름을 파악

```
<template>
    <font-awesome-icon

        // 아이콘의 타입 : solid, 아이콘의 이름: fa-sun
      icon="fa-solid fa-sun"
      style="color: #facc15"
    />
</template>
```

<br />

------

<br />

### 4. 아이콘 적용하기

- Font Awesome 라이브러리를 가져오기
- 사용할 아이콘 가져오기

```
src/main.ts

import { createApp } from "vue";

// FontAwesome 라이브러리 가져오기
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// 사용할 아이콘 가져오기
// 사용할 아이콘의 타입과 이름 필요
// "@fortawesome/free-{사용할 아이콘의 타입}-svg-icons"
// 아이콘의 이름은 camelCase로 작성
import {
  faMoon,
  faSun,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import "./reset.css";
import "./main.css";
import App from "./App.vue";
import router from "./router/router";

// 가져온 아이콘 적용하기
library.add(faSun);
library.add(faMoon);
library.add(faMagnifyingGlass);
library.add(faBars);

const app = createApp(App);

// Font Awesome 이름으로 컴포넌트 생성 
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
```
