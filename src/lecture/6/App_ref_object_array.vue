<template>
  <div>

  </div>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  setup () {
    const count = ref(0);
    const state = reactive({
      count
    });
    count.value++;

    // console.log(count.value);
    // console.log(state.count);

    const message = ref('hello');
    const array = reactive([message]);
    console.log(array[0].value);

    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>