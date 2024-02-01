<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">message change</button>
    <hr>

    <h2>HTML(v-html)</h2>
    <div v-html="rawHTML"></div>
    <hr>

    <h2>속성 바인딩</h2>
    <div v-bind:title="dynamicTITLE">마우스를 올려보세요</div>

    <input type="text" value="홍고기" :disabled="isInputDisabled">
    <input v-bind="attrs" />


    <hr>
    <h2>javascript 표현식</h2>
    {{ message.split('').reverse().join('') }}

    <hr>
    {{ isInputDisabled ? '예' : '아니오' }}
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup () {
    const message = ref('안녕하세요');
    const rawHTML = ref('<strong>안녕하세요!@#@##@</strong>');
    const dynamicTITLE = ref('안녕하세요12312312');
    const isInputDisabled = ref(true);
    const attrs = ref({
      type: 'password',
      value: 123123,
      disabled: true
    })

    return {message ,rawHTML ,dynamicTITLE ,isInputDisabled ,attrs}
  }
}
</script>

<style lang="scss" scoped>

</style>