import Enum from 'enum';

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

export default class Preset {
	get suits() {
		return this._suits;
	}

	get numbers() {
		return this._numbers;
	}

	get initialScore() {
		return this._initialScore;
	}

	constructor({
		suits = STANDARD_SUITS,
		numbers = STANDARD_NUMBERS,
		initialScore = 0,
	} = {}) {
		this._suits = new SuitEnum(suits);
		this._numbers = new NumberEnum(numbers);
		this._initialScore = initialScore;
	}
}