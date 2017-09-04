import CardSet from './CardSet';

const _suit = new WeakMap();
const _number = new WeakMap();
const _parent = new WeakMap();
const _deck = new WeakMap();
const _config = new WeakMap();

export function _getSuit() {
	return _suit.get(this);
}

export function _getNumber() {
	return _number.get(this);
}

export function _setParent(newParent: CardSet) {
	if (
		!newParent ||
		!(newParent instanceof CardSet) &&
		!(newParent.constructor instanceof CardSet)
	) {
		throw new Error('parent of Card can only be an instance of CardSet');
	}

	if (this.parent) {
		this.parent.remove(this);
	}

	_parent.set(this, newParent);
}

function _getNumberIndex() {
	return this::_getNumber().value.index;
}

function _getSuitName() {
	return this::_getSuit().key;
}

function _getNumberName() {
	return this::_getNumber().key;
}

function _getSuitGroup() {
	return this::_getSuit().value;
}

function _getDeck() {
	return _deck.get(this);
}

function _emit(...args) {
	_config.get(this).emit(...args);
}

export default class Card {

	static compare(a: Card, b: Card, fn: Function) {
		return fn({
			sameSuit: a::_getSuitName() === b::_getSuitName(),
			sameSuitGroup: a::_getSuitGroup() === b::_getSuitGroup(),
			sameNumber: a::_getNumberName() === a::_getNumberName(),
			numberDiff: a::_getNumberIndex() - b::_getNumberIndex(),
		});
	}

	get parent() {
		return _parent.get(this);
	}

	get deck() {
		return _deck.get(this);
	}

	constructor(suit, number, deck, config) {
		_suit.set(this, config.suits.get(suit));
		_number.set(this, config.numbers.get(number));
		_deck.set(this, deck);
		_config.set(this, config);

		this::_emit('card:create', this);
	}

	isSameSuit(card: Card) {
		return Card.compare(this, card, ({sameSuit}) => sameSuit);
	}

	isSameSuitGroup(card: Card) {
		return Card.compare(this, card, ({sameSuitGroup}) => sameSuitGroup);
	}

	isDiff(card, diff) {
		if (typeof diff === 'number') {
			diff = (numberDiff) => numberDiff === diff;
		}

		return Card.compare(this, card, ({numberDiff}) => diff(numberDiff));
	}

	isSameNumber(card: Card) {
		return this.isDiff(card, 0);
	}

	isGreaterThan(card: Card) {
		return this.isDiff(card, diff => diff > 0);
	}

	isLessThan(card: Card) {
		return this.isDiff(card, diff => diff < 0);
	}

	isPlusOne(card: Card) {
		return this.isDiff(card, 1);
	}

	isMinusOne(card: Card) {
		return this.isDiff(card, -1);
	}

	toString() {
		return `Card {${this::_getSuitName()}, ${this::_getNumberName()}}`;
	}
}