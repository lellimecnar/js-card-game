import {
	Deck,
} from '@card-game/core';
import range from 'lodash/range';

import UNOCard from '../card';

const SUITS = ['RED','GREEN','BLUE','YELLOW'];
const RANKS = ['ZERO','ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','SKIP','DRAW_TWO','REVERSE'];
const WILDS = ['WILD','DRAW_FOUR'];

export default class UNODeck extends Deck {
	static get SUITS() {
		return SUITS;
	}
	
	static get RANKS() {
		return RANKS;
	}
	
	static get WILDS() {
		return WILDS;
	}
	
	static get Card() {
		return UNOCard;
	}

	constructor(owner) {
		super();

		const {
			SUITS,
			RANKS,
			WILDS,
			Card,
		} = this.constructor;
		const cards = [];
		
		SUITS.forEach((suit) => {
			RANKS.forEach((rank) => {
				const count = rank === 'ZERO' ? 1 : 2;
				
				range(count).forEach(() => {
					cards.push(new Card(suit, rank, owner));
				})
			});
		});
		
		WILDS.forEach((rank) => {
			range(4).forEach(() => {
				cards.push(new Card('WILD', rank, owner));
			});
		});
		
		this._cards = cards;
	}
}
