import Vue from 'vue';
import store from './store';
import router from './router';

import VueRouterMultiView from 'vue-router-multi-view';
import VueObserveVisibility from 'vue-observe-visibility';

import missionControlUi from '@pages/layout/index';

Vue.use(VueRouterMultiView);
Vue.use(VueObserveVisibility);

Vue.mixin({
	methods: {
		$mcState(key, defaultValue = {}) {
			return this.$store.state.mcState
				? { ...defaultValue, ...this.$store.state.mcState[key] }
				: defaultValue;
		}
	}
});

const app = new Vue({
	el: '#app',
	router,
	store,
	components: {
		missionControlUi
	}
});
export default { app, store, Vue };
