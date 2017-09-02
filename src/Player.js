import Deck from './Deck';

export default class Player {
	get name() {
		return this._name;
	}

	get deck() {
		return this._deck;
	}

	get score() {
		return this._score;
	}

	constructor(name: String) {
		this._name = name;
		this._deck = new Deck();
		this._score = 0;
	}

	addScore(num: Number) {
		this._score += num;
	}
}