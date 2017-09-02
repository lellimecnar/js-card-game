const CardGame = require('./dist/CardGame.js');

CardGame.Card.config(CardGame.Card.PRESETS.ROOK);

const card1 = new CardGame.Card('BLACK', 'SIX');
const card2 = new CardGame.Card('RED', 'FIVE');

console.log(card1.isSameSuitGroup(card2));