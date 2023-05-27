import getMonthData, { getMonthIndexFromDateKey, getYearIndexFromDateKey } from './getMonthData';

const calendarData = {
    "1989-1-16": "Tyler's Birthday",
    "1990-7-28": "Olivia's Birthday",
}

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
]

describe('getMonthIndexFromDateKey', () => {
    describe('given the date key 1989-1-16', () => {
        it('returns 1', () => {
            expect(getMonthIndexFromDateKey('1989-1-16')).toBe('1')
        })
    })

    describe('given the date key 1990-7-28', () => {
        it('returns 1', () => {
            expect(getMonthIndexFromDateKey('1990-7-28')).toBe('7')
        })
    })
})

describe('getYearIndexFromDateKey', () => {
    describe('given the date key 1989-1-16', () => {
        it('returns 1989', () => {
            expect(getYearIndexFromDateKey('1989-1-16')).toBe('1989')
        })
    })

    describe('given the date key 1990-7-28', () => {
        it('returns 1990', () => {
            expect(getYearIndexFromDateKey('1990-7-28')).toBe('1990')
        })
    })
})

describe.only('getMonthData', () => {
    describe('given the month January and year 1989', () => {
        const currentMonth = 'January';
        const year = 1989;
        it('returns only the event data for January 1989', () => {
            expect(getMonthData(calendarData, months, currentMonth, year)).toMatchObject({"1989-1-16": "Tyler's Birthday"})
        })
    })

    describe('when given a different month July and year 1990', () => {
        const currentMonth = "July";
        const year = 1990;
        it('returns only the event data for that July, 1990', () => {
            expect(getMonthData(calendarData, months, currentMonth, year)).toMatchObject({"1990-7-28": "Olivia's Birthday"})
        })
    })
})