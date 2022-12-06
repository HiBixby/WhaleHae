<template>
  <div class="wrapper">
    <div class="calendar">
      <div class="year">{{ today.getFullYear() }}</div>
      <div class="month">{{ today.getMonth() + 1 }}</div>
      <div class="btn-container">
        <button class="btn-prev">
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
        <button class="btn-next">
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
    </div>
    <EmptyTodo></EmptyTodo>
  </div>
</template>

<script>
import EmptyTodo from "./EmptyTodo.vue";
export default {
  name: "MainCalendar",
  components: {
    EmptyTodo,
  },
  props: {
    today: {
      type: Date,
      default: () => {
        return new Date();
      },
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
.calendar {
  margin: 3.904rem 0 0 0;
  width: 90.7%;
  height: 35.3%;
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
  margin-left: 5.6%;
  display: inline-block;
}
.btn-container {
  display: inline-block;
  margin-left: 68.5%;
}
.btn-container button {
  background: transparent;
  border: none;
  padding: 0;
  fill: black;
}
btn-container button:disabled {
  fill: red;
}

.weeks {
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 0;
  margin-top: 2.436rem;
  margin-left: 8.3%;
  margin-right: 8.3%;
  color: #a4beba;
}
.weeks li {
  float: left;
}
</style>
