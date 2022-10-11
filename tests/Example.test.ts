import { sum } from '@/index'

describe('The sum function', () => {
	test('works as expected', () => {
		expect(sum(2, 2)).toEqual(4);
	})
})