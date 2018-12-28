<template>
  <div class="task-container">
    <span v-if="tasks.length < 1">Congratulations !!</span>
    <ul class="task-list" v-for="task in tasks" :key="task.id">
      <li class="task">
        <i v-if="task.done === false" class="far fa-square done-icon"
           @click="doneTask(task.id)"></i>
        <i v-if="task.done === true" class="far fa-check-square done-icon task-done"
           @click="doneTask(task.id)"></i>
        <span class="task-text">{{task.txt}}</span>
        <i class="fas fa-trash-alt trash" @click="deleteTask(task.id)"></i></li>
    </ul>
  </div>
</template>

<script>

import Action from './../constants/TodoConstants';

export default {
  name: 'TaskList',
  props: ['tasks'],
  methods: {
    deleteTask(id) {
      this.$store.commit(Action.deleteTask, id);
    },
    doneTask(id) {
      this.$store.commit(Action.done, id);
    },
  },
};
</script>

<style scoped>

  .task-container {
    width: 100%;
  }

  .task-list {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .done-icon {
    padding-right: 16px;
    font-size: 1.5em;
  }

  .task-done {
    color: green;
  }

  .trash {
    display: block;
    float: right;
    cursor: pointer;
  }

  .task {
    width: 100%;
    border-bottom: 1px dotted #ddd;
    margin-bottom: 16px;
    padding: 12px;
  }
  @media(max-width: 600px) {
    .task-list{
      float: left;
      display: inline-block;
    }
    .task {
      float:left;
      display: inline-block;
      width: 100%;
      border: 1px solid #ddd;
      border-radius: 20px;
      background-color: white;
      padding: 8px;
    }
    .task-text{
      font-size: 12px;
    }
    .trash {
      font-size: 14px;
    }
    .done-icon {
      font-size: 14px;
    }
  }

</style>
