export const todos = {
  state: () => ({
    todos: [],
    selectedTodo: null,
  }),
  mutations: {
    SET_TODOS(state, todos) {
      state.todos = todos;
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo);
    },
    DELETE_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    EDIT_TODO(state, newTodo) {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === newTodo.id) {
          state.todos[i] = newTodo;
          break;
        }
      }
    },
    SET_SELECTED_TODO(state, value) {
      state.selectedTodo = value;
    },
  },
  getters: {
    getTodos(state) {
      return state.todos;
    },
    getTodosOfDate(state, getters, rootState) {
      const selectedDate = rootState.dates.selectedDate;
      return state.todos
        .filter(
          (todo) =>
            todo.date.getFullYear() === selectedDate.getFullYear() &&
            todo.date.getMonth() === selectedDate.getMonth() &&
            todo.date.getDate() === selectedDate.getDate()
        )
        .sort(function (a, b) {
          return a.date - b.date;
        });
    },
    getSelectedTodo(state) {
      return state.selectedTodo;
    },
  },
  actions: {
    setTodos({ commit }, value) {
      commit("SET_TODOS", value);
    },
    addTodo({ commit }, value) {
      commit("ADD_TODO", value);
    },
  },
};
