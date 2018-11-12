import CardGame, {
	Card,
	CardSet,
	Deck,
} from '@card-game/core';

export default class NertGame extends CardGame {
	static get Card() {
		return NertCard;
	}

	static get Deck() {
		return NertDeck;
	}
	
	static get Hand() {
		return NertHand;
	}
}

class NertCard extends Card {
	
}

class NertDeck extends Deck {
	
}

class NertHand extends CardSet {
	
}
