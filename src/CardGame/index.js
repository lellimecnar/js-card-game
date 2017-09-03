import Card from '../Card';
import CardSet from '../CardSet';
import Deck from '../Deck';
import Player from '../Player';
import Round from '../Round';
import Preset from './Preset';

const _rounds = new WeakMap();

function _getRounds() {
	return _rounds.get(this);
}

export default class CardGame {

	static get Preset() {
		return Preset;
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

	constructor(config) {
		if (!(config instanceof Preset)) {
			config = new Preset(config);
		}

		this._config = config;

		_rounds.set(this, [new Round(config)]);
	}

	addPlayer(player: Player|String) {
		if (typeof player === 'string') {
			player = new Player(player, this._config);
		}

		this.currentRound.addPlayer(player);

		return this;
	}

	addPlayers(players: Array<Player>) {
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
}