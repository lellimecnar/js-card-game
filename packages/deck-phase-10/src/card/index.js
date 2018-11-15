import {
	Card,
} from '@card-game/core';

export default class Phase10Card extends Card {
	constructor(suit, rank, owner) {
		super({ suit, rank }, owner);
	}
}