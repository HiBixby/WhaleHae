<template>
  <div class="container">
    <div class="date">{{ getSelectedDate.getDate() }}일 Task</div>
    <router-link to="/list" custom v-slot="{ navigate }">
      <div @click.self="navigate" class="box">
        <TodoList></TodoList>
        <router-link to="/todo" custom v-slot="{ navigate }">
          <button class="btn-add" @click="navigate" title="추가">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
            >
              <path
                id="패스_2"
                data-name="패스 2"
                d="M-550,136a9,9,0,0,0,9-9,9,9,0,0,0-9-9,9,9,0,0,0-9,9A9,9,0,0,0-550,136Zm-.844-5.906v-2.25h-2.25a.842.842,0,0,1-.844-.844.842.842,0,0,1,.844-.844h2.25v-2.25a.842.842,0,0,1,.844-.844.842.842,0,0,1,.844.844v2.25h2.25a.842.842,0,0,1,.844.844.842.842,0,0,1-.844.844h-2.25v2.25a.842.842,0,0,1-.844.844A.842.842,0,0,1-550.844,130.094Z"
                transform="translate(559 -118)"
                fill="#01af94"
              />
            </svg>
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
dayjs.locale("ko");

export default {
  name: "TodoBoxComponent",
  components: { TodoList },

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
  flex: 0;
}
</style>
