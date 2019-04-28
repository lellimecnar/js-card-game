import UNODeck from '@card-game/deck-uno';
import UNOPlayer from './player';
import UNOPile from './pile';
import UNODiscardPile from './discard-pile';


export default class UNOGame {
	get pile() {
		return _(this).pile;
	}

	get discardPile() {
		return _(this).discardPile;
	}

	get players(): UNOPlayer[] {
		return _(this).players;
	}

	constructor() {
		_(this).deck = new UNODeck();

		_(this).pile = new UNOPile();
		_(this).discardPile = new UNODiscardPile();

		_(this).players = [];
	}

	addPlayer(...args) {
		if (_(this).isStarted) {
			throw new Error('Players cannot be added once the Game has started.');
		}

		_(this).players.push(new UNOPlayer(...args));

		return this;
	}

	start() {
		this.pile._cards = _(this).deck.cards;

		this.pile.shuffle();

		this.players
			.forEach((player) => {
				this.pile.draw(7, player.hand);
			});

		this.pile.draw(1, this.discardPile);

		_(this).isStarted = true;

		return this;
	}
}