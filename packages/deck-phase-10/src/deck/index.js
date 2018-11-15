import {
	Deck,
} from '@card-game/core';
import Phase10Card from '../card';
import range from 'lodash/range';

const SUITS = ['RED','BLUE','YELLOW','GREEN'];
const RANKS = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE'];

export default class Phase10Deck extends Deck {
	static get SUITS() {
		return SUITS;
	}

	static get RANKS() {
		return RANKS;
	}

	static get Card() {
		return Phase10Card;
	}

	constructor(owner) {
		super();

		const {
			SUITS,
			RANKS,
			Card,
		} = this.constructor;
		const cards = [];

		SUITS.forEach((suit) => {
			RANKS.forEach((rank) => {
				range(2).forEach(() => {
					cards.push(new Card(suit, rank, owner));
				});
			});
		});

		range(8).forEach(() => {
			cards.push(new Card('WILD', 'WILD', owner));
		});

		range(4).forEach(() => {
			cards.push(new Card('SKIP', 'SKIP', owner));
		});

		this._cards = cards;
	}
}
