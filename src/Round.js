import Player from './Player';

export default class Round {
	constructor(config) {
		this._config = config;
		this._players = [];

		this._config.emit('round:create', this);
	}

	addPlayer(player: Player) {
		if (
			player instanceof Player &&
			this._players.indexOf(player) < 0
		) {
			this._players.push(player);
			this._config.emit('round:addPlayer', this, player);
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

		this._config.emit('round:start', this);
		return this;
	}

	finish() {

		this._config.emit('round:finish', this);
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