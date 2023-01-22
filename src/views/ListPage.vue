<template>
  <div class="wrapper">
    <router-link to="/" custom v-slot="{ navigate }">
      <button @click="navigate" class="btn-prev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="11.507"
          height="20.553"
          viewBox="0 0 11.507 20.553"
        >
          <path
            id="back"
            d="M9.938,19.835.154,10.356l0,0,0,0-.006-.006,0,0-.007-.007,0,0-.008-.009h0A.478.478,0,0,1,0,10.012s0,0,0-.006S0,10,0,10a.465.465,0,0,1,.059-.219v0l0-.007,0-.006v0a.528.528,0,0,1,.093-.114L9.938.177A.681.681,0,0,1,10.8.133a.476.476,0,0,1,.051.743L1.43,10.006l9.421,9.13a.476.476,0,0,1-.051.743.668.668,0,0,1-.406.133A.659.659,0,0,1,9.938,19.835Z"
            transform="translate(0.25 0.291)"
            fill="#707070"
            stroke="#707070"
            stroke-linecap="round"
            stroke-width="0.5"
          />
        </svg>
      </button>
    </router-link>
    <header>{{ getSelectedDate.getDate() }}일의 Task</header>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
import { mapGetters } from "vuex";
import dayjs from "dayjs";
dayjs.locale("ko");
export default {
  name: "AddTodo",
  components: {
    TodoList,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getSelectedDate", "getTodosOfDate"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  color: var(--green-blue);
}
</style>
