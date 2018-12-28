<template>
  <div>
    <i class="fas fa-tasks add-icon"></i>
    <input type="text" @keyup.enter.shift="addTask" placeholder="task add [Shift + Enter]">
    <span class="error" v-if="hasError">入力してちょ</span>
  </div>
</template>

<script>
import Action from './../constants/TodoConstants';

export default {
  name: 'TodoCreator',
  data() {
    return {
      hasError: false,
    };
  },
  methods: {
    addTask(e) {
      if (e.target.value) {
        this.$store.commit(Action.addTask, e.target.value);
        this.hasError = false;
        e.target.value = '';
        return;
      }
      this.hasError = true;
    },
  },
};
</script>

<style scoped>
  .error {
    color: red;
  }

  .add-icon {
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
