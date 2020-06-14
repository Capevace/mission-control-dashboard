<template>
	<main class="page flex flex-wrap">
		<kodi-remote></kodi-remote>
		<section class="bg-main-darkest w-full p-5 border-t-2 border-l-2 border-main-darker absolute pin-b">Hello</section>
	</main>
</template>
<script type="text/javascript">
import config from '@config';
import kodiRemote from './components/remote';

export default {
	name: 'kodi-page',
	components: {
		kodiRemote
	}
};
</script>
