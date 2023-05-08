<template>
	<div class="v-author --ui-not-selectable" title="Greiciane Araujo de Assis">
<!--		<img class="-thumb" src="../assets/images/my_photo_thumb_001.jpeg"/>-->
		<span class="-name">Greiciane Araujo de Assis</span>
	</div>
</template>



<script>
export default {

	name: 'v-author',

}
</script>



<style>
.v-author{
	display: flex;
	flex-direction: row;
	align-items: center;

	gap: 12px;

	height: 40px;
	border-radius: 100px;
	padding: 0 24px 0 6px;
	overflow: hidden;
}
.v-author::before{
	opacity: 0.2;
	pointer-events: none;
	content: '';
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background-color: var(--theme-fg--1);
}
.v-author > .-thumb{
	width: 28px;
	height: 28px;
	object-fit: cover;
	border-radius: 50%;
}
.v-author > .-name{
	font-size: 14px;
}
</style>
