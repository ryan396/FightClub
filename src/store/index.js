import { createStore } from "vuex";
import encounter from "./modules/encounter";

export default createStore({
  modules: {
    encounter,
  },
});
