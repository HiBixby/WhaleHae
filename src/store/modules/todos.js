function CreateAlarm(todo) {
  if (
    todo.date.getTime() > Date.now() &&
    todo.noti === true &&
    todo.done === false &&
    todo.time !== null
  ) {
    console.log("알람 생성 조건에 맞음.");
    try {
      //eslint-disable-next-line
      chrome.alarms.create(todo.id.toString(), {
        when: todo.date.getTime(),
      });
    } catch {
      console.log("chrome.alarms.create를 사용할 수 없음.");
    }
  }
}
function DeleteAlarm(id) {
  try {
    const clearCallback = (wasCleared) => {
      console.log("was cleared : ", wasCleared);
    };
    //eslint-disable-next-line
    chrome.alarms.clear(id.toString(), clearCallback);
  } catch {
    console.log("Chrome.alarm 삭제되지 않음");
  }
}
function SetChromeStorageData(todos) {
  todos.map((todo) => {
    todo.date = todo.date.getTime();
    return todo;
  });
  try {
    //eslint-disable-next-line
    chrome.storage.local
      .set({ todos: todos })
      .then(console.log("value is set to", todos));
  } catch {
    console.log("chrome.storage.local에 저장 불가");
  }
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
      SetChromeStorageData(todos);
    },
    addTodo({ commit }, todo) {
      commit("ADD_TODO", todo);
      CreateAlarm(todo);
    },
    deleteTodo({ commit }, id) {
      commit("DELETE_TODO", id);
      DeleteAlarm(id);
    },
    editTodo({ commit }, newTodo) {
      commit("EDIT_TODO", newTodo);
      DeleteAlarm(newTodo.id);
      CreateAlarm(newTodo);
    },
  },
};
