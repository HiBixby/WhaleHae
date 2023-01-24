<template>
  <router-view></router-view>
</template>

<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    try {
      //eslint-disable-next-line
      chrome.storage.local.get(["todos"]).then((result) => {
        const storedTodos = Object.values(result.todos).map((todo) => {
          todo.date = new Date(todo.date);
          return todo;
        });
        console.log(storedTodos);
        store.commit("SET_TODOS", storedTodos);
      });
    } catch {
      console.log("개발모드입니다.");
    }
  },
};
</script>

<style>
:root {
  --green-blue: #01af94;
  --aqua-marine: #34e8cd;
  --light-grey-blue: #a4c9c3;
  --warm-grey: #707070;
  --ice-blue: #ebfffc;
}
* {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
body,
html {
  height: 100%;
}
body {
  margin: 0px;
}
#app {
  height: 100%;
  color: #2c3e50;
}
</style>
