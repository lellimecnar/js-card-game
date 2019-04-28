import {
	Player,
} from '@card-game/core';
import UNOHand from '../hand';

export default class UNOPlayer extends Player {
	get hand(): UNOHand {
		return _(this).hand;
	}

	constructor() {
		super();

		_(this).hand = new UNOHand(this);
	}
}
