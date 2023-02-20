<template>
  <ul>
    <li v-for="todo in getTodosOfDate" v-bind:key="todo">
      <div class="first-line">
        <label :for="`done__${todo.id}`" class="screen-reader">완료</label>
        <input
          :id="`done__${todo.id}`"
          type="checkbox"
          @click="ToggleDone(todo)"
          :checked="todo.done"
        /><time :class="{ done: todo.done }">
          {{ todo.time ? todo.time : "--:--" }}</time
        >
      </div>
      <div class="second-line">
        <span class="title" :class="{ done: todo.done }" :title="todo.title">{{
          todo.title
        }}</span>
        <div class="button-container">
          <button @click="DeleteTodo(todo)" class="btn-delete" title="삭제">
            <DeleteIcon />
          </button>
          <router-link to="/todo" custom v-slot="{ navigate }">
            <button
              @click="[navigate(), setSelectedTodo(todo)]"
              class="btn-edit"
              title="수정"
            >
              <EditIcon />
            </button>
          </router-link>
          <button
            @click="ToggleNoti(todo)"
            class="btn-noti"
            :title="todo.noti ? '알림 켜짐' : '알림 꺼짐'"
          >
            <NotiOnIcon v-if="todo.noti" />
            <NotiOffIcon v-else />
            <span v-if="todo.noti" class="screen-reader">알림 켜짐</span>
            <span v-else class="screen-reader">알림 꺼짐</span>
          </button>
        </div>
      </div>
      <a
        v-if="todo.link !== null"
        :href="todo.link"
        class="link"
        target="_blank"
        rel="noopener noreferrer"
        >{{ todo.link }}</a
      >
      <a v-else class="link">No Link</a>
      <hr />
    </li>
  </ul>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import EditIcon from "../assets/edit.svg";
import NotiOnIcon from "../assets/noti-on.svg";
import NotiOffIcon from "../assets/noti-off.svg";
import DeleteIcon from "../assets/trash.svg";
dayjs.locale("ko");

export default {
  name: "TodoListComponent",
  components: {
    EditIcon,
    NotiOnIcon,
    NotiOffIcon,
    DeleteIcon,
  },
  data() {
    return {
      done: [],
    };
  },
  methods: {
    setSelectedTodo(todo) {
      this.$store.commit("SET_SELECTED_TODO", todo);
    },
    ToggleDone(todo) {
      todo.done = !todo.done;
      this.$store.dispatch("editTodo", todo);
      this.$store.dispatch("setTodos", this.$store.getters.getTodos);
    },
    ToggleNoti(todo) {
      todo.noti = !todo.noti;
      this.$store.dispatch("editTodo", todo);
      this.$store.dispatch("setTodos", this.$store.getters.getTodos);
    },
    DeleteTodo(todo) {
      if (confirm("정말 삭제하시겠습니까?") == true) {
        this.$store.dispatch("deleteTodo", todo.id);
        this.$store.dispatch("setTodos", this.$store.getters.getTodos);
      }
    },
  },
  computed: {
    ...mapState(["selectedDate", "todos"]),
    ...mapGetters(["getSelectedDate", "getTodosOfDate", "getTodos"]),
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
  width: 100%;
}

@media (any-pointer: coarse) {
  .btn-delete {
    display: inline !important;
  }
}

.btn-delete {
  display: none;
}
li:hover .btn-delete {
  display: inline;
}
input[type="checkbox"] {
  accent-color: var(--green-blue);
}
input[type="checkbox"] {
  cursor: pointer;
}
time {
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 1.2;
  color: var(--green-blue);
}
.done {
  text-decoration: line-through;
  color: #b9b9b9;
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
  color: var(--warm-grey);
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.btn-noti svg {
  fill: var(--green-blue);
  width: 0.984rem;
  height: 1.125rem;
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
  display: inline-block;
  margin: 0;
  font-size: 0.625rem;
  font-weight: 100;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  color: #b9b9b9;
  width: 85%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
hr {
  border: solid 1px var(--light-grey-blue);
}
.btn-add {
  flex: 0;
}
</style>
