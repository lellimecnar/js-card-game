import {
	Deck,
} from '@card-game/core';
import StandardCard from '../card';

const SUITS = ['HEART','SPADE','CLUB','DIAMOND'];
const RANKS = ['ACE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','JACK','QUEEN','KING'];

export default class StandardDeck extends Deck {
	get SUITS() {
		return SUITS;
	}
	
	get RANKS() {
		return RANKS;
	}
	
	get Card() {
		return StandardCard;
	}
	
	constructor(owner) {
		super();

		const {
			SUITS,
			RANKS,
			Card,
		} = this.constructor;
		const cards = [];
		
		SUITS.forEach((suit) => {
			RANKS.forEach((rank) => {
				cards.push(new Card(suit, rank, owner));
			});
		});
		
		this._cards = cards;
	}
}
