import Card from './Card';
import CardSet from './CardSet';

export default class Deck extends CardSet {
	constructor() {
		const cards = [];

		Card.SUITS.each(suit => {
			Card.NUMBERS.each(number => {
				cards.push(new Card(suit, number));
			});
		});

		super(cards);
	}
}