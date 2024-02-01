<template>
  <div>

  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup () {
    const message = ref('');

    watch(message, (newValue, oldValue) => {
      console.log('old', oldValue);
      console.log('new', newValue);
    })

    return { message }
  }
}
</script>

<style lang="scss" scoped>

</style>