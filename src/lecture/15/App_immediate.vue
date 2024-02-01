<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMsg }}</p>
  </div>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  setup () {
    const message = ref('hello vue3');
    const reverseMsg = ref('');

    const handleReverseMsg = () => {
      console.log('즉시실행');
      reverseMsg.value = message.value.split('').reverse().join('');
    }
    watch(message, handleReverseMsg)
    handleReverseMsg();

    return {message, reverseMsg}
  }
}
</script>

<style lang="scss" scoped>

</style>