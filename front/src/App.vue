<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

import Nav from "./components/Nav.vue";

const store = useStore();
const isDarkmode = computed(() => store.state.isDarkmode);
</script>

<template>
  <div class="main-container" :class="{ 'dark-body': isDarkmode }">
    <Nav></Nav>
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
