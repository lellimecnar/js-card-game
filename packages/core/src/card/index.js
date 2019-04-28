import compact from 'lodash/compact';
import flattenDeep from 'lodash/flattenDeep';
import Player from '../player';
import EventClass from '../event-class';

/**
 * @class Card
 * @arg { Object } data The metadata for the card
 * @arg { Player } owner The owner of the card
 */
export default class Card extends EventClass {
	static isCard(...cards: Card[]): boolean {
		cards = compact(flattenDeep(cards));

		return (
			cards.length > 0 &&
			!cards.map(card => card instanceof Card).includes(false)
		);
	}

	get id(): string {
		if (_(this).suit && _(this).rank) {
			return [_(this).suit.name, _(this).rank.name].join(':');
		}

		return _(Card).cards.indexOf(this);
	}

	get owner(): Player {
		return _(this).owner;
	}

	constructor(data: Object, owner: Player) {
		super();

		_(this, data);
		_(this).owner = owner;

		[
			'suit',
			'rank',
		].forEach((key) => {
			if (typeof data[key] === 'undefined') {
				return;
			}

			Object.defineProperty(this, key, {
				get: () => _(this)[key],
			});
		});

		_(Card)._cards.add(this);
	}

	toString() {
		return `${ this.constructor.displayName }(${ this.id })`;
	}
}

_(Card)._cards = new Set();
Object.defineProperty(_(Card), 'cards', {
	get(): Card[] {
		return [..._(Card)._cards];
	},
});
