import { createApp } from "vue";
import store from "./store/store";

import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faMoon,
  faSun,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

import "./reset.css";
import "./main.css";
import App from "./App.vue";
import router from "./router/router";

library.add(faSun);
library.add(faMoon);
library.add(faMagnifyingGlass);
library.add(faBars);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.use(store);
app.mount("#app");
