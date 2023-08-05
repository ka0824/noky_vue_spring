<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const isDarkmode = computed(() => store.state.isDarkmode);
</script>

<template>
  <div class="container">
    <div class="info">
      <div class="info-main" :class="{ 'dark-text-white': isDarkmode }">
        NOKY에 오신 것을 환영합니다.
      </div>
      <div class="info-sub" :class="{ 'dark-text-gray': isDarkmode }">
        NOKY는 OKKY의 클론 프로젝트입니다.
      </div>
    </div>
  </div>
  <div class="login-container">
    <div class="login-text">NOKY 아이디로 로그인</div>
    <form class="form-container">
      <label class="form" :class="{ 'dark-text-white': isDarkmode }"
        >아이디
        <input class="login-input" :class="{ 'dark-input': isDarkmode }" />
      </label>
      <label class="form" :class="{ 'dark-text-white': isDarkmode }"
        >비밀번호
        <input class="login-input" :class="{ 'dark-input': isDarkmode }" />
      </label>
    </form>
    <button class="login-btn">로그인</button>
    <span class="signup-info" :class="{ 'dark-text-white': isDarkmode }"
      >아직 회원이 아니신가요?
      <router-link to="/signup"
        ><button class="signup-btn">회원가입</button></router-link
      >
    </span>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  padding-top: 8rem;
}

.info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.info-main {
  font-weight: bolder;
  font-size: 1.4rem;
}

.info-sub {
  margin-top: 1rem;
  font-size: 0.8rem;
  color: rgb(98, 109, 114);
}

.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  width: 24rem;
}

.login-text {
  color: rgb(98, 109, 114);
  font-size: 0.9rem;
  position: relative;
}

.login-text:after {
  content: "";
  border-bottom: 1px solid rgb(98, 109, 114);
  position: absolute;
  width: 7.6rem;
  left: calc(100% + 8px);
  bottom: 0.35rem;
}

.login-text:before {
  content: "";
  border-bottom: 1px solid rgb(98, 109, 114);
  position: absolute;
  width: 6.8rem;
  right: calc(100% + 8px);
  bottom: 0.35rem;
}

.form-container {
  padding: 3rem 0;
  width: 100%;
}

.form {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
}

.login-input {
  margin-top: 0.5rem;
  width: 100%;
  height: 1.8rem;
  border-radius: 8px;
  border: 1px solid rgb(210, 212, 217);
  padding: 0.1rem;
  padding-left: 0.5rem;

  &:focus {
    border: 1px solid black;
    outline: none;
  }
}

.login-btn {
  margin-top: -2rem;
  background: rgb(0, 144, 249);
  color: white;
  font-weight: 600;
  height: 2.5rem;
  border-radius: 8px;
  margin-left: 1rem;
  width: calc(100% + 1rem);

  &:hover {
    filter: brightness(90%);
  }
}

.signup-info {
  font-size: 0.9rem;
  margin-top: 1.5rem;
}

.signup-btn {
  text-decoration: underline;
  color: rgb(0, 144, 249);
}

.dark-text-white {
  color: white;
}

.dark-text-gray {
  color: rgb(148, 156, 167);
}

.dark-input {
  background: rgb(46, 56, 70);
  border: 1px solid rgb(64, 73, 88);
  color: white;

  &:focus {
    border: 1px solid rgb(107, 114, 128);
    outline: none;
  }
}
</style>
