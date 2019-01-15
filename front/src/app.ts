import Vue from 'vue';
import ArticleList from './components/ArticleList/ArticleList.vue';
import BulmaSample from './components/BulmaSample.vue';

export default Vue.extend({
  name: 'app',
  components: {
    ArticleList,
    BulmaSample,
  },
});
