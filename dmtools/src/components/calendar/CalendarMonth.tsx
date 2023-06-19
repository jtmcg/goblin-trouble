import React from 'react';
import styled, { css } from 'styled-components';
import CalendarDaysTable from './CalendarDaysTable';
import { LunarData } from './CalendarMoons';

const CalendarMonthContainer = styled.div(({theme}) => css`
`);

const MonthName = styled.h3(({theme}) => css`
    
`);

interface CalendarMonthProps {
    name: string;
    numberOfDays: number;
    weekdays: string[];
    monthNotes: {[date: string]: string};
    lunarData: LunarData;
    daysToCurrentMonthSinceCalendarStart: number;
}

// Implementing for a symmetrical calendar for now
const CalendarMonth = ({name, numberOfDays, weekdays, monthNotes, lunarData, daysToCurrentMonthSinceCalendarStart}: CalendarMonthProps) => {
    
    return (
        <CalendarMonthContainer>
            <MonthName>
                {name}
            </MonthName>
            <CalendarDaysTable
                numberOfDays={numberOfDays}
                weekdays={weekdays}
                monthNotes={monthNotes}
                lunarData={lunarData}
                daysToCurrentMonthSinceCalendarStart={daysToCurrentMonthSinceCalendarStart}
                monthName={name}
            />
        </CalendarMonthContainer>
    )
}

export default CalendarMonth;