<template>
	<article
		:class="{
			'flex justify-between p-3 rounded border-4 bg-main-dark mb-3': true,
			'border-transparent': !notification.unread,
			'border-main': notification.unread
		}"
		v-observe-visibility="markAsReadDeferred"
	>
		<div>
			<strong class="block mb-2">{{ notification.title }}</strong>
			<p class="text-sm">{{ notification.message }}</p>
		</div>
		<div class="self-center">
			<button
				class="flex self-center hover:bg-main-darker text-main-darker hover:text-main px-8 py-2 rounded"
				@click.prevent="deleteNotification"
			>
				<times-icon class="fill-current w-4"></times-icon>
			</button>
		</div>
	</article>
</template>

<script type="text/javascript">
import { callAction } from '@socket';
import timesIcon from '@components/icons/times-icon';

export default {
	name: 'notification',
	props: ['notification'],
	components: {
		timesIcon
	},
	methods: {
		deleteNotification() {
			callAction('NOTIFICATIONS:DELETE', {
				id: this.notification.id
			});
		},
		markAsReadDeferred(isVisible) {
			if (isVisible)
				setTimeout(() => {
					socket.callAction('NOTIFICATIONS:MARK-AS-READ', {
						id: this.notification.id
					});
				}, 1500);
		}
	}
};
</script>
