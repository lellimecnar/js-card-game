const CardGame = require('./dist/CardGame.js');

const game = new CardGame();

game.addPlayer('Lance')
	.startRound();