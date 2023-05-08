<template>
	<div class="v-root">

		<router-view class="-route"></router-view>

	</div>
</template>



<script>
export default {
   name: 'v-root',
}
</script>



<style>
.v-root{

	/**
	 * Material colors
	 */

	/* Red */
	/*--m-red-50: #FFEBEE;*/
	/*--m-red-100: #FFCDD2;*/
	/*--m-red-200: #EF9A9A;*/
	--m-red-300: #E57373;
	--m-red-400: #EF5350;
	--m-red-500: #F44336;
	/*--m-red-600: #E53935;*/
	/*--m-red-700: #D32F2F;*/
	--m-red-800: #C62828;
	/*--m-red-900: #B71C1C;*/
	/*--m-red-a100: #FF8A80;*/
	/*--m-red-a200: #FF5252;*/
	--m-red-a400: #FF1744;
	--m-red-a700: #D50000;

	/* Pink */
	/*--m-pink-50: #FCE4EC;*/
	/*--m-pink-100: #F8BBD0;*/
	/*--m-pink-200: #F48FB1;*/
	/*--m-pink-300: #F06292;*/
	/*--m-pink-400: #EC407A;*/
	/*--m-pink-500: #E91E63;*/
	/*--m-pink-600: #D81B60;*/
	/*--m-pink-700: #C2185B;*/
	/*--m-pink-800: #AD1457;*/
	/*--m-pink-900: #880E4F;*/
	/*--m-pink-a100: #FF80AB;*/
	/*--m-pink-a200: #FF4081;*/
	/*--m-pink-a400: #F50057;*/
	/*--m-pink-a700: #C51162;*/

	/* Purple */
	/*--m-purple-50: #F3E5F5;*/
	/*--m-purple-100: #E1BEE7;*/
	/*--m-purple-200: #CE93D8;*/
	/*--m-purple-300: #BA68C8;*/
	/*--m-purple-400: #AB47BC;*/
	/*--m-purple-500: #9C27B0;*/
	/*--m-purple-600: #8E24AA;*/
	/*--m-purple-700: #7B1FA2;*/
	/*--m-purple-800: #6A1B9A;*/
	/*--m-purple-900: #4A148C;*/
	/*--m-purple-a100: #EA80FC;*/
	/*--m-purple-a200: #E040FB;*/
	/*--m-purple-a400: #D500F9;*/
	/*--m-purple-a700: #AA00FF;*/

	/* Deep Purple */
	/*--m-deep-purple-50: #EDE7F6;*/
	/*--m-deep-purple-100: #D1C4E9;*/
	/*--m-deep-purple-200: #B39DDB;*/
	/*--m-deep-purple-300: #9575CD;*/
	/*--m-deep-purple-400: #7E57C2;*/
	/*--m-deep-purple-500: #673AB7;*/
	/*--m-deep-purple-600: #5E35B1;*/
	/*--m-deep-purple-700: #512DA8;*/
	/*--m-deep-purple-800: #4527A0;*/
	/*--m-deep-purple-900: #311B92;*/
	/*--m-deep-purple-a100: #B388FF;*/
	/*--m-deep-purple-a200: #7C4DFF;*/
	/*--m-deep-purple-a400: #651FFF;*/
	/*--m-deep-purple-a700: #6200EA;*/

	/* Indigo */
	/*--m-indigo-50: #E8EAF6;*/
	/*--m-indigo-100: #C5CAE9;*/
	/*--m-indigo-200: #9FA8DA;*/
	/*--m-indigo-300: #7986CB;*/
	/*--m-indigo-400: #5C6BC0;*/
	/*--m-indigo-500: #3F51B5;*/
	/*--m-indigo-600: #3949AB;*/
	/*--m-indigo-700: #303F9F;*/
	/*--m-indigo-800: #283593;*/
	/*--m-indigo-900: #1A237E;*/
	/*--m-indigo-a100: #8C9EFF;*/
	/*--m-indigo-a200: #536DFE;*/
	/*--m-indigo-a400: #3D5AFE;*/
	/*--m-indigo-a700: #304FFE;*/

	/* Blue */
	/*--m-blue-50: #E3F2FD;*/
	/*--m-blue-100: #BBDEFB;*/
	/*--m-blue-200: #90CAF9;*/
	/*--m-blue-300: #64B5F6;*/
	/*--m-blue-400: #42A5F5;*/
	/*--m-blue-500: #2196F3;*/
	--m-blue-600: #1E88E5;
	--m-blue-700: #1976D2;
	/*--m-blue-800: #1565C0;*/
	/*--m-blue-900: #0D47A1;*/
	/*--m-blue-a100: #82B1FF;*/
	/*--m-blue-a200: #448AFF;*/
	/*--m-blue-a400: #2979FF;*/
	/*--m-blue-a700: #2962FF;*/

	/* Light Blue */
	/*--m-light-blue-50: #E1F5FE;*/
	/*--m-light-blue-100: #B3E5FC;*/
	/*--m-light-blue-200: #81D4FA;*/
	/*--m-light-blue-300: #4FC3F7;*/
	/*--m-light-blue-400: #29B6F6;*/
	/*--m-light-blue-500: #03A9F4;*/
	/*--m-light-blue-600: #039BE5;*/
	/*--m-light-blue-700: #0288D1;*/
	/*--m-light-blue-800: #0277BD;*/
	/*--m-light-blue-900: #01579B;*/
	/*--m-light-blue-a100: #80D8FF;*/
	/*--m-light-blue-a200: #40C4FF;*/
	--m-light-blue-a400: #00B0FF;
	/*--m-light-blue-a700: #0091EA;*/

	/* Cyan */
	/*--m-cyan-50: #E0F7FA;*/
	/*--m-cyan-100: #B2EBF2;*/
	/*--m-cyan-200: #80DEEA;*/
	/*--m-cyan-300: #4DD0E1;*/
	/*--m-cyan-400: #26C6DA;*/
	/*--m-cyan-500: #00BCD4;*/
	/*--m-cyan-600: #00ACC1;*/
	/*--m-cyan-700: #0097A7;*/
	/*--m-cyan-800: #00838F;*/
	/*--m-cyan-900: #006064;*/
	/*--m-cyan-a100: #84FFFF;*/
	/*--m-cyan-a200: #18FFFF;*/
	/*--m-cyan-a400: #00E5FF;*/
	/*--m-cyan-a700: #00B8D4;*/

	/* Teal */
	/*--m-teal-50: #E0F2F1;*/
	/*--m-teal-100: #B2DFDB;*/
	/*--m-teal-200: #80CBC4;*/
	/*--m-teal-300: #4DB6AC;*/
	/*--m-teal-400: #26A69A;*/
	/*--m-teal-500: #009688;*/
	/*--m-teal-600: #00897B;*/
	/*--m-teal-700: #00796B;*/
	/*--m-teal-800: #00695C;*/
	/*--m-teal-900: #004D40;*/
	/*--m-teal-a100: #A7FFEB;*/
	/*--m-teal-a200: #64FFDA;*/
	/*--m-teal-a400: #1DE9B6;*/
	/*--m-teal-a700: #00BFA5;*/

	/* Green */
	/*--m-green-50: #E8F5E9;*/
	/*--m-green-100: #C8E6C9;*/
	/*--m-green-200: #A5D6A7;*/
	/*--m-green-300: #81C784;*/
	/*--m-green-400: #66BB6A;*/
	/*--m-green-500: #4CAF50;*/
	/*--m-green-600: #43A047;*/
	/*--m-green-700: #388E3C;*/
	/*--m-green-800: #2E7D32;*/
	/*--m-green-900: #1B5E20;*/
	/*--m-green-a100: #B9F6CA;*/
	/*--m-green-a200: #69F0AE;*/
	--m-green-a400: #00E676;
	--m-green-a700: #00C853;

	/* Light Green */
	/*--m-light-green-50: #F1F8E9;*/
	/*--m-light-green-100: #DCEDC8;*/
	/*--m-light-green-200: #C5E1A5;*/
	/*--m-light-green-300: #AED581;*/
	/*--m-light-green-400: #9CCC65;*/
	/*--m-light-green-500: #8BC34A;*/
	/*--m-light-green-600: #7CB342;*/
	/*--m-light-green-700: #689F38;*/
	/*--m-light-green-800: #558B2F;*/
	/*--m-light-green-900: #33691E;*/
	/*--m-light-green-a100: #CCFF90;*/
	/*--m-light-green-a200: #B2FF59;*/
	/*--m-light-green-a400: #76FF03;*/
	/*--m-light-green-a700: #64DD17;*/

	/* Lime */
	/*--m-lime-50: #F9FBE7;*/
	/*--m-lime-100: #F0F4C3;*/
	/*--m-lime-200: #E6EE9C;*/
	/*--m-lime-300: #DCE775;*/
	/*--m-lime-400: #D4E157;*/
	/*--m-lime-500: #CDDC39;*/
	/*--m-lime-600: #C0CA33;*/
	/*--m-lime-700: #AFB42B;*/
	/*--m-lime-800: #9E9D24;*/
	/*--m-lime-900: #827717;*/
	/*--m-lime-a100: #F4FF81;*/
	/*--m-lime-a200: #EEFF41;*/
	/*--m-lime-a400: #C6FF00;*/
	/*--m-lime-a700: #AEEA00;*/

	/* Yellow */
	/*--m-yellow-50: #FFFDE7;*/
	/*--m-yellow-100: #FFF9C4;*/
	/*--m-yellow-200: #FFF59D;*/
	/*--m-yellow-300: #FFF176;*/
	/*--m-yellow-400: #FFEE58;*/
	/*--m-yellow-500: #FFEB3B;*/
	/*--m-yellow-600: #FDD835;*/
	/*--m-yellow-700: #FBC02D;*/
	/*--m-yellow-800: #F9A825;*/
	/*--m-yellow-900: #F57F17;*/
	/*--m-yellow-a100: #FFFF8D;*/
	/*--m-yellow-a200: #FFFF00;*/
	/*--m-yellow-a400: #FFEA00;*/
	/*--m-yellow-a700: #FFD600;*/

	/* Amber */
	/*--m-amber-50: #FFF8E1;*/
	/*--m-amber-100: #FFECB3;*/
	/*--m-amber-200: #FFE082;*/
	/*--m-amber-300: #FFD54F;*/
	/*--m-amber-400: #FFCA28;*/
	/*--m-amber-500: #FFC107;*/
	/*--m-amber-600: #FFB300;*/
	/*--m-amber-700: #FFA000;*/
	/*--m-amber-800: #FF8F00;*/
	/*--m-amber-900: #FF6F00;*/
	/*--m-amber-a100: #FFE57F;*/
	/*--m-amber-a200: #FFD740;*/
	/*--m-amber-a400: #FFC400;*/
	/*--m-amber-a700: #FFAB00;*/

	/* Orange */
	/*--m-orange-50: #FFF3E0;*/
	/*--m-orange-100: #FFE0B2;*/
	/*--m-orange-200: #FFCC80;*/
	/*--m-orange-300: #FFB74D;*/
	/*--m-orange-400: #FFA726;*/
	/*--m-orange-500: #FF9800;*/
	/*--m-orange-600: #FB8C00;*/
	/*--m-orange-700: #F57C00;*/
	/*--m-orange-800: #EF6C00;*/
	/*--m-orange-900: #E65100;*/
	/*--m-orange-a100: #FFD180;*/
	/*--m-orange-a200: #FFAB40;*/
	/*--m-orange-a400: #FF9100;*/
	/*--m-orange-a700: #FF6D00;*/

	/* Deep Orange */
	/*--m-deep-orange-50: #FBE9E7;*/
	/*--m-deep-orange-100: #FFCCBC;*/
	/*--m-deep-orange-200: #FFAB91;*/
	/*--m-deep-orange-300: #FF8A65;*/
	/*--m-deep-orange-400: #FF7043;*/
	/*--m-deep-orange-500: #FF5722;*/
	/*--m-deep-orange-600: #F4511E;*/
	/*--m-deep-orange-700: #E64A19;*/
	/*--m-deep-orange-800: #D84315;*/
	/*--m-deep-orange-900: #BF360C;*/
	/*--m-deep-orange-a100: #FF9E80;*/
	/*--m-deep-orange-a200: #FF6E40;*/
	/*--m-deep-orange-a400: #FF3D00;*/
	/*--m-deep-orange-a700: #DD2C00;*/

	/* Brown */
	/*--m-brown-50: #EFEBE9;*/
	/*--m-brown-100: #D7CCC8;*/
	/*--m-brown-200: #BCAAA4;*/
	/*--m-brown-300: #A1887F;*/
	/*--m-brown-400: #8D6E63;*/
	/*--m-brown-500: #795548;*/
	/*--m-brown-600: #6D4C41;*/
	/*--m-brown-700: #5D4037;*/
	/*--m-brown-800: #4E342E;*/
	/*--m-brown-900: #3E2723;*/

	/* Gray */
	--m-gray-50: #FAFAFA;
	--m-gray-100: #F5F5F5;
	--m-gray-200: #EEEEEE;
	--m-gray-300: #E0E0E0;
	--m-gray-400: #BDBDBD;
	--m-gray-500: #9E9E9E;
	--m-gray-600: #757575;
	--m-gray-700: #616161;
	--m-gray-800: #424242;
	--m-gray-900: #212121;

	/* Blue Gray */
	/*--m-blue-gray-50: #ECEFF1;*/
	/*--m-blue-gray-100: #CFD8DC;*/
	/*--m-blue-gray-200: #B0BEC5;*/
	/*--m-blue-gray-300: #90A4AE;*/
	/*--m-blue-gray-400: #78909C;*/
	/*--m-blue-gray-500: #607D8B;*/
	/*--m-blue-gray-600: #546E7A;*/
	/*--m-blue-gray-700: #455A64;*/
	/*--m-blue-gray-800: #37474F;*/
	/*--m-blue-gray-900: #263238;*/

	/* Black */
	--m-black: #000000;

	/* White */
	--m-white: #FFFFFF;







	--m-grey-50: var(--m-gray-50);
	--m-grey-100: var(--m-gray-100);
	--m-grey-200: var(--m-gray-200);
	--m-grey-300: var(--m-gray-300);
	--m-grey-400: var(--m-gray-400);
	--m-grey-500: var(--m-gray-500);
	--m-grey-600: var(--m-gray-600);
	--m-grey-700: var(--m-gray-700);
	--m-grey-800: var(--m-gray-800);
	--m-grey-900: var(--m-gray-900);





	--transparent-black: rgba(0,0,0,0.06);

	--theme-fg--1: #222222;
	--theme-fg--2: #222222;

	--theme-bg--1: #FFFCF1;
	--theme-bg--2: #FFF4CB;
	--theme-bg--3: #F8CE39;



	/**
	 * Theme colors
	 */
	/* Blank */
	--blank-bg--base: var(--theme-bg--1);
	--blank-bg--1: var(--blank-bg--base);
	--blank-bg--2: var(--m-grey-900);
	--blank-fg--base: var(--m-grey-100);
	--blank-ic--base: var(--m-grey-600);

	/* Accent */
	--accent-bg--base: var(--m-blue-600);
	--accent-bg--1: var(--m-blue-600);
	--accent-bg--2: var(--m-blue-600);
	--accent-fg--base: var(--m-grey-50);
	--accent-ic--base: var(--m-grey-200);

	/* Links */
	--link-fg: var(--m-blue-600);
	--link-fg--visited: var(--m-blue-600);

	/* Text selection */
	--selection-bg: var(--accent-bg--base);
	--selection-fg: var(--accent-fg--base);

	--sep-border-color: var(--m-grey-800);

	--border-radius--small: 6px;
	--border-radius--large: 10px;



	display: flex;
	flex-direction: column;

	width: 100%;
	height: 100%;

	background-image: linear-gradient(to bottom, var(--theme-bg--1), var(--theme-bg--2));
	color: var(--theme-fg--1);

	font-family: 'Roboto', sans-serif;
	font-size: 16px;
	/*letter-spacing: 0.07em;*/
	-webkit-font-smoothing: antialiased;

	overflow: hidden;
	scroll-behavior: smooth;
}
html, body, #app{
	width: 100%;
	height: 100%;
}



