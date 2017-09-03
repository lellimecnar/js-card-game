import Card, {_getSuit, _getNumber, _setParent} from './Card';

const _cards = new WeakMap();

function _getCards() {
	return _cards.get(this);
}

function cleanCards(cards) {
	return cards.filter(card => card instanceof Card);
}

function retTrue() {
	return true;
}

export default class CardSet {
	get topCard() {
		const cards = this::_getCards();
		return cards[cards.length];
	}

	get length() {
		return this::_getCards().length;
	}

	constructor(cards: Array = []) {
		if (!Array.isArray(cards)) {
			cards = [cards];
		}
		_cards.set(this, cleanCards(cards));
	}

	add(newCards: Array|Card) {
		if (newCards instanceof Card) {
			newCards = [newCards];
		}

		const cards = this::_getCards();
		cleanCards(newCards).forEach(card => {
			cards.push(card);
			card::_setParent(this);
		});

		return this;
	}

	remove(card: Card) {
		const cards = this::_getCards();
		cards.splice(cards.indexOf(card), 1);

		return this;
	}

	drop(newCards: Array|Card) {
		if (!Array.isArray(newCards)) {
			newCards = [newCards];
		}

		cleanCards(newCards).forEach(card => {
			if (!this.canDrop || this.canDrop(card)) {
				this.add(card);
			}
		});

		return this;
	}

	shuffle() {
		let cards = this::_getCards();
		let tmp, current;
		let top = cards.length;

		if (top) while(--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = cards[current];
			cards[current] = cards[top];
			cards[top] = tmp;
		}

		return this;
	}

	draw(count: Number) {
		return this::_getCards().slice(-(count));
	}

	each(fn) {
		this::_getCards().forEach((card, i) => {
			fn(card, i, card::_getSuit(), card::_getNumber());
		});
	}

	map(fn) {
		return this::_getCards().map((card, i) => {
			return fn(card, i, card::_getSuit(), card::_getNumber());
		});
	}
}