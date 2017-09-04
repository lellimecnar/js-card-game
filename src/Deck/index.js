import Card from '../Card';
import CardSet, {_emit} from '../CardSet';

export default class Deck extends CardSet {

	get SUITS() {
		return this._config.suits;
	}

	get NUMBERS() {
		return this._config.numbers;
	}

	get player() {
		return this._player;
	}

	constructor(config, player) {
		super(null, config);

		this._config = config;
		this._player = player;

		this.SUITS.each(suit => {
			this.NUMBERS.each(number => {
				this.add(new Card(suit, number, this, config));
			});
		});


		this::_emit('deck:create', this);
	}

	canDrop() {
		return false;
	}
}