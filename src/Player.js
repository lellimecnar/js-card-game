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

	constructor(name: String, config) {
		this._name = name;
		this._config = config;
		this._deck = new Deck(config, this);
		this.resetScore();
	}

	addScore(num: Number) {
		this._score += num;
	}

	resetScore() {
		this._score = this._config.initialScore;
	}
}