<template>
  <div>
    <form action="" @submit.prevent>
      <input type="text" v-model.lazy="title" placeholder="title"><br>
      <textarea v-model.lazy="contents" placeholder="contents"></textarea>
    </form>
    <button @click="save(title, contents)">onClick</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue';

export default {
  setup () {
    const title = ref('');
    const contents = ref('');

    const save = (title, contents) => {
      console.log(`저장되었습니다! ${title}제목의 ${contents} 내용!`);
    }

    watchEffect(() => {
      console.log('watchEffect');
      save(title.value, contents.value);
    })

    return {title, contents, save}
  }
}
</script>

<style lang="scss" scoped>

</style>