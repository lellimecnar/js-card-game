import Enum from 'enum';

import CardSuitSet from './CardSuitSet';
import CardNumberSet from './CardNumberSet';

const _suit = new WeakMap();
const _number = new WeakMap();
const _group = {};
const config = {};

const NUMBERS = '|ONE|TWO|THREE|FOUR|FIVE|SIX|SEVEN|EIGHT|NINE|TEN|ELEVEN|TWELVE|THIRTEEN|FOURTEEN|FIFTEEN|SIXTEEN|SEVENTEEN|EIGHTEEN|NINETEEN|TWENTY'.split('|');

function makeRange(max) {
	return [...Array(max)].map((val, n) => NUMBERS[++n]);
}

function _getNumberIndex() {
	return Card.NUMBERS.enums.indexOf(_number.get(this));
}

function _getSuitName() {
	return _suit.get(this).key;
}

function _getSuitGroup() {
	return _group[this::_getSuitName()];
}

const PRESETS = new Enum(['STANDARD','ROOK'], {freez: true});

const NUMBER_PRESETS = {
	[PRESETS.STANDARD]: ['ACE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','JACK','QUEEN','KING'],
	[PRESETS.ROOK]: makeRange(14),
};

const SUIT_PRESETS = {
	[PRESETS.STANDARD]: {RED:['HEARTS','DIAMONDS'],BLACK:['CLUBS','SPADES']},
	[PRESETS.ROOK]: ['BLACK','RED','YELLOW','GREEN'],
};

export default class Card {
	static get PRESETS() {
		return PRESETS;
	}

	static get SUITS() {
		return config.suits;
	}

	static get hasSuitGroups() {
		return !!Card.SUIT_GROUPS;
	}

	static get SUIT_GROUPS() {
		return config.groups;
	}

	static get NUMBERS() {
		return config.numbers;
	}

	static config({
		preset,
		suits,
		numbers,
		maxNumber,
	}) {
		preset = preset || arguments[0];
		suits = SUIT_PRESETS[preset] || suits;
		numbers = NUMBER_PRESETS[preset] || numbers;

		if (suits) {
			if (!Array.isArray(suits)) {
				let flatSuits = [];

				let groupNames = Object.keys(suits);
				config.groups = new Enum(groupNames, {freez: true});
				groupNames.forEach(name => {
					flatSuits = [...flatSuits, ...suits[name]];
					suits[name].forEach(suit => {
						_group[suit] = Card.SUIT_GROUPS[name];
					});
				});

				suits = flatSuits;
			} else {
				delete config.groups;
			}

			config.suits = new CardSuitSet(suits);
		}

		if (!preset && !numbers && typeof maxNumber === 'number') {
			numbers = makeRange(maxNumber);
		}

		if (numbers) {
			config.numbers = new CardNumberSet(numbers);
		}
	}

	constructor(suit, number) {
		if (!Card.SUITS.get(suit)) {
			throw new Error(`"${suit}" is not a valid suit`);
		}
		if (!Card.NUMBERS.get(number)) {
			throw new Error(`"${number}" is not a valid number`);
		}

		_suit.set(this, Card.SUITS.get(suit));
		_number.set(this, Card.NUMBERS.get(number));
	}

	isSameSuit(card: Card) {
		return this::_getSuitName() === card::_getSuitName();
	}

	isSameSuitGroup(card: Card) {
		return Card.hasSuitGroups ? this::_getSuitGroup() === card::_getSuitGroup() : this.isSameSuit(card);
	}

	isSameNumber(card: Card) {
		return this::_getNumberIndex() === card::_getNumberIndex();
	}

	isGreaterThan(card: Card) {
		return this::_getNumberIndex() > card::_getNumberIndex();
	}

	isLessThan(card: Card) {
		return this::_getNumberIndex() < card::_getNumberIndex();
	}

	isPlusOne(card: Card) {
		return this::_getNumberIndex() - 1 === card::_getNumberIndex();
	}

	isMinusOne(card: Card) {
		return this::_getNumberIndex() + 1 === card::_getNumberIndex();
	}
}

Card.config(PRESETS.STANDARD);