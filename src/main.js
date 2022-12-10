import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";
import Vuex from 'vuex'

createApp(App).use(router,Vuex).mount("#app");
