<template>
  <div class="home">
    <m-products></m-products>
  </div>
</template>

<script>
// @ is an alias to /src
import Products from '@/components/products/Products.vue';

export default {
  name: 'home',
  components: {
    'm-products': Products,
  },

  data() {
    return {
    };
  },
  methods: {
  },
};
</script>
