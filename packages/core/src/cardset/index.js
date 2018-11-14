import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';
import range from 'lodash/range';
import sortBy from 'lodash/sortBy';
import Card from '../card';

function _addCards(...cards) {
	cards = compact(flattenDeep(cards));

	if (
		cards.length > 0 &&
		!Card.isCard(...cards)
	) {
		throw new Error(`Invalid card${ cards.length > 1 ? 's' : '' } added to ${ this.constructor.name }`, { cards });
	}

	const {
		length,
	} = this;

	cards.forEach((card, i) => {
		_(card).cardSet = this;
		_(card).index = length + i;

		_(this).hasCards ||= true;
	});
}

export default class CardSet {
	get _cards() {
		return _(Card).cards
			.filter(card => _(card).cardSet === this);
	}

	set _cards(cards) {
		if (_(this).hasCards) {
			throw new Error(`This ${ this.constructor.className } already has cards.`);
		}

		this::_addCards(cards);
	}

	get cards() {
		return _(Card).cards
			.reduce((cards, card) => {
				if (_(card).cardSet === this) {
					cards[_(card).index] = card;
				}
				
				return cards;
			}, []);
	}
	
	get topCard() {
		return this.get(this.length - 1);
	}
	
	get length() {
		return this._cards.length;
	}
	
	get owner() {
		return _(this).owner;
	}

	constructor(cards, owner) {
		this._cards = cards;
		_(this).owner = owner;
	}

	draw(count = 1, hand) {
		if (hand instanceof CardSet === false) {
			hand = new CardSet();
		}
		
		return hand.dropCard(...this.cards.slice(-(count)));
	}
	
	drawRandom(count = 1, hand) {
		if (hand instanceof CardSet === false) {
			hand = new CardSet();
		}
		
		const {
			cards,
		} = this;
		
		const newCards = range(count)
			.map(() => {
				const index = Math.floor(Math.random() * cards.length);
				const [ newCard ] = cards.splice(index, 1);
				
				return newCard;
			});
		
		return hand.dropCard(...newCards);
	}
	
	get(index) {
		return this._cards
			.find(card => _(card).index === parseInt(index));
	}
	
	dropCard(...cards) {
		if (
			cards.map(card => (
				card instanceof Card &&
				this.canDrop(card)
			)).includes(false)
		) {
			throw new Error(`This ${ this.constructor.className } cannot accept the given card${ cards.length > 1 ? 's' : '' }`);
		}
		
		this::_addCards(cards);
		
		return this;
	}
	
	canDrop(card) {
		return true;
	}
	
	shuffle() {
		const multiplier = Math.random() * this.length * 10;

		this.sort(() => Math.random() * multiplier);

		return this;
	}
	
	unshuffle() {
		this._cards
			.forEach((card, i) => _(card).index = i);

		return this;
	}
	
	sort(...args) {
		const cards = this._cards.map(card => _(card));

		sortBy(cards, ...args)
			.forEach((card, i) => _(card).index = i);

		return this;
	}
}