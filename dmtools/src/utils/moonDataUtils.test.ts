import {calculateMoonPhases, computeMoonSprite} from './moonDataUtils';

describe('calculateMoonPhases', () => {
    describe('when there is only one, geosynchronous moon', () => {
        const lunarData = {
            numberOfMoons: 1,
            moonNames: ["luna"],
            lunarCycle: {"0": 0},
            lunarShift: {"0": 0},
        }

        it("should return 0", () => {
            expect(calculateMoonPhases(lunarData, 0)).toMatchObject([0]);
        })
    })

    describe('when there is only one moon with a 28 day cycle and no shift', () => {
        const lunarData = {
            numberOfMoons: 1,
            moonNames: ["luna"],
            lunarCycle: {"0": 28},
            lunarShift: {"0": 0},
        }

        describe('and it is the 2nd day of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 1;
            it("should return 0", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([1/lunarData.lunarCycle["0"]]);
            })
        })

        describe('and it is 187 days since the start of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 187;
            it("should return 19/28", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([19/28])
            })
        })
    })

    describe('when there is only one moon without a name', () => {
        const lunarData = {
            numberOfMoons: 1,
            moonNames: [],
            lunarCycle: {"0": 28},
            lunarShift: {"0": 0},
        }

        describe('and it is the 2nd day of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 1;
            it("should return 0", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([1/lunarData.lunarCycle["0"]]);
            })
        })

        describe('and it is 187 days since the start of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 187;
            it("should return 19/28", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([19/28])
            })
        })
    })

    describe('when there is only one moon with a 28 day cycle and a shift', () => {
        const lunarData = {
            numberOfMoons: 1,
            moonNames: ["luna"],
            lunarCycle: {"0": 28},
            lunarShift: {"0": 14},
        }

        describe('and it is the 2nd day of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 1;
            it("should return 15/28", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([15/28]);
            })
        })

        describe('and it is 14 days since the start of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 14;
            it("should return 0", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([0])
            })
        })
        
        describe('and it is 187 days since the start of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 187;
            it("should return 5/28", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([5/28])
            })
        })
    })
    
    describe('when there are two moons with different day cycles and shifts', () => {
        const lunarData = {
            numberOfMoons: 2,
            moonNames: ["ruidis", "catha"],
            lunarCycle: {"0": 30, "1": 186},
            lunarShift: {"0": 2, "1": 0},
        }

        describe('and it is the first day of the calendar', () => {
            const daysToCurrentMonthSinceCalendarStart = 0;
            it("should return [28/30, 0]", () => {
                expect(calculateMoonPhases(lunarData, daysToCurrentMonthSinceCalendarStart)).toMatchObject([28/30, 0]);
            })
        })
    })
})

describe('computeMoonSprite', () => {
    describe('when the moonPhase is 0', () => {
        it('returns 0', () => {
            expect(computeMoonSprite(0)).toBe(0);
        })
    })

    describe('when the moonPhase is 0.5', () => {
        it('returns -512', () => {
            expect(computeMoonSprite(0.5)).toBe(-512);
        })
    })
})