<template>
	<button
		class="flex w-full h-full overflow-hidden text-left content-between flex-wrap relative cursor-pointer"
	>
		<div class="z-0 absolute pin" :style="bgStyle"></div>
		<canvas
			ref="canvas"
			class="z-10 opacity-50 rounded-full w-full"
			style="transform: rotate(135deg);filter: blur(7px);"
		></canvas>
	</button>
</template>

<script type="text/javascript">
import drawColorWheel from '@helpers/draw-color-wheel';
import convert from 'color-convert';

// Converts a x,y position within the color wheel to its corresponding
// color. Core of the color picker.
function positionToRgb(x, y, width, diameter) {
	// make x and y relative to center point
	x = x - width / 2;
	y = width / 2 - y;

	// Angle from center point
	const distanceFromCenter = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
	const normalizedDistance = distanceFromCenter / (diameter / 2);
	const angle = Math.atan2(x, y) * (180 / Math.PI);
	const a = angle < 0 ? 180 + angle : angle;

	const rgb = convert.hsl.rgb(angle, 100, (1 - normalizedDistance) * 50 + 50);

	return {
		r: rgb[0],
		g: rgb[1],
		b: rgb[2]
	};
}

export default {
	props: ['value'],
	data: () => ({
		mouseTracked: false
	}),
	mounted() {
		drawColorWheel(
			this.$refs.canvas,
			this.$refs.canvas.getBoundingClientRect().width
		);
	},
	computed: {
		valuePosition() {
			const rect = this.$refs.canvas.getBoundingClientRect();
			const hsl = convert.rgb.hsl(
				this.value.r,
				this.value.g,
				this.value.b
			);

			const theta = (hsl[0] * Math.PI) / 180;
			const len = (1 - (hsl[2] / 0.5 - 1)) * width;
			const position = {
				x: len * Math.sin(theta),
				y: len * Math.cos(theta)
			};

			console.log(position);
			return position;
		},
		bgStyle() {
			return {
				background: `rgb(${this.value.r},${this.value.g},${
					this.value.b
				})`
			};
		}
	},
	methods: {
		emitColorAt(x, y, width, diameter) {
			this.$emit('input', positionToRgb(x, y, width, diameter));
		},
		getColorAt(x, y) {
			const rect = this.$refs.canvas.getBoundingClientRect();
			x = x * rect.width;
			y = y * rect.height;

			const context = this.$refs.canvas.getContext('2d');
			const pixel = context.getImageData(x, y, 1, 1).data;
			const hex =
				'#' +
				(
					'000000' + convert.rgb.hex(pixel[0], pixel[1], pixel[2])
				).slice(-6);

			return hex;
		},
		onMouseDown(e) {
			this.mouseTracked = true;

			const rect = this.$refs.canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			this.emitColorAt(x, y, rect.width, this.$refs.canvas.offsetWidth);
		},
		onMouseMove(e) {
			if (!this.mouseTracked) return;

			const rect = this.$refs.canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			this.emitColorAt(x, y, rect.width, this.$refs.canvas.offsetWidth);

			// const context = this.$refs.canvas.getContext('2d');
			// const pixel = context.getImageData(x, y, 1, 1).data;
			// const hex =
			// 	'#' +
			// 	(
			// 		'000000' + convert.rgb.hex(pixel[0], pixel[1], pixel[2])
			// 	).slice(-6);

			// this.$emit('color', hex);
		},
		onMouseUp(e) {
			if (!this.mouseTracked) return;

			const rect = this.$refs.canvas.getBoundingClientRect();
			const x = e.clientX - rect.left;
			const y = e.clientY - rect.top;

			this.emitColorAt(x, y, rect.width, this.$refs.canvas.offsetWidth);
			this.cleanupMouseEvents();
		},
		cleanupMouseEvents() {
			this.mouseTracked = true;
		}
	}
};
</script>
