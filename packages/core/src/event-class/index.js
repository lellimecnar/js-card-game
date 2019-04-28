import EventEmitter from 'events';

const listeners = new Map();

function e(fn) {
	if (!listeners.has(this)) {
		listeners.set(this, new Map());
	}

	const handlers = listeners.get(this);

	if (!handlers.has(fn)) {
		handlers.set(fn, this::fn);
	}

	return handlers.get(fn);
}

export default class EventClass {
	constructor() {
		const events = new EventEmitter();

		_(this)._e = events;
		_(this).emit = events::events.emit;
	}

	on(event, fn) {
		_(this)._e.on(event, this::e(fn));

		return this;
	}

	once(event, fn) {
		_(this)._e.once(event, this::e(fn));

		return this;
	}

	off(event, fn) {
		if (typeof fn) {
			_(this)._e.removeListener(event, this::e(fn));
		} else {
			_(this)._e.removeAllListeners(event);
		}

		return this;
	}
}