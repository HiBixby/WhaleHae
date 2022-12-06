<template>
  <MainCalendar></MainCalendar>
</template>

<script>
import MainCalendar from "./components/MainCalendar.vue";
export default {
  name: "App",
  components: { MainCalendar },
};
</script>

<style>
* {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
