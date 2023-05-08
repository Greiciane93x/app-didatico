<template>
	<div class="v-loading-dots">
		<div class="-dot -1"></div>
		<div class="-dot -1"></div>
		<div class="-dot -1"></div>
	</div>
</template>



<script>
export default {
	name: 'v-loading-dots',
}
</script>



<style>
.v-loading-dots{
	--var-dots-size: var(--v-loading-dots--dots-size, 7px);

	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	flex-wrap: nowrap;

	gap: var(--var-dots-size);

}
.v-loading-dots > .-dot{
	height: var(--var-dots-size);
	width: var(--var-dots-size);

	background-color: rgba(255,255,255,0.3);

	border-radius: var(--var-dots-size);

	animation-name: --v-loading-dots--dots-animation;
	animation-iteration-count: infinite;
	animation-fill-mode: both;
	animation-direction: alternate-reverse;
	animation-timing-function: ease;
	animation-duration: 0.3s;

	box-shadow: 1px 1px 0 rgba(0,0,0,0.2);
}
.v-loading-dots > .-dot:nth-child(1){
	animation-delay: 0s;
}
.v-loading-dots > .-dot:nth-child(2){
	animation-delay: 0.1s;
}
.v-loading-dots > .-dot:nth-child(3){
	animation-delay: 0.2s;
}

@keyframes --v-loading-dots--dots-animation {
	0%{
		transform: translateY(50%);
	}
	100%{
		transform: translateY(-50%);
	}
}
</style>
