import { getMonthData, computeDaysToCurrentMonthSinceCalendarStart, getDayIndexFromDateKey, getMonthIndexFromDateKey, getYearIndexFromDateKey, computePassedMonthsArray } from './calendarDataUtils';

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

const monthLength = {
    "January": 31,
    "February": 28,
    "March": 31,
    "April": 30,
    "May": 31,
    "June": 30,
    "July": 31,
    "August": 31,
    "September": 30,
    "October": 31,
    "November": 30,
    "December": 31,
}

const yearLength = 365;

describe('getDayIndexFromDateKey', () => {
    describe('given the date key 1989-1-16', () => {
        it('returns 16', () => {
            expect(getDayIndexFromDateKey('1989-1-16')).toBe('16')
        })
    })

    describe('given the date key 1990-7-28', () => {
        it('returns 28', () => {
            expect(getDayIndexFromDateKey('1990-7-28')).toBe('28')
        })
    })
})

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

describe('getMonthData', () => {
    describe('given the month January and year 1989', () => {
        const currentMonth = 'January';
        const year = 1989;
        it('returns only the event data for January 1989', () => {
            expect(getMonthData(calendarData, months, currentMonth, year)).toMatchObject({"16": "Tyler's Birthday"})
        })
    })

    describe('when given a different month July and year 1990', () => {
        const currentMonth = "July";
        const year = 1990;
        it('returns only the event data for that July, 1990', () => {
            expect(getMonthData(calendarData, months, currentMonth, year)).toMatchObject({"28": "Olivia's Birthday"})
        })
    })
})

describe('computeDaysToCurrentMonthSinceCalendarStart', () => {
    describe('given the first month of the first year', () => {
        const currentMonth = "January";
        const year = 0;
        it('should return 0', () => {
            expect(computeDaysToCurrentMonthSinceCalendarStart(year, yearLength, currentMonth, monthLength)).toBe(0);
        })
    })

    describe('given the last month of the 10th year', () => {
        const currentMonth = "December";
        const year = 10;
        it('should return 3650+365-31', () => {
            expect(computeDaysToCurrentMonthSinceCalendarStart(year, yearLength, currentMonth, monthLength)).toBe(3650+365-31);
        })
    })
})

describe('computePassedMonthsArray', () => {
    describe('given the first month', () => {
        const currentMonth = "January";
        it('should return an empty array', () => {
            expect(computePassedMonthsArray(months, currentMonth)).toMatchObject([]);
        })
    })

    describe('given the last month', () => {
        const currentMonth = "December";
        it('should return an array without December', () => {
            expect(computePassedMonthsArray(months, currentMonth)).toMatchObject(["January",
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
            ]);
        })
    })
})