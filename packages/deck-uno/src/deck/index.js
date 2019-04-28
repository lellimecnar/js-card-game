import {
	Deck,
} from '@card-game/core';
import range from 'lodash/range';

import UNOCard from '../card';

export default class UNODeck extends Deck {
	static get Card() {
		return UNOCard;
	}

	constructor(owner) {
		super();

		const {
			Card,
		} = this.constructor;
		const {
			SUITS,
			RANKS,
			WILDS,
		} = Card;
		const cards = [];

		[...SUITS].forEach((suit) => {
			[...RANKS].forEach((rank) => {
				const count = rank > RANKS.ZERO ? 2 : 1;

				range(count).forEach(() => {
					cards.push(new Card(suit, rank, owner));
				});
			});
		});

		[...WILDS].forEach((rank) => {
			range(4).forEach(() => {
				cards.push(new Card(WILDS.WILD, rank, owner));
			});
		});

		this._cards = cards;
	}
}
