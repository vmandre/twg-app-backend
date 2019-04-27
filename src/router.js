import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('./components/products/Products.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/components/cart/Cart.vue'),
    },
  ],
});
