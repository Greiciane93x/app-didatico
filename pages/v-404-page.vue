<template>
	<div class="v-404-page --thin-scroll --large">

		<v-page-bg class="-page-bg"></v-page-bg>


		<div class="-main">

			<span class="-not-found --ui-not-selectable">Content not found</span>

			<span class="-four-o-four --ui-not-selectable">404</span>

		</div>


		<v-copyrights-notice class="-copyrights"></v-copyrights-notice>

	</div>
</template>



<script>
import VCopyrightsNotice from "../@components/v-copyrights-notice.vue";
import VPageBg from "../@components/v-page-bg.vue";

export default {

   name: 'v-404-page',

	components: {VPageBg, VCopyrightsNotice},

}
</script>



<style>
.v-404-page{
	--var-h-min-padding: 5vh;

	flex: 1 1 auto;

	display: flex;
	flex-direction: column;
	align-items: stretch;


	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;

	padding: 20vh var(--var-h-min-padding) 0 var(--var-h-min-padding);
}

.v-404-page > .-main{
	display: flex;
	flex-direction: column;
	align-items: center;

	gap: 1em;
}
.v-404-page > .-main > .-not-found{
	font-size: 48px;
	font-weight: 500;
}
.v-404-page > .-main > .-four-o-four{
	font-size: 250px;
	font-weight: 900;
	color: var(--theme-fg--2);
	padding: 0 128px;
}
.v-404-page > .-main > .-four-o-four::before{
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;


	border-radius: 20px;
	box-shadow: inset 0 0 0 6px var(--theme-fg--1);
}

</style>
