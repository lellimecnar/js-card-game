import Enum from 'enum';

export default class CardNumberSet extends Enum {
	constructor(map: Array) {
		super(map, {
			name: 'CardNumberSet',
			freez: true,
		});
	}

	each(fn) {
		this.enums.forEach(number => fn(number.key));
	}
}