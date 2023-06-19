import React from 'react';
import styled, { css } from 'styled-components';
import CalendarDaysTable from './CalendarDaysTable';

const CalendarMonthContainer = styled.div(({theme}) => css`
`);

const MonthName = styled.h3(({theme}) => css`
    
`);

interface CalendarMonthProps {
    name: string;
    numberOfDays: number;
    weekdays: string[];
    monthNotes: {[date: string]: string};
}

// Implementing for a symmetrical calendar for now
const CalendarMonth = ({name, numberOfDays, weekdays, monthNotes}: CalendarMonthProps) => {
    
    return (
        <CalendarMonthContainer>
            <MonthName>
                {name}
            </MonthName>
            <CalendarDaysTable
                numberOfDays={numberOfDays}
                weekdays={weekdays}
                monthNotes={monthNotes}
            />
        </CalendarMonthContainer>
    )
}

export default CalendarMonth;