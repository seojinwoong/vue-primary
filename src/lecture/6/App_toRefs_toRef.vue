<template>
  <div>
    <p>author: {{ author }}</p>
    <p>year: {{ year }}</p>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
  setup () {
    const book = reactive({
      author: 'vue team',
      year: '2020',
      title: 'vue 3 guide',
      description: 'vue 3 인증교과서',
      price: '100,000원'
    });

    const { author, year } = toRefs(book);
    return {author, year, book}
  }
}
</script>

<style lang="scss" scoped>

</style>