/**
 * Material icons
 */
.v-root .material-icons{
	color: var(--blank-ic--base);
   font-display: swap;
}



/**
 * Links
 */
.v-root a:link{
   color: var(--link-fg);
} .v-root a:visited{
   color: var(--link-fg--visited);
}



/**
 * Text selection
 */
.v-root ::selection{
   background-color: var(--selection-bg);
   color: var(--selection-fg);
   text-shadow: inherit;
}



.v-root .--thin-scroll{
	scrollbar-width: thin;
}
.v-root .--thin-scroll::-webkit-scrollbar-track{
	border-radius: 7px;
	background-color: #363636;
}
.v-root .--thin-scroll::-webkit-scrollbar{
	width: 7px;
	height: 7px;
}
.v-root .--thin-scroll::-webkit-scrollbar-thumb{
	border-radius: 7px;
	background-color: rgba(255,255,255,0.15);
}


.v-root .--thin-scroll.--large::-webkit-scrollbar-track{
	border-radius: 12px;
}
.v-root .--thin-scroll.--large::-webkit-scrollbar{
	width: 12px;
	height: 12px;
}
.v-root .--thin-scroll.--large::-webkit-scrollbar-thumb{
	border-radius: 12px;
}



.v-root .--h-sep{
	width: 100%;
	height: 1px;
	background-color: rgba(255,255,255,0.1);
}

.v-root .--v-sep{
	width: 1px;
	height: 100%;
	background-color: rgba(255,255,255,0.1);
}

.v-root > .-route{
	transition: opacity 0.3s ease;
}
.v-root > .-route.--page-transition-enter-active{
	opacity: 0;
}
.v-root > .-route.--page-transition-leave-active{
	opacity: 0;
}

.v-root .v-button{
	--v-button--bg--hover: rgba(255,255,255,0.1);
	--v-button--bg--active: rgba(255,255,255,0.3);
	--v-button--border-size: 2px;
}
.v-root .v-text-field{
	--v-text-field--bg--hover: rgba(255,255,255,0.1);
	--v-text-field--fg: var(--m-grey-100);
}

.v-root .--dropdown-box{
	background-color: #202020;
	border-radius: var(--border-radius--large);
	border: 2px solid #262626;
	box-shadow: 2px 4px 16px 0 rgba(0,0,0,0.25);
}


.v-root .--ui-label{
	pointer-events: none;
	user-select: none;
}
.v-root .--ui-not-interactable{
	pointer-events: none;
}
.v-root .--ui-not-selectable{
	user-select: none;
}

</style>
