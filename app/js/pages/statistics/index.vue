<template>
	<main class="page p-5 md:p-12">
		<article class="flex mb-10">
			<!-- OS Info -->
			<section class="info-block w-1/3">
				<span class="content">
					{{ info.system.manufacturer }}
					{{ info.system.model }}
				</span>
				<span class="dashboard-title">System</span>
			</section>
			<section class="info-block w-1/6">
				<span class="content">
					{{ info.os.platform }}
				</span>
				<span class="dashboard-title">Platform</span>
			</section>
			<section class="info-block w-1/6">
				<span class="content">
					{{ info.os.architecture }}
				</span>
				<span class="dashboard-title">Architecture</span>
			</section>
			<section class="info-block w-1/3">
				<span class="content">
					{{ info.os.distro }}
					{{ info.os.version }}
				</span>
				<span class="dashboard-title">OS</span>
			</section>
		</article>

		<!-- CPU Info & Memory -->
		<article class="flex mb-8">
			<section class="info-block w-1/3">
				<span class="content">
					{{ info.cpu.manufacturer }} {{ info.cpu.brand }}
				</span>
				<span class="dashboard-title">CPU Model</span>
			</section>

			<section class="info-block w-1/6">
				<span class="content">{{ info.cpu.mainTemperature }}°C</span>
				<span class="dashboard-title">CPU Temperature</span>
			</section>

			<section class="info-block w-1/6">
				<span class="content">
					{{ parseInt(info.cpu.currentLoad) }}%
				</span>
				<span class="dashboard-title">Total CPU Usage</span>
			</section>

			<section class="info-block w-1/6">
				<span class="content"
					>{{ bytesUsed }}/{{ bytesTotal }}</span
				>
				<span class="dashboard-title">Memory Usage</span>
			</section>
		</article>

		<!-- CPU Cores -->
		<article class="flex mb-10">
			<template v-for="(core, index) in info.cpu.cores">
				<div
					class="w-1/3"
					v-if="index % info.cpu.cores.length === 0"
				></div>
				<section class="info-block w-1/6">
					<span class="content">{{ parseInt(core.load) }}%</span>
					<span class="dashboard-title"
						>CPU Core {{ index + 1 }}</span
					>
				</section>
			</template>
		</article>

		<!-- Network Info -->
		<article class="flex mb-8">
			<div class="w-1/3"></div>
			<section class="info-block w-1/6">
				<span class="content">{{ info.network.internalIPv4 }}</span>
				<span class="dashboard-title">Internal IP Address</span>
			</section>
			<section class="info-block w-1/6">
				<span class="content">{{ info.network.publicIPv4 }}</span>
				<span class="dashboard-title">Public IP Address</span>
			</section>
			<section class="info-block w-1/6">
				<span class="content">{{ info.network.mac }}</span>
				<span class="dashboard-title">MAC Address</span>
			</section>
			<section class="info-block w-1/6">
				<span class="content">{{ info.network.speed }} MBit/s</span>
				<span class="dashboard-title">Speed</span>
			</section>
		</article>

		<router-link
			class="bg-main px-3 py-2 rounded-full text-main-lightest no-underline text-sm mb-5"
			to="statistics/browse"
		>
			Browse State
		</router-link>
	</main>
</template>
<script type="text/javascript">
import formatBytes from '@helpers/format-bytes';

export default {
	name: 'statistics-page',
	components: {},
	computed: {
		info() {
			return this.$mcState('systemInfo', {
				system: {},
				os: {},
				cpu: {},
				memory: {},
				network: {}
			});
		},
		bytesUsed() {
			return formatBytes(this.info.memory.used);
		},
		bytesTotal() {
			return formatBytes(this.info.memory.total);
		}
	},
	filter: {
		bytes: formatBytes
	}
};
</script>
