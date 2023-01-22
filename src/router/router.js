import {
  createRouter,
  createWebHashHistory,
} from "vue-router";
import AddTodo from "../components/AddTodo.vue";
import Home from "../components/Home.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // path별 component를 추가한다.
    { path: "/", name: "home", component: Home },
    {
      path: "/todo",
      name: "todo",
      component: AddTodo,
    },
  ],
});

export default router;
