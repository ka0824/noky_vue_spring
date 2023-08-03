<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();
const isDarkmode = computed(() => store.state.isDarkmode);

function toggleDarkmode() {
  store.commit("toggleDarkmode");
}
</script>

<template>
  <button
    class="container"
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
.toggle {
  background: white;
  height: 1.2rem;
  width: 1.2rem;
  border-radius: 50%;
  transition: transform 0.1s ease;
}

.dark-icon {
  position: absolute;
  top: 5px;
}

.dark-icon-moon {
  left: 8px;
}

.dark-icon-sun {
  right: 8px;
}

.move-right {
  transform: translateX(1.5rem); /* 오른쪽으로 이동할 거리 */
}
.move-left {
  transform: translateX(0); /* 왼쪽으로 이동할 거리 */
}
</style>
