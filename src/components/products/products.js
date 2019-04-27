import ProductCard from '@/components/product_card/ProductCard.vue';
import Pagination from '@/components/shared/pagination/Pagination.vue';
import HttpService from './productService';

export default {
  name: 'm-products',
  components: {
    'm-product-card': ProductCard,
    'm-pagination': Pagination,
  },
  data() {
    return {
      products: [],
      pageNumber: 1,
    };
  },
  computed: {

  },
  mounted() {
    const productName = this.$route.query.name;
    const { category } = this.$route.query;
    console.log('this.$route.query.name product', productName);
    console.log('this.$route.query.category', category);

    // When this component is created, the product list is load,
    // depending on which param is known.
    if (productName === undefined && category === undefined) {
      this.getAllProducts();
    } else if (category !== undefined) {
      this.getProductsByCategory(category);
    } else if (productName !== undefined) {
      this.getProductsByName(productName);
    }
  },
  created() {
    console.log('created');
  },
  methods: {
    getProductsByName(product) {
      console.log('getProductsByName - product', product);

      try {
        HttpService.getProducts(`page=${this.pageNumber}&name=${product}`)
          .then(({ data }) => {
            console.log('products list', data);
            this.products = data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    getProductsByCategory(categoryName) {
      console.log('getProductsByCategory - category', categoryName);

      try {
        HttpService.getProductsByCategory(`page=${this.pageNumber}&category=${categoryName}`)
          .then(({ data }) => {
            console.log('products list', data);
            this.products = data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    getAllProducts() {
      console.log('getAllProducts');

      try {
        HttpService.getProducts()
          .then(({ data }) => {
            console.log('products list', data);
            this.products = data;
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
