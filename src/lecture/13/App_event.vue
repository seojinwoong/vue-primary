<template>
  <div>
    <button class="tetx2" @click="printEventInfo('hello vue3', 'mayday', $event)">inline event handler</button>
  </div>
  <hr>
  <input type="text" @keyup="onkeyuphandler">
</template>

<script>
export default {
  setup () {
    const printEventInfo = (message1, message2, event) => {
      console.log('msg1', message1);
      console.log('msg2', message2);
      console.log('event', event.target.className);
    };
    const onkeyuphandler = (e) => {
      console.log(e.key);
    }
    return {printEventInfo, onkeyuphandler}
  }
}
</script>

<style lang="scss" scoped>

</style>