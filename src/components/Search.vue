<template>
  <div class="search-container">
    <i class="fas fa-search search-icon"></i>
    <input type="text" @keyup="search" placeholder="input search keyword"/>
  </div>
</template>

<script>
import Actions from './../constants/TodoConstants';

export default {
  name: 'Search',
  methods: {
    search(e) {
      this.$store.commit(Actions.search, e.target.value);
    },
  },
};
</script>

<style scoped>
  .search-container {
    display: block;
    width: 100%;
    margin: 0 auto;
  }

  .search-icon {
    padding-right: 16px;
  }

  input[type="text"] {
    border: 1px solid #333;
    font-size: 1.2em;
    width: 50%;
    min-width: 200px;
    padding: 10px 15px;
    heigth: 30px;
    border-radius: 8px;
  }
</style>
