<template>
	<div class="v-copyrights-notice">
		<div class="-text">{{ year }} © Greiciane Araujo de Assis</div>
	</div>
</template>



<script>
export default {

	name: 'v-copyrights-notice',

	data(){
		return {
			year: null,
		};
	},

	beforeMount() {
		this.year = new Date().getFullYear();
	},

}
</script>



<style>
.v-copyrights-notice{
	margin-top: 15em;
	flex: 0 0 auto;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	width: 100%;
	height: auto;
	padding: 8px;
}
.v-copyrights-notice > .-text{
	opacity: 0.4;
	font-size: 16px;
}
</style>
