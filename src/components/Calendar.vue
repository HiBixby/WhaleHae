<template>
  <div class="calendar">
    <h3 class="screen-reader">달력</h3>
    <div class="year">{{ getCurrYear }}</div>
    <div class="month">{{ getCurrMonth }}</div>
    <div class="btn-container">
      <button class="btn-prev" @click.prevent="GoPrevMonth" title="이전 달">
        <ChevronLeftIcon />
      </button>
      <button class="btn-next" @click="GoNextMonth" title="다음 달">
        <ChevronRightIcon />
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
    <div class="days">
      <button
        v-for="i in getFirstDayOfMonth"
        v-bind:key="i"
        class="disabled"
        disabled
      >
        <!-- {{ getLastDateOfLastMonth - (getFirstDayOfMonth - i) }} -->
      </button>
      <button
        v-for="i in getLastDateOfMonth"
        v-bind:key="i"
        class="active"
        :class="{
          selected: i === getSelectedDate.getDate() && isEqualYearAndMonth,
        }"
        @click="ChangeSelectedDate(i)"
      >
        <time
          :datetime="`${getSelectedDate.getFullYear()}-${
            getSelectedDate.getMonth() + 1
          }-${i}`"
          >{{ i }}</time
        >
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ChevronLeftIcon from "../assets/chevron-left.svg";
import ChevronRightIcon from "../assets/chevron-right.svg";
export default {
  name: "CalendarComponent",
  components: { ChevronLeftIcon, ChevronRightIcon },
  data() {
    return {
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
      return ("0" + (this.currentDate.getMonth() + 1)).slice(-2);
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
  margin: 1.705rem 0 0 5.4%;
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
.days {
  display: grid;
  margin: 0.922rem 1rem 1.938rem 1rem;
  grid-template-columns: repeat(7, 1fr);
  grid-row-gap: 0.772rem;
  justify-items: center;
}
.days button {
  font-size: 0.875rem;
  width: 2.063rem;
  height: 2.063rem;
}
.disabled {
  visibility: hidden;
}
.active {
  color: var(--green-blue);
  border: none;
  background: none;
  font-weight: 500;
}
.selected {
  font-weight: 800;
  border-radius: 5px;
  background-color: var(--ice);
  border: solid 1px var(--green-blue);
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
