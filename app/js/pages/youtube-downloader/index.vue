<template>
	<main class="page">
		<iframe class="w-full h-screen" :src="url"></iframe>
	</main>
</template>
<script type="text/javascript">
import config from '@config';

export default {
	name: 'youtube-downloader-page',
	computed: {
		url() {
			return config.missionControlUrl + '/youtube-downloader';
		}
	}
};
</script>
