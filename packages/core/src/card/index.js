import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';

/**
 * @class Card
 * @arg { Object } data The metadata for the card
 * @arg { Player } owner The owner of the card
 */
export default class Card {
	static isCard(...cards) {
		cards = compact(flattenDeep(cards));

		return (
			cards.length > 0 &&
			!cards.map(card => card instanceof Card).includes(false)
		);
	}

	get id() {
		return _(Card).cards.indexOf(this);
	}

	get owner() {
		return _(this).owner;
	}

	constructor(data, owner) {
		Object.assign(_(this), data);
		_(this).owner = owner;
		
		_(Card)._cards.add(this);
	}
	
	toString() {
		return `${ this.constructor.name }(${ this.id })`;
	}
}

_(Card)._cards = new Set();
Object.defineProperty(_(Card), 'cards', {
	get() {
		return [..._(Card)._cards];
	},
});
