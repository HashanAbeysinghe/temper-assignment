import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import BootstrapVue from 'bootstrap-vue';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowCircleDown, faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowCircleDown, faArrowCircleUp);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
