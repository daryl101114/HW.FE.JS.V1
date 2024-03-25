import Vue from "vue";
import Vuex from "vuex";
import peopleStore from "./modules/peopleStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { peopleStore },
});
