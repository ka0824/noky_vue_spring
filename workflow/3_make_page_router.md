### 3. 페이지 라우터 만들기

## 목차

<br />

------

<br />

### 1. vue-router 설치

```
npm i vue-router
```

<br />

---------------------

<br />

### 2. router.ts 작성하기

- 연결할 컴포넌트 불러오기
- path와 컴포넌트 연결하기

```
src/router/router.ts

import { createRouter, createWebHistory } from "vue-router";

// 연결할 컴포넌트 불러오기
import Home from "../views/Home.vue";
import Community from "../views/Community.vue";
import Qna from "../views/Qna.vue";
import Read from "../views/Read.vue";
import Write from "../views/Write.vue";

// path와 컴포넌트 연결하기
const routes = [
  { path: "/", component: Home },
  { path: "/community", component: Community },
  { path: "/qna", component: Qna },
  { path: "/read", component: Read },
  { path: "/write", component: Write },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

```

<br />

--------------------------

<br />

### 3. 라우터 연결하기

- 가장 상단 파일에서 작성한 라우터 연결

```
src/main.ts

import { createApp } from "vue";
import store from "./store/store";

import "./reset.css";
import "./main.css";
import App from "./App.vue";

// 라우터 불러오기
import router from "./router/router";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
```

<br />

----------------------------------

### 4. router-view 이용해서 원하는 위치에 넣기

```
src/App.vue

<script setup lang="ts">
  import Nav from "./components/Nav.vue";
</script>

<template>
  <div class="main-container" :class="{ 'dark-body': isDarkmode }">
    <Nav></Nav>

    // 라우터로 불러온 컴포넌트 보여줄 위치
    <router-view></router-view>
  </div>
</template>

<style scoped>
.main-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
```
