<template>
  <div>
    <h2>input value title</h2>
    <input type="text" v-model.lazy.number.trim="inputValue">
    <!-- <input type="text" :value="inputValue" @input="event => inputValue = event.target.value"> -->
    <div>{{ inputValue }}</div>
    <div>{{ typeof inputValue }}</div>

    <hr>
    <h2>textarea value title</h2>
    <textarea v-model="textareaValue"></textarea>
    <div>{{ textareaValue }}</div>

    <hr>

    <h2>checkbox value title</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <!-- <input type="checkbox" id="checkbox" :checked="checkboxValue" @change="event => checkboxValue = event.target.checked"> -->
    <input type="checkbox" id="checkbox" v-model="checkboxValue" true-value="yes" false-value="no">



  <h2>checkbox value title2</h2>
  <label>
    <input type="checkbox" value="html" v-model="checkboxValues">
    html
  </label>
  <label>
    <input type="checkbox" value="css" v-model="checkboxValues">
    css
  </label>
  <label>
    <input type="checkbox" value="js" v-model="checkboxValues">
    js
  </label>
  <p>
    {{ checkboxValues }}
  </p>

  <hr>

  <h2>radio value title</h2>
  <label for="radio">
    <input type="radio" name="type" value="o" v-model="radioValue">
    o형
  </label>
  <label for="radio">
    <input type="radio" name="type" value="a" v-model="radioValue">
    a형
  </label>
  {{ radioValue }}

  <hr>

  <h2>select name</h2>

  <select v-model="selectValue">
    <option value="html">html 수업</option>
    <option value="css">css 수업</option>
    <option value="js">js 수업</option>
  </select>
  <div>
    {{ selectValue }}
  </div>

  </div>

</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const inputValue = ref(null);
    const textareaValue = ref(null);
    const checkboxValue = ref('yes');
    const checkboxValues = ref([]);
    const radioValue = ref('o');
    const selectValue = ref('html')

    return {inputValue, textareaValue, checkboxValue, checkboxValues, radioValue, selectValue}
  }
}
</script>

<style lang="scss" scoped>

</style>