<template>
  <div class="wrapper">
    <CalendarComp />
    <EmptyTodo v-if="isEmpty" />
    <TodoList v-else />
  </div>
</template>

<script>
import EmptyTodo from "./EmptyTodo.vue";
import TodoList from "./TodoList.vue";
import CalendarComp from "./Calendar.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",
  components: {
    EmptyTodo,
    TodoList,
    CalendarComp,
  },
  computed: {
    ...mapGetters(["getTodosOfDate"]),
    isEmpty: function () {
      return this.getTodosOfDate.length === 0;
    },
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
