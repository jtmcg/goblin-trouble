import React from 'react';
import styled, { css } from 'styled-components';

const CalendarDaysTableContainer = styled.div(({theme}) => css`
    border: ${theme.borderStyle.solidblackthin};
    border-radius: ${theme.borderRadius.soft};
    padding: ${theme.padding.normal};
`);

interface CalendarDaysTableProps {
    numberOfDays: number;
    weekdays: string[];
    monthNotes: {[date: string]: string};
}

const CalendarDaysTable = ({numberOfDays, weekdays, monthNotes}: CalendarDaysTableProps) => {
    return (
        <CalendarDaysTableContainer>
            {JSON.stringify(monthNotes)}
        </CalendarDaysTableContainer>
    )
}

export default CalendarDaysTable;