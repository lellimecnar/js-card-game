import {
	Card,
} from '@card-game/core';

export default class StandardCard extends Card {
	constructor(suit, rank, owner) {
		super({ suit, rank }, owner);
	}
}