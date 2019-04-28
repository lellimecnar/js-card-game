import {
	CardSet,
} from '@card-game/core';

export default class UNODiscardPile extends CardSet {
	canDrop(card) {
		const isSameSuit = _(this).suit == _(card).suit;
		const isSameRank = _(this).rank == _(card).rank;
		const isWild = _(this).suit === 'WILD';

		return isSameSuit || isSameRank || isWild;
	}
}
