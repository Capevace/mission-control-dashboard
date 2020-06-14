<template>
	<main class="page p-5 md:p-12">
		<span class="dashboard-title mb-2">State Browser</span>

		<state-browser
			class="w-full"
			:state="$store.state.mcState"
		></state-browser>
	</main>
</template>
<script type="text/javascript">
import stateBrowser from './components/state-browser';

export default {
	name: 'statistics-browse-page',
	components: {
		'state-browser': stateBrowser
	}
};
</script>
