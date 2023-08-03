<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const isDarkmode = computed(() => store.state.isDarkmode);

import Darkmode from "./Darkmode.vue";
</script>

<template>
  <div class="container">
    <div class="nav-flex">
      <div class="logo" :class="{ 'dark-text': isDarkmode }">NOKY</div>
      <div class="menu-container">
        <button class="menu responsive" :class="{ 'dark-text': isDarkmode }">
          Q&A
        </button>
        <button class="menu responsive" :class="{ 'dark-text': isDarkmode }">
          지식
        </button>
        <button class="menu responsive" :class="{ 'dark-text': isDarkmode }">
          커뮤니티
        </button>
        <button class="menu responsive" :class="{ 'dark-text': isDarkmode }">
          이벤트
        </button>
      </div>
    </div>
    <div class="empty"></div>
    <div class="nav-flex">
      <div class="search-container responsive">
        <font-awesome-icon
          class="search-icon"
          icon="fa-solid fa-magnifying-glass"
          style="color: #959ca9"
        />
        <input
          class="nav-search"
          :class="{ 'dark-search': isDarkmode }"
          placeholder="검색"
        />
        <font-awesome-icon
          class="search-icon"
          icon="fa-solid fa-magnifying-glass"
          style="color: #959ca9"
        />
      </div>
      <div class="responsive flex">
        <Darkmode></Darkmode>
      </div>
    </div>
    <button
      class="user-btn signin responsive"
      :class="{ 'dark-signin': isDarkmode }"
    >
      로그인
    </button>
    <button class="user-btn signup responsive">회원가입</button>
    <button
      class="responsive-btn"
      :class="{ 'responsive-dark-btn': isDarkmode }"
    >
      <font-awesome-icon
        class="responsive-icon"
        icon="fa-solid fa-bars"
        style="color: #0090f9"
      />
    </button>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 80rem;
}

.responsive {
  @media (max-width: 900px) {
    display: none;
  }
}

.responsive-btn {
  width: 2rem;
  height: 2rem;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgb(231, 231, 233);
  }

  @media (min-width: 901px) {
    display: none;
  }
}

.responsive-dark-btn {
  &:hover {
    background: rgb(53, 62, 74);
  }
}

.responsive-icon {
  width: 1.5rem;
  height: 1.5rem;
}

.nav-flex {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.empty {
  flex: 1;
}

.logo {
  font-weight: 900;
  font-size: 2rem;
  margin-right: 8rem;
  color: rgb(61, 64, 70);

  @media (max-width: 1148px) {
    margin-right: 0rem;
  }
}

.dark-text {
  color: white;
}
.menu-container {
  display: flex;
}

.menu {
  margin-right: 2rem;
  border: none;
  background: none;
  cursor: pointer;
  min-width: 4.5rem;

  &:hover {
    color: rgb(74, 144, 249);
  }

  @media (max-width: 1020px) {
    margin-right: 0rem;
  }
}

.search-container {
  position: relative;
  margin-right: 2rem;
}

.nav-search {
  border-radius: 20px;
  border-color: rgb(219, 220, 221);
  padding: 0 0 0 2rem;
  height: 2rem;
  &:focus {
    border-color: rgb(74, 144, 249); /* 포커스가 있을 때의 테두리 색상 */
    outline: none; /* 포커스 시 나타나는 기본적인 아웃라인 스타일 제거 */
  }
}

.dark-search {
  background: rgb(55, 65, 81);
  border-color: rgb(55, 65, 81);
  color: white;
}

.search-icon {
  position: absolute;
  left: 12px;
  top: 10px;
}

.user-btn {
  border-radius: 20px;
  height: 2rem;
  cursor: pointer;
  padding: 0px 1rem;
  min-width: 5.5rem;

  &:hover {
    filter: brightness(90%);
  }
}

.signin {
  border: 1px solid rgb(84, 92, 106);
  background: white;
  margin-right: 1rem;
}

.dark-signin {
  background: rgb(55, 65, 81);
  color: white;
}
.signup {
  background: rgb(74, 144, 249);
  color: white;
  border: none;
}
</style>
