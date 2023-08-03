import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Community from "../views/Community.vue";
import Qna from "../views/Qna.vue";
import Read from "../views/Read.vue";
import Write from "../views/Write.vue";

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
