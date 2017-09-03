import Player from './Player';

export default class Round {
	constructor(config) {
		this._config = config;
		this._players = [];
	}

	addPlayer(player: Player) {
		if (
			player instanceof Player &&
			this._players.indexOf(player) < 0
		) {
			this._players.push(player);
		}

		return this;
	}

	addPlayers(players: Array<Player>) {
		players.forEach(player => this.addPlayer(player));

		return this;
	}

	start() {
		this.eachPlayer(player => {
			player.deck.shuffle();
			player.resetScore();
		});

		return this;
	}

	finish() {
		return this;
	}

	eachPlayer(fn) {
		this._players.forEach(fn);

		return this;
	}

	mapPlayers(fn) {
		return this._players.map(fn);
	}
}