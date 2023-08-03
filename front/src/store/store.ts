import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isDarkmode: false,
    };
  },
  mutations: {
    toggleDarkmode(state) {
      state.isDarkmode = !state.isDarkmode;
    },
  },
  actions: {
    toggleDarkmode({ commit }) {
      commit("toggleDarkmode");
    },
  },
  getters: {
    darkmode(state) {
      return state.isDarkmode;
    },
  },
});

export default store;
