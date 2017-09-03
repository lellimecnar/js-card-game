import Enum from 'enum';

export default class CardSuitSet extends Enum {
	constructor(keys: Array|Object) {
		super(keys, {
			name: 'CardSuitSet',
			freez: true,
		});
	}

	each(fn) {
		this.enums.forEach(suit => fn(suit.key));
	}
}