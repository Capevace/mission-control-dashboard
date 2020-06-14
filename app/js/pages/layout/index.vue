<template>
	<div
		:class="{
			'flex w-full': true,
			fullscreen: sidebarHidden,
			'justify-center': $store.state.mcState === null
		}"
	>
		<spinner-icon
			class="text-main-darkest fill-current w-16 animation-spin-infinite mt-24"
			v-if="$store.state.mcState === null"
		></spinner-icon>
		<template v-else>
			<button
				@click.prevent="showSidebar"
				class="fixed w-12 bg-main-darkest h-screen justify-center hidden md:flex"
			>
				<chevron-double-right-icon
					class="w-5 fill-current text-main self-center"
				></chevron-double-right-icon>
			</button>

			<sidebar :hidden="sidebarHidden"></sidebar>

			<mobile-nav-bar></mobile-nav-bar>

			<router-multi-view
				:class="{
					'md:ml-1/5': !sidebarHidden,
					'md:ml-12': sidebarHidden,
					'w-full transition-margin-left overflow-hidden md:overflow-auto mt-16 md:mt-0': true
				}"
			/>
		</template>

		<!-- <button
			v-show="sidebarHidden"
			@click.prevent="showSidebar"
			:class="{ 'fixed w-12 h-12 bg-main-light rounded-full': true }"
		>
			Menu
		</button> -->
	</div>
</template>

<script type="text/javascript">
import sidebar from './components/sidebar';
import mobileNavBar from './components/mobile-nav-bar';
import chevronDoubleRightIcon from '@components/icons/chevron-double-right-icon';
import spinnerIcon from '@components/icons/spinner-icon';

export default {
	components: {
		sidebar,
		spinnerIcon,
		chevronDoubleRightIcon,
		mobileNavBar
	},
	computed: {
		pageIsSpotify() {
			return this.$store.state.page === 'spotify';
		},
		sidebarHidden() {
			return !this.$store.state.showSidebar;
		}
	},
	methods: {
		showSidebar() {
			this.$store.commit('setShowSidebar', true);
		}
	}
};
</script>
