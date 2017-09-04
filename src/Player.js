import Deck from './Deck';

const _name = new WeakMap();
const _config = new WeakMap();
const _deck = new WeakMap();
const _score = new WeakMap();

function _emit(...args) {
	_config.get(this).emit(...args);
}

function _getConfig() {
	return _config.get(this);
}

export default class Player {

	get name() {
		return _name.get(this);
	}

	get deck() {
		return _deck.get(this);
	}

	get score() {
		return _score.get(this);
	}

	constructor(name: String, config) {
		_name.set(this, name);
		_config.set(this, config);
		_deck.set(this, new Deck(config, this));

		this.resetScore();

		this::_emit('player:create', this);
	}

	addScore(num: Number) {
		let oldScore = this.score;
		_score.set(this, oldScore + num);

		this::_emit('player:addScore', this, oldScore, this.score);

		return this;
	}

	resetScore() {
		_score.set(this, this::_getConfig().initialScore);

		this::_emit('player:resetScore', this);

		return this;
	}
}