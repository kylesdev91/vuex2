import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    products: [
      { name: "Banana Skin", price: 20 },
      { name: "Shiny Star", price: 40 },
      { name: "Green Shells", price: 60 },
      { name: "Red Shells", price: 80 },
    ],
  },
  getters: {
    //   saleProducts: (state) => {
    //     var saleProducts = state.products.map((product) => {
    //       return {
    //         name: "***" + product.name + "***",
    //         price: product.price / 2,
    //       };
    //     });
    //     return saleProducts;
    //   },
    // },
  },
  mutations: {
    // 3) mutation is the last step that started with dispatch
    NEW_PRODUCT(state, productItem) {
      state.products.push({
        name: productItem,
      });
    },
    DELETE_PRODUCT(state, productItem) {
      let index = state.products.indexOf(productItem);
      state.products.splice(index, 1);
    },
  },
  // // 3) mutation is the last step that started with dispatch
  // reducePrice: (state, payload) => {
  //   state.products.forEach((product) => {
  //     product.price -= payload;
  //   });
  // },
  actions: {
    // 2) dispatch calls action to commit a mutation
    addNewProduct({ commit }, productItem) {
      commit("NEW_PRODUCT", productItem);
    },
    deleteProduct({ commit }, productItem) {
      commit("DELETE_PRODUCT", productItem);
    },
    // 2) dispatch calls action to commit a mutation
    // reducePrice: (context, payload) => {
    //   setTimeout(function () {
    //     context.commit("reducePrice", payload);
    //   }, 2000);
  },
});
