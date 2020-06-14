<template>
	<section class="mt-16">
		<span class="dashboard-title mb-2 w-full">Scenes</span>
		<div class="flex">
			<virtual-switch
				v-for="(scene, sceneId) in scenes"
				:key="scene.name"
				:active="scene.active"
				icon="home"
				@click="callScene(sceneId, scene)"
				>{{ scene.name }}</virtual-switch
			>
		</div>
	</section>
</template>
<script type="text/javascript">
import virtualSwitch from '@components/controls/switch';
import { callAction } from '@socket';

export default {
	components: {
		'virtual-switch': virtualSwitch
	},
	computed: {
		scenes() {
			if (!this.$store.state.mcState) return [];

			return this.$store.state.mcState.scenes;
		}
	},
	methods: {
		callScene(sceneId, scene) {
			callAction('SCENE:TOGGLE', {
				scene: sceneId,
				active: !scene.active
			});
		}
	}
};
</script>
