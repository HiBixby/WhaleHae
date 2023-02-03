<template>
  <div class="container">
    <nav>
      <router-link to="/" custom v-slot="{ navigate }">
        <button
          @click="SaveAndExit(navigate)"
          class="btn-prev"
          title="저장하고 나가기"
        >
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
        <label for="time" class="screen-reader">시간</label>
        <input v-model="time" type="time" id="time" class="time" />
        <button
          @click="ToggleNoti"
          class="btn-noti"
          :title="noti ? '알림 켜짐' : '알림 꺼짐'"
        >
          <svg
            v-if="noti"
            xmlns="http://www.w3.org/2000/svg"
            width="21.888"
            height="25.014"
            viewBox="0 0 21.888 25.014"
          >
            <path
              d="M10.962 0A1.562 1.562 0 0 0 9.4 1.563V2.5a7.821 7.821 0 0 0-6.254 7.661v.918a9.4 9.4 0 0 1-2.37 6.234l-.362.406a1.564 1.564 0 0 0 1.168 2.6h18.76a1.564 1.564 0 0 0 1.168-2.6l-.362-.406a9.394 9.394 0 0 1-2.37-6.234v-.918A7.821 7.821 0 0 0 12.525 2.5v-.937A1.562 1.562 0 0 0 10.962 0zm2.213 24.1a3.128 3.128 0 0 0 .914-2.213H7.835a3.13 3.13 0 0 0 5.34 2.213z"
              transform="translate(-.019)"
            />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
            <path
              d="M256 32V49.88C328.5 61.39 384 124.2 384 200V233.4C384 278.8 399.5 322.9 427.8 358.4L442.7 377C448.5 384.2 449.6 394.1 445.6 402.4C441.6 410.7 433.2 416 424 416H24C14.77 416 6.365 410.7 2.369 402.4C-1.628 394.1-.504 384.2 5.26 377L20.17 358.4C48.54 322.9 64 278.8 64 233.4V200C64 124.2 119.5 61.39 192 49.88V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32V32zM216 96C158.6 96 112 142.6 112 200V233.4C112 281.3 98.12 328 72.31 368H375.7C349.9 328 336 281.3 336 233.4V200C336 142.6 289.4 96 232 96H216zM288 448C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288z"
            />
          </svg>
        </button>
      </div>
    </header>
    <form>
      <label>To do</label>
      <input
        @input="ChangeTitle"
        :value="title"
        type="text"
        placeholder="제목을 입력해주세요."
      />
      <label>Link</label>
      <input
        @input="ChangeLink"
        :value="link"
        type="url"
        placeholder="URL을 입력해주세요."
      />
    </form>
    <router-link to="/" custom v-slot="{ navigate }">
      <button @click="DeleteAndExit(navigate)" class="btn-delete">삭제</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dayjs from "dayjs";
dayjs.locale("ko");
export default {
  name: "AddTodo",
  setup() {
    document.body.style.backgroundColor = "white";
  },
  data() {
    const selectedDate = this.$store.getters.getSelectedDate;
    const selectedTodo = this.$store.getters.getSelectedTodo;
    let id;
    if (selectedTodo) {
      id = selectedTodo.id;
    } else if (this.$store.getters.getTodos.length !== 0) {
      id = parseInt(this.$store.getters.getTodos.at(-1).id) + 1;
    } else {
      id = 1;
    }
    return {
      dateWithoutTime: new Date(
        selectedDate.getFullYear(),
        selectedDate.getMonth(),
        selectedDate.getDate()
      ),
      id: id,
      time: selectedTodo ? selectedTodo.time : null,
      title: selectedTodo ? selectedTodo.title : null,
      link: selectedTodo ? selectedTodo.link : null,
      noti: selectedTodo ? selectedTodo.noti : true,
      done: selectedTodo ? selectedTodo.done : false,
    };
  },
  methods: {
    ChangeTitle(event) {
      this.title = event.target.value;
    },
    ChangeLink(event) {
      this.link = event.target.value;
    },
    ToggleNoti() {
      this.noti = !this.noti;
    },
    UpdateChromeStorage() {
      //eslint-disable-next-line
      chrome.storage.local
        .set({ todos: this.$store.getters.getTodos })
        .then(() =>
          console.log("value is set to" + this.$store.getters.getTodos)
        );
    },
    SaveAndExit(navigateMain) {
      const addMissingScheme = (url, defaultScheme) => {
        if (!/^(?:f|ht)tps?:\/\//.test(url)) {
          url = defaultScheme + "://" + url;
        }
        return url;
      };

      const time = this.time;
      const hours = time ? parseInt(this.time.slice(0, 2)) : 0;
      const minutes = time ? parseInt(this.time.slice(3)) : 0;
      const todo = {
        id: this.id,
        date: new Date(
          this.$store.getters.getSelectedDate.getFullYear(),
          this.$store.getters.getSelectedDate.getMonth(),
          this.$store.getters.getSelectedDate.getDate(),
          hours,
          minutes,
          0
        ),
        time: this.time,
        title: this.title,
        link: this.link ? addMissingScheme(this.link, "http") : null,
        noti: this.noti,
        done: this.done,
      };
      if (this.$store.getters.getSelectedTodo) {
        console.log(todo);
        this.$store.dispatch("editTodo", todo);
        this.$store.dispatch("setTodos", this.$store.getters.getTodos);
        this.$store.commit("SET_SELECTED_TODO", null);
      } else {
        this.$store.dispatch("addTodo", todo);
        this.$store.dispatch("setTodos", this.$store.getters.getTodos);
      }
      navigateMain();
    },
    DeleteAndExit(Exit) {
      const selectedTodo = this.$store.getters.getSelectedTodo;
      if (selectedTodo) {
        this.$store.dispatch("deleteTodo", selectedTodo.id);
        this.$store.commit("SET_SELECTED_TODO", null);
        this.$store.dispatch("setTodos", this.$store.getters.getTodos);
      }
      Exit();
    },
  },
  computed: {
    ...mapGetters(["getSelectedDate"]),
    getYYYYMMDD: function () {
      return dayjs(this.getSelectedDate).format("YYYY.MM.DD");
    },
    dateOfTodo: function () {
      return this.getSelectedDate.year;
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
  fill: #01af94;
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
input[type="url"] {
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
