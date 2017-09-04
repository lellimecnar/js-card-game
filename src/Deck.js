import Card from './Card';
import CardSet, {_emit} from './CardSet';

const _config = new WeakMap();
const _player = new WeakMap();

function _getConfig() {
	return _config.get(this);
}

export default class Deck extends CardSet {

	get suits() {
		return this::_getConfig().suits;
	}

	get numbers() {
		return this::_getConfig().numbers;
	}

	get player() {
		return _player.get(this);
	}

	constructor(config, player) {
		super(null, config);

		_config.set(this, config);
		_player.set(this, player);

		config.suits.each(suit => {
			config.numbers.each(number => {
				this.add(new Card(suit, number, this, config));
			});
		});


		this::_emit('deck:create', this);
	}

	canDrop() {
		return false;
	}
}