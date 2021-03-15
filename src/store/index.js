import {
  createStore
} from 'vuex'

export default createStore({
  state: {
    incoming_price: 110,
    justList: ["vue,", "react", "masa", "insta", "fallow"],
    userInfo: {},
    productList: [{
      id: 1,
      title: "masa"
    }, {
      id: 2,
      title: "sandalye"
    }],
  },
  mutations: {
    setIncomingPrice(state, price) {
      state.incoming_price = price
    },
    addToList(state, newItem) {
      state.justList.push(newItem);
    },
    addProduct(state, newProduct) {
      state.productList.push(newProduct)
    },
    deleteProduct(state, productId) {
      state.productList = state.productList.filter(y => y.id !== productId)
    }
  },
  getters: {
    userPrice(state) {
      return parseFloat(state.incoming_price) + 5;
    },
    productList: (state) => state.productList,
    productResultBar: (state) => `${state.productList.length} adet ürün vardır`,

  },
  actions: {},
  modules: {}
})