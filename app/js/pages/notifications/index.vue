<template>
	<main class="page p-5 md:p-12">
		<header class="flex justify-between">
			<h3 class="text-main-lighter mb-5">
				Notifications
			</h3>
			<div>
				<button>Hello</button>
			</div>
		</header>

		<notification
			v-for="notification in notifications"
			:notification="notification"
			:key="notification.id"
		></notification>
		<section
			v-if="notifications.length === 0"
			class="mt-5 text-center text-2xl text-main-darkest"
		>
			No Notifications
		</section>
	</main>
</template>
<script type="text/javascript">
import notification from './components/notification';

export default {
	name: 'notifications-page',
	components: {
		notification
	},
	computed: {
		notifications() {
			return this.$mcState('notifications', []);
		}
	}
};
</script>
