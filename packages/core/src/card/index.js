import {
	_,
} from '../util';

const _cards = new Set();

export default class Card {
	static get cards() {
		return [..._cards];
	}

	get owner() {
		return _(this).owner;
	}

	constructor(data, owner) {
		_(this).data = data;
		_(this).owner = owner;
		
		_cards.add(this);
	}
}
