<template>
  <div class="container">
    <div class="date">{{ getSelectedDate.getDate() }}일 Task</div>
    <router-link to="/list" custom v-slot="{ navigate }">
      <div @click.self="navigate" class="box">
        <TodoList></TodoList>
        <router-link to="/todo" custom v-slot="{ navigate }">
          <button class="btn-add" @click="navigate" title="새 일정 생성">
            <SmallCirclePlusIcon />
          </button>
        </router-link>
      </div>
    </router-link>
  </div>
</template>

<script>
import TodoList from "./TodoList.vue";
import { mapGetters, mapState } from "vuex";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import SmallCirclePlusIcon from "../assets/small-circle-plus.svg";
dayjs.locale("ko");

export default {
  name: "TodoBoxComponent",
  components: { TodoList, SmallCirclePlusIcon },

  computed: {
    ...mapState(["selectedDate", "todos"]),
    ...mapGetters(["getSelectedDate", "getTodosOfDate"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  flex: 1;
  width: 100%;
  max-height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.date {
  margin-top: 2.891rem;
  margin-bottom: 1.125rem;
  padding-left: 1rem;
  width: 90.5%;
  font-size: 1.25rem;
  font-weight: 800;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: var(--green-blue);
  text-align: left;
}
.box {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90.5%;
  min-height: 150px;
  padding: 1.5rem 0rem;
  margin-bottom: 2rem;
  border-radius: 15px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: white;
  overflow-y: scroll;
  overflow-x: visible;
}
ul {
  flex: 1;
  margin: 0;
  padding: 0 1.25rem;
  list-style: none;
  overflow: scroll;
}
time {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--green-blue);
}
.second-line {
  display: flex;
  justify-content: space-between;
  margin: 0.563rem 0rem 0.938rem 0rem;
}
.title {
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;
  color: var(--warm-grey);
}
button {
  padding: 0.4rem 0.4rem 0 0.4rem;
  background: none;
  border: none;
}
button:hover {
  cursor: pointer;
}
.link {
  margin: 0;
  font-size: 0.625rem;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: #b9b9b9;
}
hr {
  border: solid 1px var(--light-grey-blue);
}
.btn-add {
  flex-grow: 0;
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
}
</style>
