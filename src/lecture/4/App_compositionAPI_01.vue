<template>
	<div>
		<h2>반응형 메세지</h2>
		<p>{{ reactiveMessage }}</p>
		<button v-on:click="addReactiveMessage">add message</button>
		<h2>일반 메세지</h2>
		<p>{{ normalMessage }}</p>
		<button v-on:click="addNormalMessage">add message</button>
	</div>
</template>

<script>
import { ref, isRef, onMounted, onBeforeMount } from 'vue'
export default {
	setup() {
		console.log('setup')
		const reactiveMessage = ref('hello reactive message')
		let normalMessage = 'hello normal string'
		const addReactiveMessage = () => {
			reactiveMessage.value = reactiveMessage.value + '!'
		}
		// console.log('reacitve', isRef(reactiveMessage))
		// console.log('normalk', isRef(normalMessage))

		const addNormalMessage = () => {
			normalMessage = normalMessage + '?'
		}
		onMounted(() => {
			console.log('onmounted')
		})
		onBeforeMount(() => {
			console.log('before mount')
		})

		return {
			reactiveMessage,
			normalMessage,
			addReactiveMessage,
			addNormalMessage,
		}
	},
}
</script>

<style lang="scss" scoped></style>
