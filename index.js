const CardGame = require('./dist/CardGame.js');

const player = new CardGame.Player('Lance');
const round = new CardGame.Round([player]);

player.addScore(50);

function log() {
	console.log(round.mapPlayers(({name, deck, score}) => ({name, score, cards: deck.map((card, i, suit, number) => `${suit}:${number}`)})));
}

log();

round.start();

log();