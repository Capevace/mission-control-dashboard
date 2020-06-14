<template>
	<aside
		:class="{
			'z-30 flex md:w-1/5 w-full h-full justify-center content-between flex-wrap fixed transition-transform  bg-main-darkest': true,
			'transform-off-screen-left': hidden
		}"
	>
		<section class="flex justify-between w-full p-5 items-center">
			<button @click.prevent="toggleSidebar()" class="flex">
				<bars-icon class="w-5 fill-current text-main"></bars-icon>
			</button>
			<h1 class="block w-full text-indigo-light text-center text-base flex flex-wrap content-center justify-center">
				<span class="w-full">Mission Control</span>
				<span class="text-xs font-normal">v{{ systemInfo.version }}</span>
			</h1>
			<router-link class="w-5 relative flex" to="/notifications">
				<bell-icon
					class="fill-current text-main bell-router-link self-center"
				></bell-icon>
				<div
					class="absolute w-1.5 h-1.5 bg-pink rounded-full pin-t pin-r"
					v-if="hasUnreadNotifications"
				></div>
			</router-link>
		</section>

		<nav class="flex w-full text-main-lightest p-3 flex-wrap">
			<router-link
				class="sidebar-nav-link"
				to="/"
				active-class="active"
				exact
				@click.native="hideSidebarOnMobile"
			>
				<span>Dashboard</span>
			</router-link>

			<router-link
				class="sidebar-nav-link mt-3"
				to="/spotify"
				active-class="active"
				@click.native="hideSidebarOnMobile"
			>
				<span>Spotify</span>
			</router-link>

			<router-link
				class="sidebar-nav-link mt-3"
				to="/files"
				active-class="active"
				@click.native="hideSidebarOnMobile"
			>
				<span>Files</span>
			</router-link>

			<router-link
				class="sidebar-nav-link mt-3"
				to="/youtube-downloader"
				active-class="active"
				@click.native="hideSidebarOnMobile"
			>
				<span>YouTube</span>
			</router-link>

			<router-link
				class="sidebar-nav-link mt-3"
				to="/statistics"
				active-class="active"
				exact
				@click.native="hideSidebarOnMobile"
			>
				<span>Statistics</span>
			</router-link>
		</nav>

		<connection-status></connection-status>
	</aside>
</template>

<script type="text/javascript">
import barsIcon from '@components/icons/bars-icon';
import bellIcon from '@components/icons/bell-icon';
import connectionStatus from './connection-status';

export default {
	props: ['hidden'],
	components: {
		barsIcon,
		bellIcon,
		connectionStatus
	},
	computed: {
		hasUnreadNotifications() {
			return this.$store.state.mcState
				? this.$store.state.mcState.notifications.reduce(
						(hasUnread, notification) =>
							hasUnread || notification.unread,
						false
				  )
				: false;
		},
		systemInfo() {
			return this.$mcState('systemInfo', {
				version: ''
			});
		}
	},
	methods: {
		toggleSidebar() {
			this.$store.commit(
				'setShowSidebar',
				!this.$store.state.showSidebar
			);
		},
		hideSidebarOnMobile() {
			if (document.body.clientWidth < 768) {
				this.$store.commit(
					'setShowSidebar',
					false
				);
			}
		}
	}
};
</script>
