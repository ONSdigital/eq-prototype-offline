import EventEmitter from 'events';

/**
 * Deep-mutable store
 */
let currentState = {
	surveySchema: null
};

const emitter = new EventEmitter();

function setState (state) {
	currentState = {
		...currentState,
		...state
	};

	emitter.emit('STATE_CHANGED');
}

export default {
	set: setState,
	get: () => {
		return { ...currentState };
	},
	emitter: emitter
}
