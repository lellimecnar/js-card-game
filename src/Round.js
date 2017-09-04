import Player from './Player';

const _config = new WeakMap();
const _players = new WeakMap();

function _getPlayers() {
	return _players.get(this);
}

function _emit(...args) {
	_config.get(this).emit(...args);
}

export default class Round {
	constructor(config) {
		_config.set(this, config);
		_players.set(this, []);

		this::_emit('round:create', this);
	}

	addPlayer(player: Player) {
		if (
			player instanceof Player &&
			this::_getPlayers().indexOf(player) < 0
		) {
			this::_getPlayers().push(player);
			this::_emit('round:addPlayer', this, player);
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

		this::_emit('round:start', this);
		return this;
	}

	finish() {

		this::_emit('round:finish', this);
		return this;
	}

	eachPlayer(fn) {
		this::_getPlayers().forEach(fn);

		return this;
	}

	mapPlayers(fn) {
		return this::_getPlayers().map(fn);
	}
}