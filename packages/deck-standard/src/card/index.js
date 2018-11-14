import {
	Card,
} from '@card-game/core';

export default class StandardCard extends Card {
	get id() {
		return [this.suit, this.rank].join(':');
	}
	
	get suit() {
		return _(this).suit;
	}

	get rank() {
		return _(this).rank;
	}

	constructor(suit, rank, owner) {
		super({ suit, rank }, owner);
	}
}