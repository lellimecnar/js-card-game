import Player from './Player';

const _players = new WeakMap();

function _getPlayers() {
	return _players.get(this);
}

function cleanPlayers(players) {
	return players.filter(player => player instanceof Player);
}

export default class Round {
	constructor(players: Array = []) {
		if (!Array.isArray(players)) {
			players = [players];
		}

		_players.set(this, cleanPlayers(players));
	}

	addPlayer(player: Player) {
		this::_getPlayers().push(player);

		return this;
	}

	start() {
		this.eachPlayer(player => {
			player.deck.shuffle();
			player.resetScore();
		});

		return this;
	}

	eachPlayer(fn) {
		this::_getPlayers().forEach(fn);
	}

	mapPlayers(fn) {
		return this::_getPlayers().map(fn);
	}
}