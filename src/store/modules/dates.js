
export const dates = {
  state: () => ({
    today:new Date(),
    selectedDate: this.today,
  }),
  mutations: {
    setSelectedDate(state, value) {
      state.selectedDate = value;
    }
  },
  getters: {
    todayInfo(state) {
      return state.today;
    }
  },
  actions: {
    changeDate({ commit }, value){
        commit("setSelectedDate", value);
    },
  }
};