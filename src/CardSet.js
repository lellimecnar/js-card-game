import Card, {_getSuit, _getNumber, _setParent} from './Card';

export default class CardSet {
	get topCard() {
		const cards = this::_getCards();
		return cards[cards.length];
	}

	get length() {
		return this::_getCards().length;
	}

	constructor(cards: Array, config) {
		this._config = config;
		this._cards = [];

		if (Array.isArray(cards)) {
			this.add(cards);
		}
	}

	add(newCards: Array|Card) {
		if (newCards instanceof Card) {
			newCards = [newCards];
		}

		newCards.forEach(card => {
			if (card instanceof Card) {
				this._cards.push(card);
				card::_setParent(this);
			}
		});

		return this;
	}

	remove(card: Card) {
		this._cards.splice(this._cards.indexOf(card), 1);

		return this;
	}

	drop(newCards: Array|Card) {
		if (!Array.isArray(newCards)) {
			newCards = [newCards];
		}

		newCards.forEach(card => {
			if (
				card instanceof Card &&
				!this.canDrop ||
				this.canDrop(card)
			) {
				this.add(card);
			}
		});

		return this;
	}

	shuffle() {
		let tmp, current;
		let top = this._cards.length;

		if (top) while(--top) {
			current = Math.floor(Math.random() * (top + 1));
			tmp = this._cards[current];
			this._cards[current] = this._cards[top];
			this._cards[top] = tmp;
		}

		return this;
	}

	draw(count: Number) {
		return this._cards.slice(-(count));
	}

	each(fn) {
		this._cards.forEach((card, i) => {
			fn(card, i, card::_getSuit(), card::_getNumber());
		});
	}

	map(fn) {
		return this._cards.map((card, i) => {
			return fn(card, i, card::_getSuit(), card::_getNumber());
		});
	}
}