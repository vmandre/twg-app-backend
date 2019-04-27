export default {
  name: 'm-pagination',
  components: {},
  props: ['currentPage'],
  data() {
    return {
      previous: 'disabled',
      totalOfPages: 3, // Total of pages shown on the component,
    };
  },
  computed: {

  },
  mounted() {
    console.log('this.currentPage', this.currentPage);
    this.setupNavigation();
  },
  methods: {
    setupNavigation() {
      if (this.currentPage === 1) {
        this.previous = 'disabled';
      } else {
        this.previous = '';
      }
    },
  },
  watch: {
    // This function is a listener which is executed at the moment the attribute
    // 'currentPage' has the value changed.
    // It's responsable for updating the 'currentPage' value.
    currentPage(value) {
      console.log('watch currentPage', value);
      this.currentPage = value;

      if (this.currentPage > 3) {
        this.totalOfPages = this.currentPage;
      } else {
        this.totalOfPages = 3;
      }

      this.setupNavigation();
    },
  },
};
