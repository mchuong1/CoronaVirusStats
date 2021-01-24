import {transformISODate } from '../resource/covid19'

test('Transform ISO date to MM-DD format', () => {
    expect(transformISODate("2011-10-05T14:48:00.000Z")).toBe("10-05")
})