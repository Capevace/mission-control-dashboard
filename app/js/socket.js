/**
 * The socket module handles all communiations with Mission Control.
 *
 * @module @socket
 * @see https://mateffy.me/mission-control-client
 * @requires mission-control-client
 */
import config from '@config';
import store from './store';
import { MissionControlClient, SOCKET_ERROR } from 'mission-control-client';

const apiKey = window.MISSION_CONTROL_API_KEY;

if (!apiKey)
	console.error('No API key found in window.MISSION_CONTROL_API_KEY!');

const client = new MissionControlClient(config.socketUrl, apiKey);

store.commit('setConnectionStatus', 'connecting');

client.on('connect', () => {
	store.commit('setConnectionStatus', 'connected');
	console.log('Connected to Mission Control.');
});

client.on('reconnecting', () => {
	store.commit('setConnectionStatus', 'connecting');
});

client.on('disconnect', reason => {
	console.log('Disconnected from Mission Control. Reason:', reason);
	store.commit('setConnectionStatus', 'disconnected');
});

client.on('error', (errorType, err) => {
	console.error('Error:', errorType, err);

	// if we ran out of reconnection attempts
	if (errorType === SOCKET_ERROR.NO_ATTEMPTS_LEFT) {
		store.commit('setConnectionStatus', 'disconnected');
	}
});

client.on('initial-state', data => {
	console.log('Received Initial State:', data);
	store.commit('fullUpdateMcState', data.state);
});

client.subscribe('update', data => {
	console.log('State Update:', data);
	store.commit('updateMcState', data.state);
});

/**
 * Evoke an action on the Mission Control server.
 * @param  {string} action The actions name / key.
 * @param  {Object} data   The data to be sent along with the action.
 */
export function callAction(action, data) {
	console.log(`Calling action: ${action} with data:`, data);
	client.action(action, data);
}

window.callAction = callAction;