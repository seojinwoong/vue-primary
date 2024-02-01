<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture2() }}</p>
    <p>{{ hasLecture2() }}</p>
    <button v-on:click="counter++">Counter: {{ counter }}</button>
    <h4>이름</h4>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup () {
    const teacher = reactive({
      name: "짐코딩",
      lectures: [
        'html/css',
        'js',
        'vue3'
      ]
    });
    const hasLecture = computed(() => {
      console.log('computed');
      return teacher.lectures.length > 0 ? 'YES' : 'No'
    });
    const hasLecture2 = () => {
      console.log('method');
      return teacher.lectures.length > 0 ? 'YES' : 'No'
    }
    const counter = ref(0);

    const firstName = ref('홍');
    const lastName = ref('길동');
    const fullName = computed({
      get() {
        return firstName.value + " " + lastName.value
      },
      set(value){
        [firstName.value, lastName.value] = value.split(' ');
      }
    });

    fullName.value = '짐 코딩';
    

    return {teacher, hasLecture, hasLecture2, counter, fullName}
  }
}
</script>

<style lang="scss" scoped>

</style>