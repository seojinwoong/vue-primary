<template>
  <div>

  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup () {
    const x = ref(0);
    const y = ref(0);

    // watch(() => x.value + y.value, (sum, oldValue) => {
    //   console.log('sum', sum);
    //   console.log('oldValue', oldValue);
    // })

    // watch([x,y], ([newX, newY], [oldX, oldY]) => {
    //   console.log(`newX : ${newX}`);
    //   console.log(`newY : ${newY}`);
    //   console.log(`oldX : ${oldX}`);
    //   console.log(`oldY : ${oldY}`);
    // })

    const obj = reactive({
      count: 0
    });
    // watch(() => obj.count, (newValue, oldValue) => {
    //   console.log('newValue', newValue)
    // });

    // watch(obj, (newValue, oldValue) => {
    //   console.log('newValue', newValue);
    //   console.log('oldValue', oldValue);
    // })

    const person = reactive({
      name: '홍길동',
      age: 30,
      hobby: '운동',
      obj: {
        count: 0
      }
    });

    // watch(person, (newValue) => {
    //   console.log('newValue', newValue);
    // })

    watch(() => person.obj, (newValue, old) => {
      console.log('newValue', newValue);
      console.log('old', old);
    })


    return {x,y, obj, person}
  }
}
</script>

<style lang="scss" scoped>

</style>