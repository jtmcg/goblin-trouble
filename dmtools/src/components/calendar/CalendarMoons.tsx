import React from 'react';
import styled, {css} from 'styled-components';
import { calculateMoonPhases, computeMoonSprite } from '../../utils/moonDataUtils';

const CalendarDayHeaderMoonsContainer = styled.div(({theme}) => css`

`)

const MoonSprite = styled.div<{moonPhase: number}>(({theme, moonPhase}) => css`
    background-image: url(moonsprites.png);
    height: 32px;
    width: 32px;
    overflow: hidden;
    background-position: ${computeMoonSprite(moonPhase)}px 0px;
`)

export interface LunarData {
    numberOfMoons: number,
    moonNames: string[],
    lunarCycle: {[moonIndex: string]: number};
    lunarShift: {[moonIndex: string]: number};
}

interface CalendarMoonProps {
    lunarData: LunarData;
    daysSinceCalendarStart: number;
}

const CalendarMoons = ({lunarData, daysSinceCalendarStart}: CalendarMoonProps) => {
    const moonPhases = calculateMoonPhases(lunarData, daysSinceCalendarStart);
    return (
        <CalendarDayHeaderMoonsContainer>
            {moonPhases.map((moonPhase) => <MoonSprite moonPhase={moonPhase} key={moonPhase}/>)}
        </CalendarDayHeaderMoonsContainer>
)}

export default CalendarMoons;