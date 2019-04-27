import { mapState, mapMutations } from 'vuex';

export default {
  name: 'cart',
  components: { },
  data() {
    return {
      totalValue: 0.0,
    };
  },
  computed: mapState(['cartProducts']),
  methods: {
    /* Resetting the store and localstorage after removing product from cart */
    ...mapMutations(['SET_CART_PRODUCTS', 'REMOVE_CART']),

    // When the user removes an item from the cart,
    // it's necessary remove it from the localStorage
    removeProductCart(product) {
      const products = JSON.parse(localStorage.getItem('item-cart'));

      // The line bellow tells to Lint to ignore the 'unary operator' validation
      // eslint-disable-next-line
      for (let i = 0; i < products.length; i++) {

        // The line bellow tells to Lint to ignore the underscore validation
        // eslint-disable-next-line
        if (products[i]._id === product._id) {
          // Rearrange the vector items
          products.splice(i, 1);
        }
      }
      this.SET_CART_PRODUCTS(products);
      localStorage.setItem('item-cart', JSON.stringify(products));
      this.calulateTotalPrice();
    },

    // Sum all products on the cart
    calulateTotalPrice() {
      this.totalValue = 0;
      if (this.cartProducts.length > 0) {
        this.cartProducts.forEach((product) => {
          this.totalValue += product.price;
        });
      }
    },
    finishSale() {
      console.log('finishSale');

      // Remove all products from the cart and localStore.
      this.REMOVE_CART();

      this.totalValue = 0.0;

      // Go to the main page
      this.$router.replace({ path: '/' });
    },
  },
  created() {
    this.calulateTotalPrice();
  },
  mounted() {},
};
