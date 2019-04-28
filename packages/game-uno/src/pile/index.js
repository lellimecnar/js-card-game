import {
	CardSet,
} from '@card-game/core';

export default class UNOPile extends CardSet {

	dropCard() {
		throw new Error('Dropping cards on UNOPile not allowed.');
	}

	canDrop() {
		false;
	}
}
