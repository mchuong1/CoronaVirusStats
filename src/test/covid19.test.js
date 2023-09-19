import {transformISODate, getSummary, getDayOneTotalAllStatus, getWorldTotalWIP } from '../resource/covid19'
import axios from 'axios'
import { idText } from 'typescript'
jest.mock('axios')


test('Transform ISO date to MM-DD format', () => {
    expect(transformISODate("2011-10-05T14:48:00.000Z")).toBe("10-05")
})

it('returns the summary of covid19 status', async () => {
    axios.get.mockResolvedValue({
        data: [
            {
               test: 'test'
            }
        ]
    });
    const summary = await getSummary();
    expect(summary).toEqual([{"test": "test"}]);
})

it('returns the stats since day one of covid19', async () => {
    axios.get.mockResolvedValue({
        data: [
            {
               test: 'test'
            }
        ]
    });
    const summary = await getDayOneTotalAllStatus();
    expect(summary).toEqual([{"test": "test"}]);
})

it('returns the stats of the world WIP covid19', async () => {
    axios.get.mockResolvedValue({
        data: [
            {
               test: 'test'
            }
        ]
    });
    const summary = await getWorldTotalWIP();
    expect(summary).toEqual([{"test": "test"}]);
})
