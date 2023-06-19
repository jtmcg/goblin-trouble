import React from 'react';
import styled, { css } from 'styled-components';

const CalendarDaysTableTd = styled.td<{numberOfDays: number}>(({theme, numberOfDays}) => css`
    padding: ${theme.padding.normal};
    width: ${100/numberOfDays}%;
    height: 18vh;
    border: ${theme.borderStyle.solidblackthin};
`)

const CalendarDayContainer = styled.div(({theme}) => css`
    display: inline-block;
    height: 100%;
    overflow: scroll;
`)

const CalendarDayHeader = styled.div(({theme}) => css`
    margin: 0 0 ${theme.margin.normal} 0;
    font-size: 1.5rem;
`)

const CalendarDayDescription = styled.div(({theme}) => css`

`)

interface CalendarDayProps {
    day: number;
    numberOfDays: number;
    monthNotes: {[date: string]: string}
}

const CalendarDay = ({day, numberOfDays, monthNotes}: CalendarDayProps) => {
    return (
        <CalendarDaysTableTd
            key={day}
            numberOfDays={numberOfDays}
        >
            <CalendarDayContainer>
                <CalendarDayHeader>
                    {day}
                </CalendarDayHeader>
                <CalendarDayDescription>
                    {monthNotes[String(day)] ?? ''}
                </CalendarDayDescription>
            </CalendarDayContainer>
        </CalendarDaysTableTd>
    )
}

export default CalendarDay;