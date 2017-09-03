import Card from '../Card';
import CardSet from '../CardSet';

export default class Deck extends CardSet {

	get SUITS() {
		return this._suits;
	}

	get NUMBERS() {
		return this._numbers;
	}

	get player() {
		return this._player;
	}

	constructor({suits, numbers}, player) {
		super();
		this._suits = suits;
		this._numbers = numbers;
		this._player = player;

		suits.each(suit => {
			numbers.each(number => {
				this.add(new Card(suit, number, this));
			});
		});
	}
}