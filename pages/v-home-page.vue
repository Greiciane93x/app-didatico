<template>
	<div class="v-home-page --thin-scroll --large">

		<div class="-photo">
			<img class="-img" src="https://cdn.awsli.com.br/600x450/18/18885/produto/102523124/6ba7072878.jpg"/>
		</div>

		<div class="-challenge" ref="challenge">
			<div class="-letter" v-for="letter in currentChallenge.incorrect">
				<input class="-gap" type="text" maxlength="1" v-if="letter === '_'">
				<span class="-filled" v-else>{{ letter }}</span>
			</div>
		</div>

		<div class="-space"></div>

		<div class="-controls">
			<v-button class="-control -text-to-speech" icon="record_voice_over" @click="textToSpeech_onClick" round
						 dont-focus-on-click></v-button>
			<v-button class="-control -confirm" ref="confirm" text="Confirmar" @click="confirm_onClick" capsule uppercase
						 dont-focus-on-click></v-button>
		</div>

	</div>
</template>


<script>
import VButton from "../@components/v-button.vue";
import VTextField2 from "../@components/v-text-field-2.vue";
import VAnimText from "../@components/v-anim-text.vue";
import {mapGetters, mapState} from "vuex";
import VSeparator from "../@components/v-separator.vue";
import VTag from "../@components/v-tag.vue";
import VBlogPostListItem from "../@components/v-blog-post-list-item.vue";
import VCopyrightsNotice from "../@components/v-copyrights-notice.vue";
import VAnimTriangle from "../@components/v-anim-triangle.vue";
import VPageBg from "../@components/v-page-bg.vue";

export default {

	name: 'v-home-page',


	components: {VButton},


	data() {
		return {};
	},


	computed: {
		...mapGetters('ChallengesStore', ['currentChallenge'])
	},


	mounted() {
		const inputs = this.$refs.challenge.querySelectorAll('.-letter > .-gap');
		inputs[0].focus();
		for (let i = 0; i < inputs.length; i++) {
			const input = inputs[i];
			const nextInput = inputs[i + 1];
			input.addEventListener('input', e => {
				if (!e.data?.length)
					return;
				if (nextInput) {
					nextInput.focus();
					return;
				}
				this.$refs.confirm.focus();
			})
		}
	},

	methods: {


		textToSpeech_onClick() {


		},

		confirm_onClick() {
			const currentChallenge = this.currentChallenge;
			console.log(currentChallenge);

			const inputs = [...this.$refs.challenge.querySelectorAll('.-letter > .-gap')];

			console.log(inputs)

			const typeLetters = inputs.map(input => input.value);

			console.log(typeLetters)
			this.isValid(typeLetters, currentChallenge.correct, currentChallenge.incorrect)

		},

		/**
		 *
		 * @param {string[]} typedLetters
		 * @param {string} correct
		 * @param {string} incorrect
		 * @returns {boolean}
		 */
		isValid(typedLetters, correct, incorrect) {
			incorrect = [...incorrect];

			console.log("typedLetters", typedLetters)
			console.log("correct", correct)
			console.log("incorrect", incorrect)

			let aux=0;

			for(let i = 0; i < incorrect.length; i++){
				if(incorrect[i] == '_'){
					incorrect[i] = typedLetters[aux]
					aux++;
				}
			}
			console.log(incorrect)

			if(incorrect.join('') == correct){
				console.log("true")
				return true
			}else{
				console.log("false")
				return false
			}
		}
	},


}
</script>


<style>
.v-home-page {

	--var-h-padding: 32px;


	display: flex;
	flex-direction: column;
	align-items: center;

	overflow-y: auto;
	overflow-x: hidden;
	width: 100%;
	height: 100%;

}

.v-home-page > .-photo {
	flex: 0 0 auto;
	width: 50vw;
	height: 50vw;
	margin-top: 64px;
}

.v-home-page > .-photo > .-img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.v-home-page > .-challenge {
	flex: 0 0 auto;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 0.5em;
	margin-top: 56px;
	padding: 0 var(--var-h-padding);
}

.v-home-page > .-challenge > .-letter {
	flex: 0 0 max-content;
}

.v-home-page > .-challenge > .-letter::before {
	pointer-events: none;
	opacity: 0.6;
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	box-shadow: inset 0 0 0 3px var(--theme-fg--2);
	border-radius: 16px;

}

.v-home-page > .-challenge > .-letter > .-filled,
.v-home-page > .-challenge > .-letter > .-gap {
	display: inline-block;
	width: 1.1em;
	text-align: center;
	font-size: 12vw;
	font-family: 'Roboto Slab', serif;
	text-transform: uppercase;
}

.v-home-page > .-challenge > .-letter > .-filled {


}

.v-home-page > .-challenge > .-letter > .-gap {
	/*position: absolute;*/
	/*height: 100%;*/
	/*top: 0;*/
	/*left: 0;*/
	/*font-size: 60px;*/
	/*font-family: 'Roboto Slab', serif;*/
	/*text-transform: uppercase;*/
	/*transform:translateX(-12%);*/

	/*padding: 0 0.2em;*/
	/*background-color: #00C853;*/
}


.v-home-page > .-space {
	flex: 1 0 auto;
}

.v-home-page > .-controls {
	flex: 0 0 auto;
	display: flex;
	flex-direction: row;
	align-self: stretch;
	justify-self: flex-end;
	gap: 1em;
	padding: 0 var(--var-h-padding) 48px var(--var-h-padding);
}

.v-home-page > .-controls > .-control {

}

.v-home-page > .-controls > .-control.-text-to-speech {
	--v-button--bg: var(--theme-fg--1);
	--v-button--fg: var(--theme-bg--2);
}

.v-home-page > .-controls > .-control.-confirm {
	flex: 1 0 auto;
	--v-button--bg: var(--theme-bg--3);
	--v-button--fg: var(--theme-bg--1);
}

</style>
