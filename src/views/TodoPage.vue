<template>
  <div class="container">
    <nav>
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
    </nav>
    <header>
      <time class="day">{{ getYYYYMMDD }}</time>
      <div class="second-line">
        <input type="time" class="time" />
        <button class="btn-noti">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21.888"
            height="25.014"
            viewBox="0 0 21.888 25.014"
          >
            <path
              d="M10.962 0A1.562 1.562 0 0 0 9.4 1.563V2.5a7.821 7.821 0 0 0-6.254 7.661v.918a9.4 9.4 0 0 1-2.37 6.234l-.362.406a1.564 1.564 0 0 0 1.168 2.6h18.76a1.564 1.564 0 0 0 1.168-2.6l-.362-.406a9.394 9.394 0 0 1-2.37-6.234v-.918A7.821 7.821 0 0 0 12.525 2.5v-.937A1.562 1.562 0 0 0 10.962 0zm2.213 24.1a3.128 3.128 0 0 0 .914-2.213H7.835a3.13 3.13 0 0 0 5.34 2.213z"
              transform="translate(-.019)"
              style="fill: #01af94"
            />
          </svg>
        </button>
      </div>
    </header>
    <form>
      <label>To do</label>
      <input type="text" placeholder="제목을 입력해주세요." />
      <label>Link</label>
      <input type="link" placeholder="URL을 입력해주세요." />
    </form>
    <router-link to="/" custom v-slot="{ navigate }">
      <button @click="navigate" class="btn-delete">삭제</button>
    </router-link>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import dayjs from "dayjs";
dayjs.locale("ko");
export default {
  name: "AddTodo",
  data() {
    return {};
  },
  computed: {
    ...mapState(["selectedDate"]),
    ...mapGetters(["getSelectedDate"]),
    getYYYYMMDD: function () {
      return dayjs(this.getSelectedDate).format("YYYY.MM.DD");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  height: 100%;
  margin: 0 7%;
  display: flex;
  flex-direction: column;
}
button:hover {
  cursor: pointer;
}
nav {
  margin-top: 3.5rem;
  margin-bottom: 3.7rem;
}

form {
  flex: 1;
}
.btn-prev {
  padding: 0;
  background: transparent;
  border: none;
}
.day {
  display: block;
  font-family: Pretendard;
  font-size: 0.938rem;
  font-weight: 200;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: normal;
  color: var(--green-blue);
}
.second-line {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5.3%;
}
.time {
  display: inline-block;
  font-size: 3rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: normal;
  border: none;
  color: var(--green-blue);
}
input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(48%) sepia(13%) saturate(3207%) hue-rotate(130deg)
    brightness(95%) contrast(80%);
}
.btn-noti {
  border: none;
  background: transparent;
}
.btn-noti svg {
  width: 1.368rem;
  height: 1.563rem;
}
label {
  margin-bottom: 0.5rem;
  display: block;
  font-size: 0.813rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.15;
  letter-spacing: normal;
  color: var(--green-blue);
}
input[type="text"],
input[type="link"] {
  width: 100%;
  margin-bottom: 1.3rem;
  padding: 1rem;
  border-radius: 15px;
  border: solid 0.5px var(--aqua-marine);
  background-color: var(--ice-blue);
  font-size: 1rem;
  font-weight: 600;
  color: var(--green-blue);
}
input::placeholder {
  font-size: 0.875rem;
  font-weight: 200;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: var(--light-grey-blue);
}
input:focus {
  outline-color: var(--green-blue);
}
.btn-delete {
  min-height: 3.188rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  background-color: var(--green-blue);
  color: var(--ice-blue);
  margin-bottom: 3.5rem;
}
</style>
