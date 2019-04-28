import {
	Card,
} from '@card-game/core';

class Suits extends Enum {}
Suits.initEnum(['RED', 'GREEN', 'BLUE', 'YELLOW']);

class Ranks extends Enum {}
Ranks.initEnum(['ZERO', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX', 'SEVEN', 'EIGHT', 'NINE', 'SKIP', 'DRAW_TWO', 'REVERSE']);

class Wilds extends Enum {}
Wilds.initEnum(['WILD', 'DRAW_FOUR']);

export default class UNOCard extends Card {
	static get SUITS() {
		return Suits;
	}

	static get RANKS() {
		return Ranks;
	}

	static get WILDS() {
		return Wilds;
	}

	constructor(suit, rank, owner) {
		super({ suit, rank }, owner);
	}
}