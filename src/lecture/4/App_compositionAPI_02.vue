<template>
	<div>{{ counter }}</div>
	<div>{{ message }}</div>
	<button v-on:click="increment">click!!!!</button>
</template>

<script>
import { ref } from 'vue';

export default {
	setup (props, context) {
		const counter = ref(0);
		const message = ref('hello vue3');
		const increment = () => {
			counter.value++;
		}

		return {counter, message, increment}
	}
}
</script>

<style lang="scss" scoped>

</style>