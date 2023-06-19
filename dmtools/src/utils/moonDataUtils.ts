import { LunarData } from "../components/calendar/CalendarMoons";

// Return values are ratio of cycle
export const calculateMoonPhases = (lunarData: LunarData, daysToCurrentMonthSinceCalendarStart: number) => {
    const {moonNames, lunarCycle, lunarShift} = lunarData;
    
    const moonPhases = Object.keys(lunarCycle).map((_, index) => (
        lunarCycle[index] ? 
            ((daysToCurrentMonthSinceCalendarStart  + lunarCycle[index] - lunarShift[index]) % lunarCycle[index])/lunarCycle[index]
            : 0));

    return moonPhases;
}

const MOON_SPRITE_WIDTH_PX = 32;
const NUM_MOON_PHASES_ON_SPRITE = 32;

export const computeMoonSprite = (moonPhase: number) => {
    return -1 * Math.floor(NUM_MOON_PHASES_ON_SPRITE * moonPhase) * MOON_SPRITE_WIDTH_PX;
}