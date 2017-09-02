import Card from './Card';
import CardSet from './CardSet';
import Deck from './Deck';
import Player from './Player';
import Round from './Round';

export default class CardGame {
	static get Card() {
		return Card;
	}

	static get CardSet() {
		return CardSet;
	}

	static Deck() {
		return Deck;
	}

	static Player() {
		return Player;
	}

	static Round() {
		return Round;
	}
}