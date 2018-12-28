<template>
  <div class="todolist-container">
    <h1 style="text-align: center">What Do ?</h1>
    <div class="search-area">
      <Search></Search>
    </div>
    <div class="creator-area">
      <TodoCreator></TodoCreator>
    </div>
    <div class="tasklist-area">
      <TaskList :tasks="filtered()"></TaskList>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoCreator from './TodoCreator';
import Search from './Search';
import TaskList from './TaskList';

export default {
  name: 'TodoList',
  components: {
    Search,
    TodoCreator,
    TaskList,
  },
  methods: {
    filtered() {
      return this.tasks.filter(item => item.txt.indexOf(this.$store.state.searchText) > -1);
    },
  },
  computed: mapState({
    tasks: state => state.tasks,
  }),
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .todolist-container {
    width: 50%;
    display:block;
    margin: 0 auto;
  }
  .tasklist-area {
    margin: 0 auto;
    width: 70%;
  }

  .search-area {
    margin: 0 auto 24px auto;
    min-width: 300px;
    width: 40%;
  }
  .creator-area {
    margin: 0 auto 24px auto;
    min-width: 300px;
    width: 40%;
  }
</style>
