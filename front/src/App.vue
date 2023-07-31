<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

const message = ref("");

const springBootUrl = "/api";

async function fetchMessage() {
  try {
    const response = await axios.get(`${springBootUrl}/test`);
    message.value = response.data;
  } catch (error) {
    console.error(error);
  }
}

onMounted(fetchMessage);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <p>{{ message }}</p>
  </div>
</template>

<style scoped></style>
