import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Community from "../views/Community.vue";
import Qna from "../views/Qna.vue";
import Read from "../views/Read.vue";
import Write from "../views/Write.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/community", component: Community },
  { path: "/qna", component: Qna },
  { path: "/read", component: Read },
  { path: "/write", component: Write },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
