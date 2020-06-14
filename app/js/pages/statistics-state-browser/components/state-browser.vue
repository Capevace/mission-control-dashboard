<template>
	<section class="font-mono text-sm text-main-lightest">
		<div class="w-full overflow-x-scroll">
			<state-browser-node :state="state"></state-browser-node>
		</div>
	</section>
</template>
<script type="text/javascript">
import stateBrowserNode from './state-browser-node';

export default {
	props: ['state'],
	components: {
		'state-browser-node': stateBrowserNode
	}
};
</script>
