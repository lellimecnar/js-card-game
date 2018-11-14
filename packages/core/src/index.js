import Card from './card';
import CardSet from './cardset';
import Deck from './deck';

export {
	Card,
	CardSet,
	Deck,
}

export default class CardGame {
	static get Card() {
		return Card;
	}

	static get CardSet() {
		return CardSet;
	}
}
