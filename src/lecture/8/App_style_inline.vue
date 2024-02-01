<template>
  <div :style="styleObj">
    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe ad esse nulla molestias totam earum, rem hic amet quas nobis optio iusto soluta ullam ipsum quae placeat quaerat magnam repellat!
  </div>
  <button v-on:click="fontSize--">-</button>
  <button v-on:click="fontSize++">+</button>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup () {
    const fontSize = ref(13);
    const styleObj = computed(() => {
      return {
        color: 'red',
        fontSize: fontSize.value + 'px'
      }
    })

    return {styleObj, fontSize}
  }
}
</script>

<style lang="scss" scoped>

</style>