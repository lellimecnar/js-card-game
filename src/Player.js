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

		this._config.emit('player:create', this);
	}

	addScore(num: Number) {
		let oldScore = this._score;
		this._score += num;

		this._config.emit('player:addScore', this, oldScore, this._score);

		return this;
	}

	resetScore() {
		this._score = this._config.initialScore;

		this._config.emit('player:resetScore', this);

		return this;
	}
}