import React from 'react';
import styled, { css } from 'styled-components';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

const CalendarContainer = styled.div(({theme}) => css`
    margin: ${theme.margin.large};
`);

const Calendar = () => {
    return (
        <CalendarContainer>
            <CalendarHeader/>
            <CalendarBody/>
        </CalendarContainer>
    )
}

export default Calendar;