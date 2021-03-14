import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    incoming_price: 110,
    justList: ["vue,", "react", "masa", "insta", "fallow"],
    userInfo: {},
  },
  mutations: {
    setIncomingPrice(state, price) {
      state.incoming_price = price
    }
  },
  getters: {
    userPrice(state) {
      return parseFloat(state.incoming_price) + 5;
    }
  },
  actions: {},
  modules: {}
})