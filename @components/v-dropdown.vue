<template>
	<div class="v-dropdown" :class="controlClass" ref="root">
		<slot
			name="control"
			:toggleDrop="toggleDrop"
			:openDrop="openDrop"
			:closeDrop="closeDrop">
		</slot>

		<teleport to=".v-root">
			<div
				class="v-dropdown--drop"
				ref="drop"
				:class="dropdownClass"
				:style="{
					'--position-x': position.x + 'px',
					'--position-y': position.y + 'px',
				}"
				v-if="opened">
				<slot
					name="drop"
					:toggleDrop="toggleDrop"
					:openDrop="openDrop"
					:closeDrop="closeDrop">
				</slot>
			</div>
		</teleport>

	</div>
</template>



<script>
import {Vector2} from '@potentii/geometry-utils';
import {DomUtils} from '@potentii/browser-utils';

export default {

	name: 'v-dropdown',


	props: {
		dropdownClass: {
			type: String,
			required: false,
			default: '',
		},
		controlClass: {
			type: String,
			required: false,
			default: '',
		},
	},


	data(){
		return {
			/**
			 * @type {boolean}
			 */
			opened: false,

			/**
			 * @type {Vector2}
			 */
			position: Vector2.zero,

			/**
			 * @type {?NodeJS.Timer}
			 */
			trackTimeout: undefined,
		};
	},


	methods: {

		toggleDrop(){
			if(this.opened)
				this.closeDrop();
			else
				this.openDrop();
		},

		openDrop(){
			this.opened = true;

			this.updatePosition();
			this.trackTimeout = setInterval(this.updatePosition, 100);
			setTimeout(() => {
				document.addEventListener('click', this.document_onClick);
			}, 0);
		},

		closeDrop(){
			this.opened = false;

			if(this.trackTimeout)
				clearInterval(this.trackTimeout);
			document.removeEventListener('click', this.document_onClick);
		},


		document_onClick(e){
			const target = e.target;
			const isInsideDrop = !!DomUtils.getParentUsingPredicate(target, $el => $el == this.$refs.drop);
			if(!isInsideDrop)
				this.closeDrop();
		},


		updatePosition(){
			const $root = this.$refs.root;
			if(!$root)
				return;

			const $teleportedTo = document.querySelector('.v-root');
			const distanceVec = DomUtils.relativePosition($root, $teleportedTo);

			const x = distanceVec.x + $root.offsetLeft;
			const y = distanceVec.y + $root.offsetTop + $root.offsetHeight;

			this.position = new Vector2(x, y);
		},

	},

}
</script>



<style>
.v-dropdown{

}

.v-dropdown--drop{
	position: absolute;
	top: var(--position-y);
	left: var(--position-x);
	z-index: 10;
}
</style>
