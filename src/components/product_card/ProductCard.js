import { mapMutations } from 'vuex';

export default {
  name: 'm-product-card',
  components: {},
  props: ['product'],
  data() {
    return {

    };
  },
  computed: {

  },
  mounted() {

  },
  methods: {
    ...mapMutations(['ADD_CART']),

    addToCart(item) {
      console.log('addToCart', item);
      this.ADD_CART(item);
    },
  },
};
