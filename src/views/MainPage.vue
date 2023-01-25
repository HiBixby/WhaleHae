<template>
  <div class="wrapper">
    <CalendarComp />
    <EmptyTodo v-if="isEmpty" />
    <TodoBox v-else />
  </div>
</template>

<script>
import EmptyTodo from "@/components/EmptyTodo.vue";
import TodoBox from "@/components/TodoBox.vue";
import CalendarComp from "@/components/Calendar.vue";
import { mapGetters } from "vuex";
export default {
  name: "MainPage",
  setup() {
    document.body.style.backgroundColor = "#f8fffe";
  },
  components: {
    EmptyTodo,
    TodoBox,
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
}
</style>
