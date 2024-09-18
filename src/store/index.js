import { createStore } from "vuex";

export default createStore({
  state: {
    counter: 0,
  },
  getters: {
    counters(state) {
      return state.counter;
    },
  },
  mutations: {
    SET_COUNTER(state, payload) {
      state.counter = state.counter + payload;
    },
  },
  actions: {
    incrementCounter(context, increment) {
      context.commit("SET_COUNTER", increment);
    },
  },
  modules: {},
});
