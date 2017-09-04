import Card, {_getSuit, _getNumber, _setParent} from './Card';
import Emitter from 'tiny-emitter';

const _events = new WeakMap();
const _config = new WeakMap();

export function _emit(type, ...args) {
	_events.get(this).emit(type, this, ...args);
	_config.get(this).emit(`cardSet:${type}`, this, ...args);
}

export default class CardSet {
	get topCard() {
		const cards = this::_getCards();
		return cards[cards.length];
	}

	get length() {
		return this::_getCards().length;
	}

	constructor(cards: Array, config) {
		_config.set(this, config);
		_events.set(this, new Emitter());
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

				this::_emit('addCard', card);
			}
		});

		return this;
	}

	remove(card: Card) {
		this._cards.splice(this._cards.indexOf(card), 1);

		this::_emit('removeCard', card);

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
				this.canDrop(card) !== false
			) {
				this.add(card);
				this::_emit('dropCard', card);
			} else {
				this::_emit('rejectCard', card);
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

		this::_emit('shuffle', this);

		return this;
	}

	draw(count: Number) {
		const cards = this._cards.slice(-(count));
		this::_emit('drawCards', cards);

		return cards;
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

	on(...args) {
		this._events.on(...args);

		return this;
	}

	one(...args) {
		this._events.one(...args);

		return this;
	}

	off(...args) {
		this._events.off(...args);

		return this;
	}
}