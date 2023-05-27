import React from 'react';
import styled, { css } from 'styled-components';
import CalendarMonth from './CalendarMonth';

const CalendarBodyContainer = styled.div(({theme}) => css`
`);

const CalendarBody = () => {
    return (
        <CalendarBodyContainer><h2>Calendar Body</h2>
            <CalendarMonth/>
        </CalendarBodyContainer>
    )
}

export default CalendarBody;