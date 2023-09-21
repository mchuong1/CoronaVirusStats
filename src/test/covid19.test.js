import {transformISODate } from '../resource/covid19'
// import axios from 'axios'
// import { idText } from 'typescript'
jest.mock('axios')


test('Transform ISO date to MM-DD format', () => {
    expect(transformISODate("2011-10-05T14:48:00.000Z")).toBe("10-05")
})
