<template>
  <div class="wrapper">
    <div class="calendar">
      <div class="year">{{ today.getFullYear() }}</div>
      <div class="month">{{ today.getMonth() + 1 }}</div>
      <button class="btn-prev">뒤</button>
      <button class="btn-next">앞</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainCalendar",
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
  justify-content: center;
}
.calendar {
  width: 90.7%;
  height: 35.3%;
  border-radius: 15px;
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
  color: #707070;
}
.month {
  font-family: Pretendard;
  font-size: 1.563rem;
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
}
</style>
