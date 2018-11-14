import {
	Card,
} from '@card-game/core';

export default class RookCard extends Card {
	get id() {
		return [this.color, this.number].join(':');
	}
	
	get color() {
		return _(this).color;
	}

	get number() {
		return _(this).number;
	}

	constructor(color, number, owner) {
		super({ color, number }, owner);
	}
}