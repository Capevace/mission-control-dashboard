import Vue from 'vue';
import VueRouter from 'vue-router';

import loading from '@pages/loading/index';
import dashboard from '@pages/dashboard/index';
import spotify from '@pages/spotify/index';
import statistics from '@pages/statistics/index';
import statisticsStateBrowser from '@pages/statistics-state-browser/index';
import notifications from '@pages/notifications/index';

const routes = [
	{ path: '/', component: dashboard },
	{ path: '/spotify', component: spotify },
	{ path: '/statistics', component: statistics },
	{ path: '/statistics/browse', component: statisticsStateBrowser },
	{ path: '/notifications', component: notifications }
];

Vue.use(VueRouter);

export default new VueRouter({
	routes
});
