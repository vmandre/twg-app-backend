import { mapState, mapMutations } from 'vuex';
import HttpService from './headerService';

export default {
  name: 'm-header',
  components: {
  },
  props: [],
  data() {
    return {
      productSearch: null,
      categories: [],
    };
  },
  computed:
    mapState(['cartProducts']),
  mounted() {
  },
  created() {
    this.getAllCategories();
  },
  methods: {
    ...mapMutations(['SET_CART_PRODUCTS']),

    getLocalProducts() {
      const products = JSON.parse(localStorage.getItem('item-cart'));

      if (products) {
        this.SET_CART_PRODUCTS(products);
      }
    },

    getAllCategories() {
      console.log('getAllCategories');

      // Calls a service from the backend for retrieving the categories
      try {
        HttpService.getCategories()
          .then(({ data }) => {
            console.log('categories list', data);
            this.categories = data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    requestPage(index) {
      console.log('requestPage is working. index', index);
      this.pageNumber = index;
      this.getAllProducts();
    },
  },
};
