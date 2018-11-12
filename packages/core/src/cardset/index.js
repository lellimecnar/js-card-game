import {
	_,
	flat,
} from '../util';
import Card from '../card';

function _addCards(...cards) {
	cards = flat(cards);
	if (cards.map(card => card instanceof Card).includes(false)) {
		throw new Error(`Invalid card${ cards.length > 1 ? 's' : '' } added to ${ this.constructor.className }`, { cards });
	}
	
	_(CardSet).cards ||= new Set();
	
	cards.forEach((card) => {
		_(card).cardSet = this;
		
		_(CardSet).cards.add(card);
	});
}

export default class CardSet {
	get _cards() {
		return [..._(this).cards || []];
	}
	
	set _cards(cards) {
		if (_(this).hasCards) {
			throw new Error(`This ${ this.constructor.className } already has cards.`);
		}

		this::_addCards(...cards);
		
		_(this).hasCards = true;
	}

	constructor() {
		this._cards = [1,2,3,2,1,2,1,2,3,2,1,];
	}
}