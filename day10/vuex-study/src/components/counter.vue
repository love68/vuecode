<template>
	<div>
		<input type="button" value="减少" @click="sub" />
		<input type="button" value="增加" @click="add" />
		
		<input type="text" v-model="$store.state.count" />
		<hr />
	</div>
</template>

<script>
export default{
	data() {
		return {};
	},
	methods : {
		add() {
			this.$store.commit("add")
		},
		sub() {
			this.$store.commit("sub",2)
		}
	}
}
</script>

<style>
</style>