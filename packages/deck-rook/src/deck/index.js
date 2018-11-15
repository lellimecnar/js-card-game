import StandardDeck from '@card-game/deck-standard/src/deck';
import RookCard from '../card';

const SUITS = ['RED','YELLOW','GREEN','BLACK'];
const RANKS = ['ONE','TWO','THREE','FOUR','FIVE','SIX','SEVEN','EIGHT','NINE','TEN','ELEVEN','TWELVE','THIRTEEN','FOURTEEN'];

export default class RookDeck extends StandardDeck {
	static get SUITS() {
		return SUITS;
	}

	static get RANKS() {
		return RANKS;
	}

	static get Card() {
		return RookCard;
	}
}
