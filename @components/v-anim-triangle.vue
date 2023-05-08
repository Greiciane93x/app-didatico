<template>
	<div class="v-anim-triangle">
		<img class="-img" src="../assets/images/triangle-001.svg">
	</div>
</template>



<script>
export default {

	name: 'v-anim-triangle',

	data(){
		return {

		};
	},

}
</script>



<style>
.v-anim-triangle{
	pointer-events: none;
}
.v-anim-triangle > .-img{
	filter: brightness(0) saturate(100%) invert(88%) sepia(18%) saturate(2603%) hue-rotate(193deg) brightness(97%) contrast(86%);
}
</style>
