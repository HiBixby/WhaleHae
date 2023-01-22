<template>
  <ul>
    <li v-for="todo in getTodosOfDate" v-bind:key="todo">
      <div class="first-line">
        <input type="checkbox" /><time>{{
          todo.date.toLocaleTimeString([], {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })
        }}</time>
      </div>
      <div class="second-line">
        <span class="title">{{ todo.title }}</span>
        <div class="button-container">
          <router-link to="/todo" custom v-slot="{ navigate }">
            <button @click="navigate" class="btn-edit">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
              >
                <path
                  id="패스_5"
                  data-name="패스 5"
                  d="M16.752,5.858a1.987,1.987,0,0,0-2.813,0L12.87,6.924,16.347,10.4l1.069-1.069a1.987,1.987,0,0,0,0-2.813ZM6.124,13.673a1.963,1.963,0,0,0-.48.778L4.593,17.606a.857.857,0,0,0,.206.874.846.846,0,0,0,.874.206l3.154-1.051a2.057,2.057,0,0,0,.778-.48l5.943-5.946L12.067,7.727ZM3.41,7.361A3.411,3.411,0,0,0,0,10.771v9.094a3.411,3.411,0,0,0,3.41,3.41H12.5a3.411,3.411,0,0,0,3.41-3.41v-3.41a1.137,1.137,0,0,0-2.273,0v3.41A1.135,1.135,0,0,1,12.5,21H3.41a1.135,1.135,0,0,1-1.137-1.137V10.771A1.135,1.135,0,0,1,3.41,9.634H6.82a1.137,1.137,0,1,0,0-2.273Z"
                  transform="translate(0 -5.275)"
                  fill="#01af94"
                />
              </svg>
            </button>
          </router-link>
          <button class="btn-noti">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15.75"
              height="18"
              viewBox="0 0 15.75 18"
            >
              <path
                id="패스_48"
                data-name="패스 48"
                d="M7.893,0A1.124,1.124,0,0,0,6.768,1.125V1.8a5.628,5.628,0,0,0-4.5,5.513v.661A6.766,6.766,0,0,1,.563,12.459l-.26.292a1.125,1.125,0,0,0,.84,1.874h13.5a1.125,1.125,0,0,0,.84-1.874l-.26-.292a6.76,6.76,0,0,1-1.705-4.486V7.313A5.628,5.628,0,0,0,9.018,1.8V1.125A1.124,1.124,0,0,0,7.893,0ZM9.486,17.343a2.251,2.251,0,0,0,.657-1.593h-4.5a2.252,2.252,0,0,0,3.843,1.593Z"
                transform="translate(-0.019)"
                fill="#01af94"
              />
            </svg>
          </button>
        </div>
      </div>
      <p class="link">{{ todo.link ? todo.link : "No Link" }}</p>
      <hr />
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

export default {
  name: "TodoList",

  computed: {
    ...mapState(["selectedDate", "todos"]),
    ...mapGetters(["getSelectedDate", "getTodosOfDate"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
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
  padding: 0 0.4rem;
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
