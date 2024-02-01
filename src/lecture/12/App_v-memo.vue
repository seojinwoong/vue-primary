<template>
  <div>
    <div v-memo="[]">
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
    <button @click="subscribers++">subscribers ++</button>
    <button @click="views++">views ++</button>
    <button @click="likes++">likes ++</button>

    <div v-memo="[subscribers, views, likes]">
      <p>subscribers: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(200);

    return {subscribers, views, likes}
  }
}
</script>

<style lang="scss" scoped>

</style>