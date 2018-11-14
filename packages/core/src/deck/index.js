import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';

import Card from '../card';
import CardSet from '../cardset';

function _addCards(...cards) {
	cards = compact(flattenDeep(cards));
	
	if (
		cards.length > 0 &&
		!Card.isCard(...cards)
	) {
		throw new Error(`Invalid card${ cards.length > 1 ? 's' : '' } added to ${ this.constructor.className }`, { cards });
	}
	
	cards.forEach((card) => {
		_(card).deck = this;

		_(this).hasCards ||= true;
	});
}

export default class Deck {
	get _cards() {
		return _(Card).cards
			.filter(card => _(card).deck === this);
	}

	set _cards(cards) {
		if (_(this).hasCards) {
			throw new Error(`This ${ this.constructor.className } already has cards.`);
		}
		
		this::_addCards(...cards);
	}
	
	get cards() {
		return _(Card).cards
			.filter(card => (
				_(card).deck === this &&
				typeof _(card).cardSet === 'undefined'
			));
	}
	
	get topCard() {
		return this.get(this.length - 1);
	}
	
	get length() {
		return this.cards.length;
	}
	
	get owner() {
		return _(this).owner;
	}

	constructor(cards, owner) {
		this._cards = cards;
		_(this).owner = owner;
	}
	
	draw(...args) {
		return this::CardSet.prototype.draw(...args);
	}
	
	drawRandom(...args) {
		return this::CardSet.prototype.drawRandom(...args);
	}
	
	get(...args) {
		return this::CardSet.prototype.get(...args);
	}
}
