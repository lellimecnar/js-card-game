import Card from '../Card';
import CardSet from '../CardSet';
import Deck from '../Deck';
import Player from '../Player';
import Round from '../Round';

import Config from './Config';

const _rounds = new WeakMap();

function _getRounds() {
	return _rounds.get(this);
}

export default class CardGame {

	static get Config() {
		return Config;
	}

	static get Card() {
		return Card;
	}

	static get CardSet() {
		return CardSet;
	}

	static get Deck() {
		return Deck;
	}

	static get Player() {
		return Player;
	}

	static get Round() {
		return Round;
	}

	get currentRound() {
		return this::_getRounds().slice(-1)[0];
	}

	constructor(config, players: Array<Player>|Array<String>) {
		config = config || {};

		if (!(config instanceof Config)) {
			config = new Config(config);
		}

		this._config = config;

		_rounds.set(this, [new Round(config)]);

		this.addPlayers(players);
	}

	addPlayer(player: Player|String) {
		if (player && typeof player === 'string') {
			player = new Player(player, this._config);
		}

		this.currentRound.addPlayer(player);

		return this;
	}

	addPlayers(players: Array<Player>) {
		if (!Array.isArray(players)) {
			players = [players];
		}

		players.forEach(::this.addPlayer);

		return this;
	}

	startRound() {
		this.currentRound.start();

		return this;
	}

	finishRound() {
		this.currentRound.finish();

		return this;
	}

	newRound(players: Array) {
		players = this.currentRound.mapPlayers(player => player).concat(players || []);

		this::_getRounds().push(new Round(this._config).addPlayers(players));

		return this;
	}


	on(...args) {
		this._config.on(...args);

		return this;
	}

	once(...args) {
		this._config.once(...args);

		return this;
	}

	off(...args) {
		this._config.off(...args);

		return this;
	}
}