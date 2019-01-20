<template>
	<div>
		<h1>这是 App 组件</h1>
		
		<counter></counter>
		<amount></amount>
		
	</div>
</template>

<script>
	
import amount from './components/amount.vue'
import counter from './components/counter.vue'

export default {
	data() {
		return {};
	},
	methods : {},
	components : {
		amount,
		counter
	}
};
</script>

<style scoped>
	h1 {
		color: palegreen;
	}
</style>