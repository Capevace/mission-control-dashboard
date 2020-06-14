<template>
	<main class="page">
		<iframe class="w-full h-screen" :src="url"></iframe>
	</main>
</template>
<script type="text/javascript">
import config from '@config';

export default {
	name: 'files-page',
	computed: {
		url() {
			return config.missionControlUrl + '/files';
		}
	}
};
</script>
