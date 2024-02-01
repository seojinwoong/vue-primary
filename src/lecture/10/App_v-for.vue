<template>
  <div>
    <ul>
      <li v-for="(item, index) in evenItems" :key="item.id">
        {{ item.message }}
      </li>
    </ul>

    <hr>
    <ul>
      <li v-for="(val, key, idx) in myObj" :key="key">
        {{ idx }} -- {{ key }} -- {{ val }}
      </li>
    </ul>
  </div>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  setup () {
    const items = reactive([
      { id: 1, message: 'hello' },
      { id: 2, message: 'my' },
      { id: 3, message: 'name' },
      { id: 4, message: 'seojinwoong' },
    ]);

    const evenItems = computed(() => items.filter(item => item.id % 2 === 0));

    const myObj = reactive({
      title: '제목',
      author: '홍길동',
      publishedAt: '2016-01-01'
    });

    return {evenItems, myObj}
  }
}
</script>

<style lang="scss" scoped>

</style>