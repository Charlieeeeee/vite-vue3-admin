import { createStore } from 'vuex';

export default createStore({
  state: {
    users: [
      {
        name: 'charlie',
        age: 25,
      },
      {
        name: 'george',
        age: 22,
      },
    ],
    isFirst: true,
    userInfo: {
      name: 'charlie',
      age: 25,
    }
  },
  mutations: {
    toggleUser(state) {
      state.isFirst = !state.isFirst;
      if (state.isFirst) {
        state.userInfo = state.users[0];
      } else {
        state.userInfo = state.users[1];
      }
    }
  },
  actions: {
  },
  modules: {
  },
});
