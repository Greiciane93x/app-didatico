<template>
	<div
		class="v-anim-text"
		:style="{
			'--duration': duration + 's',
			'--delay': delay + 's',
		}"
		:data-direction="direction">
		<div class="-content">
			<slot></slot>
		</div>
	</div>
</template>



<script>
export default {
	name: 'v-anim-text',

	props: {

		duration: {
			type: [Number,String],
			required: false,
			default: 0.5,
		},

		delay: {
			type: [Number,String],
			required: false,
			default: 0,
		},

		direction: {
			type: String,
			required: false,
			default: 'fromBottom',
			validate: val => ['fromBottom', 'fromRight'].includes(val)
		},

	}
}
</script>



<style>
.v-anim-text{

}

.v-anim-text{
	display: inline-flex;
	align-items: center;
	height: 1em;
	overflow: hidden;
	/*background-color: #7a3de7;*/
}
.v-anim-text > .-content{
	display: inline-block;
	animation-duration: var(--duration);
	animation-timing-function: ease;
	animation-delay: var(--delay);
	animation-fill-mode: both;
	white-space: pre;
}
.v-anim-text[data-direction="fromBottom"] > .-content{
	animation-name: --v-anim-text--from-bottom;
}
.v-anim-text[data-direction="fromRight"] > .-content{
	animation-name: --v-anim-text--from-right;
}


@keyframes --v-anim-text--from-bottom {
	0% {
		opacity: 0;
		transform: translateY(90%);
	}
	20%{
		opacity: 0;
	}
	100%{
		opacity: 1;
		transform: translateY(0);
	}
}
@keyframes --v-anim-text--from-right {
	0% {
		opacity: 0;
		transform: translateX(90%);
	}
	20%{
		opacity: 0;
	}
	100%{
		opacity: 1;
		transform: translateX(0);
	}
}
</style>
