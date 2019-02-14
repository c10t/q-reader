import Vue from 'vue';

import ArticleList from './components/ArticleList/ArticleList.vue';
import BulmaSample from './components/BulmaSample.vue';
import { Task } from './store';

export default Vue.extend({
  name: 'app',
  data() {
    return {
      newTaskName: '',
    };
  },
  computed: {
    tasks(): Task[] {
      return this.$store.state.tasks;
    },
  },
  methods: {
    addTask() {
      console.log('add task called');
      this.$store.commit('addTask', { name: this.newTaskName });
      this.newTaskName = '';
    },
    toggleTaskStatus(task: Task) {
      this.$store.commit('toggleTaskStatus', { id: task.id });
    },
  },
});
