import {
	Deck,
} from '@card-game/core';
import RookCard from '../card';

const COLORS = ['RED','YELLOW','GREEN','BLACK'];
const NUMBERS = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN'];

export default class RookDeck extends Deck {
	constructor(owner) {
		const cards = [];
		
		COLORS.forEach((color) => {
			NUMBERS.forEach((number) => {
				cards.push(new RookCard(color, number, owner));
			});
		});
		
		super(cards);
	}
}
