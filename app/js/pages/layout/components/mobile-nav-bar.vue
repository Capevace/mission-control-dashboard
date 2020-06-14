<template>
	<section
		class="fixed flex justify-between w-full p-5 items-center bg-main-darkest md:hidden"
	>
		<button @click.prevent="toggleSidebar" class="flex">
			<bars-icon class="w-5 fill-current text-main"></bars-icon>
		</button>
		<h1 class="block w-full text-indigo-light text-center text-base">
			Mission Control
		</h1>
		<router-link
			class="w-5 relative flex"
			to="/notifications"
			@click.native="toggleSidebar"
		>
			<bell-icon
				class="fill-current text-main bell-router-link self-center"
			></bell-icon>
			<div
				class="absolute w-1.5 h-1.5 bg-pink rounded-full pin-t pin-r"
				v-if="hasUnreadNotifications"
			></div>
		</router-link>
	</section>
</template>

<script type="text/javascript">
import barsIcon from '@components/icons/bars-icon';
import bellIcon from '@components/icons/bell-icon';
export default {
	components: {
		barsIcon,
		bellIcon
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
		}
	},
	methods: {
		toggleSidebar() {
			this.$store.commit(
				'setShowSidebar',
				!this.$store.state.showSidebar
			);
		}
	}
};
</script>
