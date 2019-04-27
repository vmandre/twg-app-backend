import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const baseURL = 'http://localhost:8000/api/v1';

// Create an instance of axios (a proxy to call backend) and setting the default backend URL
const http = axios.create({
  baseURL,
});

export default new Vuex.Store({
  state: {
    cartProducts: [],
  },
  getters: {
    cartProducts: state => state.cartProducts,
  },

  mutations: {
    ADD_CART: (state, product) => {
      state.cartProducts.push(product);
      localStorage.setItem('item-cart', JSON.stringify(state.cartProducts));
    },

    REMOVE_CART: (state) => {
      localStorage.removeItem('item-cart');
      state.cartProducts = [];
    },

    SET_CART_PRODUCTS: (state, products) => {
      // The next 2 lines below tells to Lint to ignore them
      // eslint-disable-next-line
      state.cartProducts = [];
      // eslint-disable-next-line
      state.cartProducts = products;
    },
  },
  actions: {

  },
});

export { http };
