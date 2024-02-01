<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="changeMsg">chage msg</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    let message = ref('hello vue3');

    const changeMsg = () => {
      message.value = message.value + '!'
    }
    return {message, changeMsg}
  }
}
</script>

<style lang="scss" scoped>

</style>