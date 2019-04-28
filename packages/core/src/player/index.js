import EventClass from '../event-class';

export default class Player {
	get score() {
		return _(this).score;
	}

	set score(newScore) {
		const currentScore = _(this).score;

		if (
			typeof newScore !== 'number' ||
			newScore === currentScore
		) {
			return;
		}

		_(this).score = newScore;

		const diff = newScore - currentScore;

		_(this).emit('scoreChange', newScore, diff, currentScore);

		const dir = newScore > currentScore ? 'up' : 'down';

		_(this).emit(`scoreChange:${ dir }`, newScore, diff, currentScore);
	}

	constructor(data) {
		super();

		_(this, data);
	}
}
