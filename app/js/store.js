/**
 * @module store
 */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/**
 * @typedef ConnectionStatus
 * @property {string} connecting The client is currently trying to connect to the server.
 * @property {string} connected The client is connected to and authenticated with the server.
 * @property {string} disconnected The client is disconnected from the server.
 * @enum {string}
 */

/**
 * The Vuex Store used.
 * @property {Object} state The state object.
 * @property {ConnectionStatus} state.connectionStatus The status of the connection to Mission Control.
 * @property {string} state.page The current ID / slug of the page.
 * @property {bool} state.showSidebar Wether or not the sidebar is visible / extended.
 * @property {Object} state.mcState The Mission Control state object.
 *
 * @property {Object} mutations All the state mutation functions. Type of properties in this case refers to the type of data to pass along with `store.commit('mutationName', data)`.
 * @property {ConnectionStatus} mutations.setConnectionStatus Update the connection status.
 * @property {Object} mutations.fullUpdateMcState Fully replace the Mission Control state object in the store.
 * @property {Object} mutations.updateMcState Partially update the Mission Control state object in the store.
 * @property {string} mutations.setPage Set the currently active page. Used for navigation.
 * @property {bool} mutations.setShowSidebar Change visibility of the sidebar.
 *
 * @property {Object} actions All the state action functions. Type of properties in this case refers to the type of data to pass along with `store.dispatch('mutationName', data)`.
 * @property {string} actions.navigate Navigate to the given page.
 *
 * @property {Function} commit Commit a mutation to the state object.
 * @property {Function} dispatch Dispatch an action to the state object.
 */
const store = new Vuex.Store({
	state: {
		connectionStatus: 'connecting', // connecting, connected, disconnected
		page: 'dashboard',
		showSidebar: document.body.clientWidth >= 768,
		mcState: null
	},
	mutations: {
		setConnectionStatus(state, status) {
			state.connectionStatus = status;
		},
		fullUpdateMcState(state, newMcState) {
			state.mcState = newMcState;
		},
		updateMcState(state, newMcState) {
			state.mcState = {
				...state.mcState,
				...newMcState
			};
		},
		setPage(state, page) {
			state.page = page;
		},
		setShowSidebar(state, showSidebar) {
			state.showSidebar = showSidebar;
		}
	},
	actions: {
		navigate(context, to) {
			context.commit('setPage', to);

			// if (to === 'spotify') {
			// 	context.commit('setShowSidebar', false);
			// }
		}
	}
});

export default store;
