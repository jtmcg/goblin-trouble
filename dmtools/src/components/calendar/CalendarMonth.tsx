import React from 'react';
import styled, { css } from 'styled-components';
import CalendarDaysTable from './CalendarDaysTable';

const CalendarMonthContainer = styled.div(({theme}) => css`
    border: ${theme.borderStyle.solidblackthin};
    border-radius: ${theme.borderRadius.soft};
`);

const MonthName = styled.h3(({theme}) => css`
    
`);

const CalendarMonth = () => {
    return (
        <CalendarMonthContainer>
            <MonthName>
                Month Name
            </MonthName>
            <CalendarDaysTable/>
        </CalendarMonthContainer>
    )
}

export default CalendarMonth;