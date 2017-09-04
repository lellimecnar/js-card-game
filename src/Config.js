import Enum from 'enum';
import Emitter from 'tiny-emitter';

const NUMBERS = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN','FIFTEEN','SIXTEEN','SEVENTEEN','EIGHTEEN','NINETEEN','TWENTY'];

const STANDARD_SUITS = {RED:['HEARTS','DIAMONDS'],BLACK:['CLUBS','SPADES']};
const STANDARD_NUMBERS = ['ACE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','JACK','QUEEN','KING'];

function constantCase(str) {
	return str.trim().replace(/\s+/g, '_').toUpperCase();
}

function makeRange(max) {
	return [...Array(max)].map((val, n) => NUMBERS[++n]);
}

class SuitEnum extends Enum {

	get length() {
		return this.enums.length;
	}

	constructor(suits) {
		let groups = {};
		let suitMap = {};

		if (!Array.isArray(suits)) {
			let flatSuits = [];
			let groupNames = Object.keys(suits);

			groupNames.forEach(name => {
				flatSuits = [...flatSuits, ...suits[name]];
				suits[name].forEach(suit => {
					groups[suit] = groupNames[name];
				});
			});

			suits = flatSuits;
		}

		suits.forEach((suit, i) => {
			suitMap[constantCase(suit)] = {
				index: i,
				group: groups[suit],
			};
		});

		super(suitMap);
	}

	each(fn) {
		this.enums.forEach(suit => fn(suit.key));
	}
}

class NumberEnum extends Enum {

	get length() {
		return this.enums.length;
	}

	constructor(numbers) {
		if (typeof numbers === 'number') {
			numbers = makeRange(numbers);
		}

		let values = {}
		let numberMap = {};

		if (!Array.isArray(numbers)) {
			let values = numbers;
			numbers = Object.keys(numbers);
		}

		numbers.forEach((number, i) => {
			numberMap[constantCase(number)] = {
				index: i,
				value: values[number],
			};
		});

		super(numberMap);
	}

	each(fn) {
		this.enums.forEach(number => fn(number.key));
	}
}

const _suits = new WeakMap();
const _numbers = new WeakMap();
const _initialScore = new WeakMap();
const _events = new WeakMap();

function _getEvents() {
	return _events.get(this);
}

export default class Config {

	get suits() {
		return _suits.get(this);
	}

	get numbers() {
		return _numbers.get(this);
	}

	get initialScore() {
		return _initialScore.get(this);
	}

	constructor({
		suits = STANDARD_SUITS,
		numbers = STANDARD_NUMBERS,
		initialScore = 0,
	} = {}) {
		_suits.set(this, new SuitEnum(suits));
		_numbers.set(this, new NumberEnum(numbers));
		_initialScore.set(this, initialScore);
		_events.set(this, new Emitter());
	}

	on(...args) {
		this::_getEvents().on(...args);

		return this;
	}

	once(...args) {
		this::_getEvents().once(...args);

		return this;
	}

	off(...args) {
		this::_getEvents().off(...args);

		return this;
	}

	emit(...args) {
		this::_getEvents().emit(...args);

		return this;
	}
}