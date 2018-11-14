import StandardDeck from './deck';
export default StandardDeck;

const deck = new StandardDeck();

console.log(deck.cards.map(c => c.toString()));
