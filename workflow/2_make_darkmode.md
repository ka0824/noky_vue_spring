# 2. 다크모드 적용하기
### 목차

----------------------------------
<br />

### 1. vuex 설치하기
- vuex를 통해 전역 상태 관리

```
npm i vuex
```

<br />

-------------------------------------

<br />

### 2. state, action 만들기

- 다크모드 on,off 여부를 관리하는 상태 작성
- 다크모드 on,off 하는 action 작성
```
/store/store.ts

import { createStore } from "vuex";

const store = createStore({
  state() {
    return {

        // 만들고자 하는 상태
        // 다크모드가 기본적으로는 꺼져있는 상태로 작성
      isDarkmode: false,
    };
  },
  mutations: {

        // 상태 변경 로직
        // 함수가 실행 될 때마다 on,off가 변하게 작성
    toggleDarkmode(state) {
      state.isDarkmode = !state.isDarkmode;
    },
  },
  actions: {

        // 호출하여 상태 변경
    toggleDarkmode({ commit }) {
      commit("toggleDarkmode");
    },
  },
});

export default store;
```

<br />

---------------------------------

### 3. store 연결하기

```
/src/main.ts

import { createApp } from "vue";

// 생성한 store 불러오기
import store from "./store/store";

import "./reset.css";
import "./main.css";
import App from "./App.vue";
import router from "./router/router";

const app = createApp(App);

// store 연결하기
app.use(store);
app.mount("#app");
```

<br />

---------------------------------

<br />

### 4. vue 컴포넌트에서 isDarkmode 상태 값 불러오기

- useStore, computed 메서드를 이용해 전역 상태 받아오기
- store.commit을 통해 전역 상태 변경 시키기 (액션 실행하기)

```
<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

// isDarkmode 상태 변수에 저장
const isDarkmode = computed(() => store.state.isDarkmode);


// toggleDarkmode라는 함수가 호출될 시 isDarkmode 값을 바꾸는 액션 실행
function toggleDarkmode() {
  store.commit("toggleDarkmode");
}
</script>
```

<br />

---------------------------------------

### 5. isDarkmode 값에 따라 class 부여하기

<br />

- isDarkmode 값이 true가 될 시 다크모드 디자인을 적용하는 class를 부여

```
<template>
  <button
    class="container"
      // isDarkmode가 true일 시 'dark-on'이라는 class 부여
    :class="{ 'dark-on': isDarkmode }"
    @click="toggleDarkmode"
  >
    <font-awesome-icon
      class="dark-icon dark-icon-moon"
      icon="fa-solid fa-moon"
      style="color: #9ca3af"
    />

    <font-awesome-icon
      class="dark-icon dark-icon-sun"
      icon="fa-solid fa-sun"
      style="color: #facc15"
    />
    <div
      class="toggle"
      :class="{ 'move-left': !isDarkmode, 'move-right': isDarkmode }"
    ></div>
  </button>
</template>
```

<br />

--------------------------------------------

<br />

### 6. 다크모드 적용할 디자인 추가

- 다크모드 디자인 적용할 class의 css를 작성

```
<style scoped>

.container {
  background: rgb(74, 144, 249);
  position: relative;
  border: none;
  min-width: 3rem;
  height: 1.5rem;
  border-radius: 20px;
  cursor: pointer;
  padding: 2px;
  margin-right: 2rem;
}

.dark-on {
  background: rgb(55, 65, 81);
}

...

</style>

```
