import Vue from 'vue';
import VueRouter from 'vue-router';

import loading from '@pages/loading/index.vue';
import dashboard from '@pages/dashboard/index.vue';

export const routes = [
	{ 
		path: '/', 
		component: dashboard, 
		name: 'dashboard', 
		meta: { title: 'Dashboard', icon: 'home-icon', menu: 100, exact: true }
	},
	{ 
		path: '/floorplan', 
		component: () => import(/* webpackChunkName: "page-floorplan" */'@pages/room/index.vue'), 
		name: 'floorplan', 
		meta: { title: 'Floorplan', icon: 'terminal-icon', menu: 200, iconOptions: { primary: 'text-main-dark', secondary: 'text-main' } }
	},
	// {
	// 	path: '/files', 
	// 	component: () => import(/* webpackChunkName: "page-files" */'@pages/files/index.vue'), 
	// 	name: 'files', 
	// 	meta: { title: 'Filebrowser', icon: 'files-icon', menu: 400 }
	// },
	// { 
	// 	path: '/youtube-downloader', 
	// 	component: () => import(/* webpackChunkName: "page-youtube-downloader" */'@pages/youtube-downloader/index.vue'), 
	// 	name: 'youtube-downloader', 
	// 	meta: { title: 'YouTube Downloader', icon: 'youtube-icon', menu: 300 }
	// },
	// { 
	// 	path: '/shell', 
	// 	component: () => import(/* webpackChunkName: "page-shell" */'@pages/shell/index.vue'), 
	// 	name: 'shell', 
	// 	meta: { title: 'SSH', icon: 'terminal-icon', menu: 350 }
	// },
	{ 
		path: '/telemetry', 
		component: () => import(/* webpackChunkName: "page-telemetry" */'@pages/statistics/index.vue'), 
		name: 'telemetry', 
		meta: { title: 'Telemetry'}
	},
	{ 
		path: '/telemetry/sync',
		component: () => import(/* webpackChunkName: "page-telemetry-sync" */'@pages/statistics-state-browser/index.vue'),
		name: 'telemetry-sync',
		meta: { title: 'Telemetry', subtitle: 'Sync Debugger', icon: 'death-star-icon', menu: 1000, iconOptions: { primary: 'text-main-dark', secondary: 'text-main' }  } 
	},
	{ 
		path: '/telemetry/storybook',
		component: () => import(/* webpackChunkName: "page-telemetry-sync" */'@pages/telemetry/storybook/index.vue'),
		name: 'telemetry-storybook',
		meta: { title: 'Telemetry', subtitle: 'Storybook' } 
	},
	{ 
		path: '/notifications',
		component: () => import(/* webpackChunkName: "page-notifications" */'@pages/notifications/index.vue'),
		name: 'notifications',
		meta: { title: 'Notifications' }
	},
	{ 
		path: '/settings',
		component: () => import(/* webpackChunkName: "page-settings" */'@pages/settings/index.vue'),
		name: 'settings',
		meta: { title: 'Settings', subtitle: '' }
	},
	{ 
		path: '/settings/theme',
		component: () => import(/* webpackChunkName: "page-users" */'@pages/settings/theme-settings/index.vue'),
		name: 'theme',
		meta: { title: 'Settings', subtitle: 'Theme' }
	},
	{ 
		path: '/settings/users',
		component: () => import(/* webpackChunkName: "page-users" */'@pages/users/index.vue'),
		name: 'users',
		meta: { title: 'Settings', subtitle: 'User Management' }
	},
	{ 
		path: '/settings/users/create',
		component: () => import(/* webpackChunkName: "page-create-user" */'@pages/users/create.vue'),
		name: 'create-user',
		meta: { title: 'User Management', subtitle: 'Create User' }
	},
	{ 
		path: '/settings/account',
		component: () => import(/* webpackChunkName: "page-user" */'@pages/users/user.vue'),
		name: 'profile',
		meta: { title: 'Settings', subtitle: 'Account' }
	},
	{ 
		path: '/settings/users/:username',
		component: () => import(/* webpackChunkName: "page-user" */'@pages/users/user.vue'),
		name: 'user',
		meta: { title: 'User Management', subtitle() { return `Edit User – ${this.$route.params.username}`; } }
	}
];

Vue.use(VueRouter);

export const router = new VueRouter({
	routes
});
