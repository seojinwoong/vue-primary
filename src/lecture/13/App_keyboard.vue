<template>
  <div>
    <input type="text" @keyup.enter.exact="addTodo">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
      </li>
    </ul>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  setup () {
    const todos = reactive([]);

    const addTodo = e => {
      todos.push(e.target.value);
      e.target.value = '';
      e.target.focus();
    }

    return {todos, addTodo}
  }
}
</script>

<style lang="scss" scoped>

</style>