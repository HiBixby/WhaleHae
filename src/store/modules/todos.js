function CreateAlarm(todo) {
  if (
    todo.date.getTime() > Date.now() &&
    todo.noti === true &&
    todo.done === false
  ) {
    try {
      //eslint-disable-next-line
      chrome.alarms.create(todo.id.toString(), {
        when: todo.date.getTime(),
      });
    } catch {
      console.log("알람 생성되지 않음.");
    }
  }
}
function DeleteAlarm(id) {
  //eslint-disable-next-line
  chrome.alarms.clear(id.toString());
}
function SetChromeStorageData(todos) {
  todos.map((todo) => {
    todo.date = todo.date.getTime();
    return todo;
  });
  //eslint-disable-next-line
  chrome.storage.local
    .set({ todos: todos })
    .then(console.log("value is set to", todos));
}

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
      const convertedTodos = state.todos.map((todo) => {
        console.log(new Date(todo.date));
        todo.date = new Date(todo.date);
        return todo;
      });
      const filteredTodos = convertedTodos.filter(
        (todo) =>
          todo.date.getFullYear() === selectedDate.getFullYear() &&
          todo.date.getMonth() === selectedDate.getMonth() &&
          todo.date.getDate() === selectedDate.getDate()
      );
      const sortedTodos = filteredTodos.sort(function (a, b) {
        return a.date - b.date;
      });
      return sortedTodos;
    },
    getSelectedTodo(state) {
      return state.selectedTodo;
    },
  },
  actions: {
    setTodos({ commit }, todos) {
      commit("SET_TODOS", todos);
      try {
        SetChromeStorageData(todos);
      } catch {
        console.log("크롬 스토리지에 저장되지 않음.");
      }
    },
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
      CreateAlarm(todo);
    },
    deleteTodo({ commit }, id) {
      commit("DELETE_TODO", id);
      try {
        DeleteAlarm(id);
      } catch {
        console.log("알람 삭제되지 않음");
      }
    },
    editTodo({ commit }, newTodo) {
      commit("EDIT_TODO", newTodo);
      DeleteAlarm(newTodo.id);
      CreateAlarm(newTodo);
    },
  },
};
