import React from 'react';
import styled, { css } from 'styled-components';
import CalendarBody from './CalendarBody';

const CalendarContainer = styled.div(({theme}) => css`
    margin: ${theme.margin.large};
`);

const Calendar = () => {

    return (
        <CalendarContainer>
            <CalendarBody/>
        </CalendarContainer>
    )
}

export default Calendar;