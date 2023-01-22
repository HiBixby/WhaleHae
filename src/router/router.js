import { createRouter, createWebHashHistory } from "vue-router";
import TodoPage from "../views/TodoPage.vue";
import MainPage from "../views/MainPage.vue";
import ListPage from "../views/ListPage.vue";

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
    {
      path: "/list",
      name: "list",
      component: ListPage,
    },
  ],
});

export default router;
