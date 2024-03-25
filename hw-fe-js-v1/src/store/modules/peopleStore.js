import data from "../../utils/people.json";

//GLOBAL STATE
const state = {};
//MUTATIONS
const mutations = {};
//ACTIONS
const actions = {
  /** Simulate an API call to get the People Data **/
  async getPeople() {
    const delay = 1000;
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, delay);
    });
  },
};
//GETTERS
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
