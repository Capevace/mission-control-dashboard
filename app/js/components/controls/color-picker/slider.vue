<template>
	<button
		class="z-0 flex w-full h-32 overflow-hidden text-left flex-wrap cursor-pointer"
	>
		<div
			class="z-0 absolute pin-b pin-t pin-l pin-r bg-main-light pointer-events-none"
			:style="bgStyle"
		></div>
		<span class="z-10 w-full pointer-events-none p-3 text-white">
			<slot></slot>
		</span>
	</button>
</template>
<script type="text/javascript">
export default {
	props: ['value'],
	data: () => ({
		mouseTracked: false
	}),
	computed: {
		bgStyle() {
			return {
				willChange: 'transform',
				transform: `translateY(${(1 - this.value) * 100}%)`,
				opacity: this.mouseTracked ? 0.6 : 0.3,
				transition: 'opacity 200ms ease'
			};
		}
	},
	methods: {
		setValue(value) {
			let sanitizedValue = Math.min(1, Math.max(0, value));

			if (sanitizedValue > 0.92) {
				sanitizedValue = 1;
			} else if (sanitizedValue < 0.08) {
				sanitizedValue = 0;
			}

			this.$emit('input', sanitizedValue);
		},
		onMouseDown(e) {
			this.mouseTracked = true;

			const rect = e.target.getBoundingClientRect();
			const y = e.clientY - rect.top;

			this.setValue((rect.height - y) / rect.height);
		},
		onMouseMove(e) {
			if (!this.mouseTracked) return;

			const rect = e.target.getBoundingClientRect();
			const y = e.clientY - rect.top;

			this.setValue((rect.height - y) / rect.height);
		},
		onMouseUp(e) {
			// Click event
			if (!this.mouseTracked) {
				console.log('clicl');
			}

			this.cleanupMouseEvents();
		},
		cleanupMouseEvents() {
			clearTimeout(this.slideTimeout);
			this.mouseTracked = false;
			this.cachedValue = null;
		}
	}
};
</script>
