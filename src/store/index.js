import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pageName:'Home',
  },
  mutations: {
    changePageName(state, e) {
      state.pageName = e.target.name;
    }
  },
  actions: {},
  modules: {},
});
