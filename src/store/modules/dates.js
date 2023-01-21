export const dates = {
  state: () => ({
    today: new Date(),
    selectedDate: null,
  }),
  mutations: {
    SET_SELECTED_DATE(state, value) {
      state.selectedDate = value;
    },
  },
  getters: {
    getToday(state) {
      return state.today;
    },
    getSelectedDate(state) {
      return state.selectedDate;
    },
  },
  actions: {
    setSelectedDate({ commit }, value) {
      commit("SET_SELECTED_DATE", value);
    },
  },
};
