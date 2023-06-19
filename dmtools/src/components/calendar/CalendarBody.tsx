import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import CalendarMonth from './CalendarMonth';
import useFetchCalendarData from '../../api-hooks/useFetchCalendarData';
import {computeDaysToCurrentMonthSinceCalendarStart, getMonthData} from '../../utils/calendarDataUtils';
import { LunarData } from './CalendarMoons';

const CalendarBodyContainer = styled.div(({theme}) => css`
`);

const CalendarBody = () => {
    const [year, setYear] = useState(0);
    
    const { data: calendarData, isLoading, isError } = useFetchCalendarData();
    if (isLoading) return null;
    if (isError || !calendarData) return <h1>Error: missing data</h1>

    const {year_len,
        months,
        month_len,
        weekdays,
        n_moons,
        moons,
        lunar_cyc,
        lunar_shf,
        notes} = calendarData;
    
    const lunarData: LunarData = {
        numberOfMoons: n_moons,
        moonNames: moons,
        lunarCycle: lunar_cyc,
        lunarShift: lunar_shf,
    }
 
    return (
        <CalendarBodyContainer><h1>Year: {year}</h1>
            {months.map((currentMonth) => {
                const numberOfDaysInMonth = month_len[currentMonth];
                const monthNotes = getMonthData(notes, months, currentMonth, year)
                const daysToCurrentMonthSinceCalendarStart = computeDaysToCurrentMonthSinceCalendarStart(year, year_len, currentMonth, month_len);
                return (
                    <CalendarMonth 
                        name={currentMonth}
                        numberOfDays={numberOfDaysInMonth}
                        weekdays={weekdays}
                        monthNotes={monthNotes}
                        lunarData={lunarData}
                        daysToCurrentMonthSinceCalendarStart={daysToCurrentMonthSinceCalendarStart}
                        key={daysToCurrentMonthSinceCalendarStart}
                        />)
                })
            }
        </CalendarBodyContainer>
    )
}

export default CalendarBody;