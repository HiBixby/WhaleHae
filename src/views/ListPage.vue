<template>
  <div class="wrapper">
    <nav>
      <router-link to="/" custom v-slot="{ navigate }">
        <button @click="navigate" class="btn-prev" title="메인 페이지">
          <BackIcon />
        </button>
      </router-link>
      <header>{{ getSelectedDate.getDate() }}일의 Task</header>
    </nav>

    <todo-list></todo-list>
  </div>
</template>

<script setup>
import TodoList from "@/components/TodoList.vue";
import BackIcon from "../assets/back.svg";
import { useStore } from "vuex";
import dayjs from "dayjs";
import { computed } from "vue";
dayjs.locale("ko");
const store = useStore();
document.body.style.backgroundColor = "white";
const getSelectedDate = computed(() => store.getters.getSelectedDate);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  font-size: 1.875rem;
  font-weight: 800;
  color: var(--green-blue);
  margin-top: 0.875rem;
  margin-bottom: 1.688rem;
}
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
}
nav {
  margin: 0 7%;
}
.btn-prev {
  margin: 3.5rem 0 0 0;
  border: none;
  background: none;
}
.btn-prev:hover {
  cursor: pointer;
}
ul {
  padding: 0 7%;
  overflow-y: scroll;
}
</style>
