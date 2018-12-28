import Vuex from 'vuex';
import todoAction from '../constants/TodoConstants';

export default new Vuex.Store({
  state: {
    tasks: [],
    searchText: '',
  },
  mutations: {
    [todoAction.addTask](state, text) {
      const rdm = Math.random().toString(36).slice(-16);
      state.tasks.push({ id: rdm, txt: text, done: false });
    },
    [todoAction.deleteTask](state, id) {
      state.tasks = state.tasks.filter(item => item.id !== id);
    },
    [todoAction.search](state, txt) {
      state.searchText = txt;
    },
    [todoAction.done](state, id) {
      state.tasks = state.tasks.map((item) => {
        if (item.id === id) {
          Object.assign(item, { done: !item.done });
        }
        return item;
      });
    },
  },
});
