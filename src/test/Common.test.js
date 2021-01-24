import { addComma } from '../resource/Common'

test('Adds comma to the number', () => {
    expect(addComma(1000)).toBe("1,000")
})