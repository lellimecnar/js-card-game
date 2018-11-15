import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';
import range from 'lodash/range';
import sortBy from 'lodash/sortBy';
import Card from '../card';
import Player from '../player';

function _addCards(...cards) {
	cards = compact(flattenDeep(cards));

	if (
		cards.length > 0 &&
		!Card.isCard(...cards)
	) {
		throw new Error(`Invalid card${ cards.length > 1 ? 's' : '' } added to ${ this.constructor.displayName }`, { cards });
	}

	const {
		length,
	} = this;

	cards.forEach((card, i) => {
		_(card).cardSet = this;
		_(card).index = length + i;
		_(card).originalIndex = _(card).index;

		_(this).hasCards ||= true;
	});
}

export default class CardSet {
	get _cards(): Card[] {
		return _(Card).cards
			.filter(card => _(card).cardSet === this);
	}

	set _cards(cards: Card[]) {
		if (_(this).hasCards) {
			throw new Error(`This ${ this.constructor.displayName } already has cards.`);
		}

		this::_addCards(cards);
	}

	get cards(): Card[] {
		return _(Card).cards
			.reduce((cards, card) => {
				if (_(card).cardSet === this) {
					cards[_(card).index] = card;
				}

				return cards;
			}, []);
	}

	get topCard(): Card {
		return this.getCard(this.length - 1);
	}

	get length(): number {
		return this._cards.length;
	}

	get owner(): Player {
		return _(this).owner;
	}

	constructor(cards?: Card[], owner: Player): CardSet {
		this._cards = cards;
		_(this).owner = owner;
	}

	draw(count: number = 1, hand?: CardSet): CardSet {
		if (hand instanceof CardSet === false) {
			hand = new CardSet();
		}

		return hand.dropCard(...this.cards.slice(-(count)));
	}

	drawRandom(count: number = 1, hand?: CardSet): CardSet {
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

	getCard(index: number): Card {
		return this._cards
			.find(card => _(card).index === parseInt(index));
	}

	dropCard(...cards): this {
		if (
			cards.map(card => (
				card instanceof Card &&
				this.canDrop(card)
			)).includes(false)
		) {
			throw new Error(`This ${ this.constructor.displayName } cannot accept the given card${ cards.length > 1 ? 's' : '' }`);
		}

		this::_addCards(cards);

		return this;
	}

	canDrop(card: Card): boolean {
		return !!card;
	}

	shuffle(): this {
		const multiplier = Math.random() * this.length * 10;

		this.sort(() => Math.random() * multiplier);

		return this;
	}

	unshuffle(): this {
		this._cards
			.forEach(card => _(card).index = _(card).originalIndex);

		return this;
	}

	sort(...args): this {
		const cards = this._cards.map(card => _(card));

		sortBy(cards, ...args)
			.forEach((props, i) => props.index = i);

		return this;
	}
}
