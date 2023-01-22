import { createStore } from "vuex";
import { dates } from "@/store/modules/dates";
import { todos } from "@/store/modules/todos";

export default createStore({
  modules: { dates, todos },
});
