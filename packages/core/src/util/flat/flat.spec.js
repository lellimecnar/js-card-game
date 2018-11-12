import flat from './';

describe('flat', () => {
	test('accepts non-array arguments', () => {
		expect(flat(1,2,3))
			.toEqual([1,2,3])
	});
	
	test('accepts an array', () => {
		expect(flat([1,2,3]))
			.toEqual([1,2,3]);
	});
	
	test('combines array and non-array arguments', () => {
		expect(flat(1,[2],3))
			.toEqual([1,2,3]);
	});
	
	test('flattens and combines multiple array arguments', () => {
		expect(flat([1,2,3], [4,5,6]))
			.toEqual([1,2,3,4,5,6]);
	});
	
	test('flattens a nested array', () => {
		expect(flat([1,[2,3]]))
			.toEqual([1,2,3]);
	});
	
	test('flattens deeply nested arrays', () => {
		expect(flat([1,[2,[3]]]))
			.toEqual([1,2,3]);
	});
	
	test('flattens and combines multiple nested arrays', () => {
		expect(flat([1,[2]], [3,[4]]))
			.toEqual([1,2,3,4]);
	});
	
	test('flattens and combines multiple deeply-nested arrays', () => {
		expect(flat([1,[2,[3]]], [4,[5,[[6]]]]))
			.toEqual([1,2,3,4,5,6]);
	});
	
	test('can be bound to array', () => {
		expect([1,[2],[3,4,[5,6]]]::flat())
			.toEqual([1,2,3,4,5,6]);
	});
});
