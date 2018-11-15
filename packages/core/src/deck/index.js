import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';

import Card from '../card';
import CardSet from '../cardset';
import Player from '../player';

function _addCards(...cards) {
	cards = compact(flattenDeep(cards));

	if (
		cards.length > 0 &&
		!Card.isCard(...cards)
	) {
		throw new Error(`Invalid card${ cards.length > 1 ? 's' : '' } added to ${ this.constructor.displayName }`, { cards });
	}

	cards.forEach((card) => {
		_(card).deck = this;

		_(this).hasCards ||= true;
	});
}

export default class Deck {
	get _cards(): Card[] {
		return _(Card).cards
			.filter(card => _(card).deck === this);
	}

	set _cards(cards) {
		if (_(this).hasCards) {
			throw new Error(`This ${ this.constructor.displayName } already has cards.`);
		}

		this::_addCards(cards);
	}

	get cards(): Card[] {
		return _(Card).cards
			.filter(card => (
				_(card).deck === this &&
				typeof _(card).cardSet === 'undefined'
			));
	}

	get topCard(): Card {
		return this.getCard(this.length - 1);
	}

	get length(): number {
		return this.cards.length;
	}

	get owner(): Player {
		return _(this).owner;
	}

	constructor(cards?: Card[], owner: Player) {
		this._cards = cards;
		_(this).owner = owner;
	}

	draw(...args): CardSet {
		return this::CardSet.prototype.draw(...args);
	}

	drawRandom(...args): CardSet {
		return this::CardSet.prototype.drawRandom(...args);
	}

	getCard(...args): Card {
		return this::CardSet.prototype.getCard(...args);
	}
}
