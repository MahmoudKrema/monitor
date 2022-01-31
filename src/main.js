import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
//above we rendered root app component (App) to this app id (#app)
//(#app) is in public/index.html in the <div id="app"></div> element
