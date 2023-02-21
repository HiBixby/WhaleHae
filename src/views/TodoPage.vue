<template>
  <div class="container">
    <nav>
      <router-link to="/" custom v-slot="{ navigate }">
        <button @click="Exit(navigate)" class="btn-prev" title="뒤로">
          <BackIcon />
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
          <NotiOnIcon v-if="noti" />
          <NotiOffIcon v-else />
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
      <button class="btn-save" @click="SaveAndExit(navigate)">저장</button>
    </router-link>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import dayjs from "dayjs";
import BackIcon from "../assets/back.svg";
import NotiOnIcon from "../assets/noti-on.svg";
import NotiOffIcon from "../assets/noti-off.svg";
dayjs.locale("ko");
export default {
  name: "AddTodo",
  components: {
    BackIcon,
    NotiOnIcon,
    NotiOffIcon,
  },
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
    Exit(navigateMain) {
      const selectedTodo = this.$store.getters.getSelectedTodo;
      const unsavedChanges =
        (this.title !== null && this.title !== selectedTodo?.title) ||
        (this.link !== null && this.link !== selectedTodo?.link) ||
        (this.time !== null && this.time !== selectedTodo?.time) ||
        (this.noti !== true && this.noti !== selectedTodo?.noti);

      if (
        unsavedChanges &&
        !confirm("저장되지 않은 항목이 있습니다. 정말 나가시겠습니까?")
      ) {
        return;
      }

      navigateMain();
      this.$store.commit("SET_SELECTED_TODO", null);
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
.btn-save {
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
