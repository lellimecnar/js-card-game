import {
	Deck,
} from '@card-game/core';
import RookCard from '../card';

const SUITS = ['RED','YELLOW','GREEN','BLACK'];
const RANKS = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN'];

export default class RookDeck extends Deck {
	constructor(owner) {
		const cards = [];
		
		SUITS.forEach((suit) => {
			RANKS.forEach((rank) => {
				cards.push(new RookCard(suit, rank, owner));
			});
		});
		
		super(cards);
	}
}
