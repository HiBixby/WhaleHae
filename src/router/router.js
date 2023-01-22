import { createRouter, createWebHashHistory } from "vue-router";
import TodoPage from "../components/TodoPage.vue";
import MainPage from "../components/MainPage.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/", name: "home", component: MainPage },
    {
      path: "/todo",
      name: "todo",
      component: TodoPage,
    },
  ],
});

export default router;
