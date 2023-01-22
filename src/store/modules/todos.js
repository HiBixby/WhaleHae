export const todos = {
  state: () => ({
    todos: [
      {
        date: new Date(),
        title: "그래픽 편집 디자인 과제 내기",
        link: undefined,
        noti: false,
        done: false,
      },
      {
        date: new Date(),
        title: "그래픽 편집 디자인 과제 내기",
        link: undefined,
        noti: false,
        done: false,
      },
      {
        date: new Date(),
        title: "그래픽 편집 디자인 과제 내기",
        link: undefined,
        noti: false,
        done: false,
      },
    ],
  }),
  mutations: {
    SET_TODOS(state, value) {
      state.todos = value;
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodosOfDate(state, getters, rootState) {
      const selectedDate = rootState.dates.selectedDate;
      return state.todos.filter(
        (todo) =>
          todo.date.getFullYear() === selectedDate.getFullYear() &&
          todo.date.getMonth() === selectedDate.getMonth() &&
          todo.date.getDate() === selectedDate.getDate()
      );
    },
  },
  actions: {
    setTodos({ commit }, value) {
      commit("SET_TODOS", value);
    },
  },
};
