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
  <div class="signup-container">
    <div class="signup-text">회원가입에 필요한 기본정보를 입력해주세요.</div>
    <form class="form-container">
      <label class="form" :class="{ 'dark-text-white': isDarkmode }"
        >아이디
        <input class="login-input" :class="{ 'dark-input': isDarkmode }" />
      </label>
      <label class="form" :class="{ 'dark-text-white': isDarkmode }"
        >비밀번호
        <input class="login-input" :class="{ 'dark-input': isDarkmode }" />
      </label>
      <label class="form" :class="{ 'dark-text-white': isDarkmode }"
        >이메일
        <input class="login-input" :class="{ 'dark-input': isDarkmode }" />
      </label>
      <label class="form" :class="{ 'dark-text-white': isDarkmode }"
        >실명
        <input class="login-input" :class="{ 'dark-input': isDarkmode }" />
      </label>
      <label class="form" :class="{ 'dark-text-white': isDarkmode }"
        >닉네임
        <input class="login-input" :class="{ 'dark-input': isDarkmode }" />
      </label>
    </form>
    <button class="signup-btn">회원가입</button>
    <span class="login-info" :class="{ 'dark-text-white': isDarkmode }"
      >이미 회원이신가요?
      <router-link to="/login"
        ><button class="login-btn">로그인</button></router-link
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

.signup-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 2rem;
  width: 24rem;
}

.signup-text {
  color: rgb(98, 109, 114);
  font-size: 0.9rem;
  position: relative;
}

.signup-text:after {
  content: "";
  border-bottom: 1px solid rgb(98, 109, 114);
  position: absolute;
  width: 3.2rem;
  left: calc(100% + 8px);
  bottom: 0.35rem;
}

.signup-text:before {
  content: "";
  border-bottom: 1px solid rgb(98, 109, 114);
  position: absolute;
  width: 2.3rem;
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

.signup-btn {
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

.login-info {
  font-size: 0.9rem;
  margin-top: 1.5rem;
}

.login-btn {
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
