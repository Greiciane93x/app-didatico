<template>
	<div class="v-tag">
		<div class="-icon"></div>
		<span class="-title">{{ name }}</span>
	</div>
</template>



<script>
export default {

	name: 'v-tag',


	props: {
		name: {
			type: String,
			required: true,
		},
	},

}
</script>



<style>
.v-tag{
	user-select: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 8px;

	height: 40px;

	box-shadow: inset 0 0 0 2px var(--theme-fg--1);
	border-radius: 300px;
	padding: 0 24px 0 10px;
}
.v-tag > .-icon{
	flex: 0 0 auto;
	width: 18px;
	height: 18px;
	border-radius: 50%;
	background-color: var(--theme-fg--1);
}
.v-tag > .-title{
	flex: 1 0 auto;
}
</style>
