import { createWebHistory, createRouter } from "vue-router";
import AddTodo from "../components/AddTodo.vue";
import Home from "../components/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/", name: "home", component: Home },
    {
      path: "/task",
      name: "task",
      component: AddTodo,
    },
  ],
});

export default router;
