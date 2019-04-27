<template>
  <div id="app" class="container">
    <main>
      <m-header
        @searchProduct="searchByProduct"
        @searchCategory="searchByCategory"
      ></m-header>
      <router-view/>
    </main>
    <m-footer></m-footer>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default {
  components: {
    'm-header': Header,
    'm-footer': Footer,
  },
  created() {
    console.log('process.env', process.env);
    console.log('process.env.NODE_ENV', process.env.NODE_ENV);
    console.log('process.env.VUE_APP_API_BASE_URL', process.env.VUE_APP_API_BASE_URL);

    this.getLocalProducts();
  },

  computed:
    mapState(['cartProducts']),

  methods: {
    /* Initially loading the cart products from local storage */
    ...mapMutations(['SET_CART_PRODUCTS']),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem('item-cart'));

      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },


    searchByProduct(productName) {
      console.log('searchByProduct', productName);
      this.$router.push({ path: `/product/?name=${productName}` });
    },
    searchByCategory(categoryName) {
      console.log('searchByCategory - categoryName', categoryName);
      this.$router.push({ path: `/product/?category=${categoryName}` });
    },
  },
};
</script>


<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
