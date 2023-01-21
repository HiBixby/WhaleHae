<template>
  <div class="wrapper">
    <CalendarComp />
    <EmptyTodo v-if="isEmpty" />
    <TodoList />
  </div>
</template>

<script>
import EmptyTodo from "./EmptyTodo.vue";
import TodoList from "./TodoList.vue";
import CalendarComp from "./Calendar.vue";
export default {
  name: "MainPage",
  components: {
    EmptyTodo,
    TodoList,
    CalendarComp,
  },
  props: {},
  data() {
    return {
      isEmpty: false,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8fffe;
}
</style>
