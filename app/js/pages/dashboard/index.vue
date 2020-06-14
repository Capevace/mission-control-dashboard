<template>
	<main class="page p-5 md:p-12">
		<header class="flex">
			<section class="info-block w-1/3">
				<span class="content">Filmregal</span>
				<span class="dashboard-title">Dashboard</span>
			</section>

			<section class="info-block w-1/6">
				<!-- <span class="content">Movie Night</span>
				<span class="dashboard-title">Current Scene</span> -->
				<span class="content">
					{{ systemInfo.cpu.mainTemperature }}°C
				</span>
				<span class="dashboard-title">CPU Temperature</span>
			</section>

			<section class="info-block w-1/6">
				<span class="content">
					{{ parseInt(systemInfo.cpu.currentLoad) }}%
				</span>
				<span class="dashboard-title">Total CPU Load</span>
			</section>

			<section class="info-block w-1/6">
				<span class="content">
					{{ systemInfo.network.internalIPv4 }}
				</span>
				<span class="dashboard-title">Internal IP Address</span>
			</section>

			<section class="info-block w-1/6">
				<span class="content">
					{{ systemInfo.network.publicIPv4 }}
				</span>
				<span class="dashboard-title">Public IP Address</span>
			</section>
		</header>

		<scene-switches></scene-switches>

		<slider-switch icon="home">Light</slider-switch>
		<color-switch :color="color" @color="onColor">
			Lamp
			<template v-slot:more>
				<p>Copyright 2016 Evan You</p>
			</template>
		</color-switch>
	</main>
</template>
<script type="text/javascript">
import sceneSwitches from './components/scene-switches';
import sliderSwitch from '@components/controls/slider';
import colorSwitch from '@components/controls/color-picker';

export default {
	name: 'dashboard-page',
	data: () => ({
		color: { r: 0, g: 255, b: 255 }
	}),
	methods: {
		onColor(color) {
			this.color = color;
		}
	},
	computed: {
		systemInfo() {
			return this.$mcState('systemInfo', {
				system: {},
				os: {},
				cpu: {},
				memory: {},
				network: {
					publicIPv4: '-',
					internalIPv4: '-'
				}
			});
		}
	},
	components: {
		sceneSwitches,
		sliderSwitch,
		colorSwitch
	}
};
</script>
