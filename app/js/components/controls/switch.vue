<template>
	<button :class="{ switch: true, active: active }" @click="click">
		<span class="title"><slot></slot></span>
		<figure class="icon" v-if="icon">
			<home-icon v-if="icon === 'home'"></home-icon>
			<heart-icon v-else-if="icon === 'heart'"></heart-icon>
		</figure>
	</button>
</template>
<script type="text/javascript">
import homeIcon from '@components/icons/home-icon';
import heartIcon from '@components/icons/heart-icon';

export default {
	props: ['icon', 'active'],
	methods: {
		click(e) {
			this.$emit('click', e);
		}
	},
	components: {
		homeIcon,
		heartIcon
	}
};
</script>
