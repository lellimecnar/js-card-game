import {
	Deck,
} from '@card-game/core';
import StandardCard from '../card';

const SUITS = ['HEART','SPADE','CLUB','DIAMOND'];
const RANKS = ['ACE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','JACK','QUEEN','KING'];

export default class StandardDeck extends Deck {
	constructor(owner) {
		const cards = [];
		
		SUITS.forEach((suit) => {
			RANKS.forEach((rank) => {
				cards.push(new StandardCard(suit, rank, owner));
			});
		});
		
		super(cards);
	}
}
