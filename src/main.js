// Import CSS
import './assets/scss/app.scss';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(BootstrapVue);


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
