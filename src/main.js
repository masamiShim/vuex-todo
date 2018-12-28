// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import TodoList from './components/TodoList';
import router from './router';
import store from './stores/TodoStore';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { TodoList },
  template: '<TodoList />',
});
