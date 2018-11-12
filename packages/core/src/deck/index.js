import {
	_,
} from '../util';
import Card from '../card';

export default class Deck {
	get cards() {
		return [..._(this).cards || []];
	}

	set cards(cards) {
		if (
			!(_(this).cards instanceof Set) &&
			Array.isArray(cards) &&
			!cards.map(card => card instanceof Card).includes(false)
		) {
			_(this).cards = new Set(cards);
			
			_(this).cards.forEach(card => _(card).deck = this);
		}
	}

	constructor(cards) {
		this._cards = cards;
	}
}
