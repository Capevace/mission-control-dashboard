<template>
	<main class="page flex justify-center">
		<spinner-icon
			class="text-main-darkest fill-current w-16 animation-spin-infinite"
		></spinner-icon>
	</main>
</template>
<script type="text/javascript">
import spinnerIcon from '@components/icons/spinner-icon';

export default {
	name: 'loading-page',
	components: {
		'spinner-icon': spinnerIcon
	}
};
</script>
