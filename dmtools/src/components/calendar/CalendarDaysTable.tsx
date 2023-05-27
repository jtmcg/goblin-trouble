import React from 'react';
import styled, { css } from 'styled-components';

const CalendarDaysTableContainer = styled.div(({theme}) => css`
    border: ${theme.borderStyle.solidblackthin};
    border-radius: ${theme.borderRadius.soft};
    padding: ${theme.padding.normal};
`);

const CalendarDaysTable = () => {
    return (
        <CalendarDaysTableContainer>
            CalendarDays
        </CalendarDaysTableContainer>
    )
}

export default CalendarDaysTable;