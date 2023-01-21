export const dates = {
  state: () => ({
    selectedDate: new Date(),
  }),
  mutations: {
    SET_SELECTED_DATE(state, value) {
      state.selectedDate = value;
    },
  },
  getters: {
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
