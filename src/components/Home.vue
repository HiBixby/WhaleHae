<template>
  <div class="wrapper">
    <div class="calendar">
      <div class="year">{{ getCurrYear }}</div>
      <div class="month">{{ getCurrMonth }}</div>
      <div class="btn-container">
        <button class="btn-prev" @click.prevent="GoPrevMonth">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="16"
            viewBox="0 0 8 16"
          >
            <path
              d="M7.223 15.859.112 8.28v-.006l-.024-.022A.4.4 0 0 1 0 8a.4.4 0 0 1 .043-.18v-.006a.417.417 0 0 1 .068-.092L7.223.141a.461.461 0 0 1 .628-.034.4.4 0 0 1 .036.593L1.039 8l6.848 7.3a.4.4 0 0 1-.037.594.462.462 0 0 1-.627-.035z"
            />
          </svg>
        </button>
        <button class="btn-next" @click="GoNextMonth">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="8"
            height="16"
            viewBox="0 0 8 16"
          >
            <path
              d="M.777.141 7.888 7.72v.006l.024.022A.4.4 0 0 1 8 8a.4.4 0 0 1-.043.18v.006a.417.417 0 0 1-.068.092L.777 15.859a.461.461 0 0 1-.628.034.4.4 0 0 1-.036-.593L6.961 8 .113.7A.4.4 0 0 1 .15.106a.462.462 0 0 1 .627.035z"
            />
          </svg>
        </button>
      </div>
      <ul class="weeks">
        <li>Su</li>
        <li>Mo</li>
        <li>Tu</li>
        <li>We</li>
        <li>Th</li>
        <li>Fr</li>
        <li>Sa</li>
      </ul>
      <ul class="days">
        <li v-for="i in getFirstDayOfMonth" v-bind:key="i" class="disabled">
          <!-- {{ getLastDateOfLastMonth - (getFirstDayOfMonth - i) }} -->
        </li>
        <li
          v-for="i in getLastDateOfMonth"
          v-bind:key="i"
          :class="{
            selected: i === getSelectedDate.getDate() && isEqualYearAndMonth,
          }"
        >
          <button class="active" @click="ChangeSelectedDate(i)">{{ i }}</button>
        </li>
      </ul>
    </div>
    <EmptyTodo v-if="selectedDayOfTodoList"></EmptyTodo>
    <TodoList v-bind:selectedDate="getSelectedDate.getDate()"></TodoList>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import EmptyTodo from "./EmptyTodo.vue";
import TodoList from "./TodoList.vue";
export default {
  name: "MainPage",
  components: {
    EmptyTodo,
    TodoList,
  },
  props: {},
  data() {
    return {
      selectedDayOfTodoList: null,
      currentDate: new Date(),
    };
  },
  methods: {
    ...mapActions(["setSelectedDate"]),
    GoPrevMonth() {
      this.currentDate = new Date(
        this.currentDate.setMonth(this.currentDate.getMonth() - 1)
      );
    },
    GoNextMonth() {
      this.currentDate = new Date(
        this.currentDate.setMonth(this.currentDate.getMonth() + 1)
      );
    },
    ChangeSelectedDate(i) {
      this.setSelectedDate(
        new Date(this.getCurrYear, this.getCurrMonth - 1, i)
      );
    },
  },
  computed: {
    ...mapState(["selectedDate"]),
    ...mapGetters(["getSelectedDate"]),
    getCurrYear: function () {
      return this.currentDate.getFullYear();
    },
    getCurrMonth: function () {
      return this.currentDate.getMonth() + 1;
    },
    getCurrDay: function () {
      return this.currentDate.getDay();
    },
    getFirstDayOfMonth: function () {
      return new Date(this.getCurrYear, this.getCurrMonth - 1, 1).getDay();
    },
    getLastDateOfMonth: function () {
      return new Date(this.getCurrYear, this.getCurrMonth, 0).getDate();
    },
    getLastDateOfLastMonth: function () {
      return new Date(this.getCurrYear, this.getCurrMonth - 1, 0).getDate();
    },
    isEqualYearAndMonth: function () {
      return (
        this.currentDate.getFullYear() === this.getSelectedDate.getFullYear() &&
        this.currentDate.getMonth() === this.getSelectedDate.getMonth()
      );
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button:hover {
  cursor: pointer;
}
.wrapper {
  width: inherit;
  height: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8fffe;
}
.calendar {
  margin: 3.904rem 0 0 0;
  width: 90.7%;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
}
.year {
  font-family: Pretendard;
  font-size: 1.125rem;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  color: #01af94;
  margin: 1.705rem 0 0 5.6%;
}
.month {
  font-family: Pretendard;
  font-size: 1.563rem;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: #01af94;
  margin-left: 5.4%;
  display: inline-block;
}
.btn-container {
  display: flex;
  justify-content: space-between;
  float: right;
  width: 2.3rem;
  margin-right: 7.3%;
}
.btn-container button {
  background: transparent;
  border: none;
  padding: 0;
  fill: black;
}
.btn-container button:disabled {
  fill: #707070;
}
.days li {
  font-size: 0.875rem;
}
.days {
  list-style: none;
  padding: 0;
  display: grid;
  margin-top: 0.922rem;
  margin-left: 1rem;
  margin-right: 1rem;
  margin-bottom: 1.938rem;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  row-gap: 1.8rem;
}
.disabled {
  color: var(--warm-grey);
}
.active {
  color: var(--green-blue);
  border: none;
  background: none;
  font-weight: 500;
}
.selected button {
  position: relative;
  font-weight: 800;
  z-index: 10;
}
.selected {
  display: inline-table;
  position: relative;
}
.selected::before {
  position: absolute;
  content: "";
  height: 2.063rem;
  width: 2.063rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #defffa;
  border-radius: 5px;
  border: solid 1px var(--green-blue);
  z-index: 9;
}
.weeks {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  padding: 0;
  margin-top: 2.436rem;
  margin-left: 1rem;
  margin-right: 1rem;
  color: #a4beba;
}
.weeks li {
  font-size: 0.813rem;
  float: left;
}
</style>
