import React from 'react';
import styled, { css } from 'styled-components';
import CalendarMonth from './CalendarMonth';
import useFetchCalendarData from '../../api-hooks/useFetchCalendarData';
import getMonthData from '../../utils/calendarDataUtils';

const CalendarBodyContainer = styled.div(({theme}) => css`
`);

const CalendarBody = () => {
    const { data: calendarData, isLoading, isError } = useFetchCalendarData();
    if (isLoading) return null;
    if (isError || !calendarData) return <h1>Error: missing data</h1>

    const {year_len,
        events,
        n_months,
        months,
        month_len,
        week_len,
        weekdays,
        n_moons,
        moons,
        lunar_cyc,
        lunar_shf,
        year,
        first_day,
        notes} = calendarData;
 
    return (
        <CalendarBodyContainer><h2>Year: {year}</h2>
            {months.map((currentMonth) => {
                const numberOfDaysInMonth = month_len[currentMonth];
                const monthNotes = getMonthData(notes, months, currentMonth, year)

                return (
                    <CalendarMonth 
                        name={currentMonth}
                        numberOfDays={numberOfDaysInMonth}
                        weekdays={weekdays}
                        monthNotes={monthNotes}
                        />)
                })
            }
        </CalendarBodyContainer>
    )
}

export default CalendarBody;