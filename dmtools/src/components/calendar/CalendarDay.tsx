import React from 'react';
import styled, { css } from 'styled-components';
import CalendarMoons, { LunarData } from './CalendarMoons';

const CalendarDaysTableTd = styled.td<{numberOfDays: number}>(({theme, numberOfDays}) => css`
    padding: ${theme.padding.normal};
    width: ${100/numberOfDays}%;
    height: 18vh;
    border: ${theme.borderStyle.solidblackthin};
`)

const CalendarDayContainer = styled.div(({theme}) => css`
    display: inline-block;
    height: 100%;
    width: 100%;
`)

const CalendarDayHeader = styled.div(({theme}) => css`
    margin: 0 0 ${theme.margin.normal} 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`)

const CalendarDayHeaderDayNumber = styled.div(({theme}) => css`
    font-size: 32px;
`)

const CalendarDayDescription = styled.div(({theme}) => css`

`)

interface CalendarDayProps {
    day: number;
    numberOfDays: number;
    monthNotes: {[date: string]: string}
    lunarData: LunarData;
    daysSinceCalendarStart: number;
}

const CalendarDay = ({day, numberOfDays, monthNotes, lunarData, daysSinceCalendarStart}: CalendarDayProps) => {
    return (
        <CalendarDaysTableTd
            key={day}
            numberOfDays={numberOfDays}
        >
            <CalendarDayContainer>
                <CalendarDayHeader>
                    <CalendarDayHeaderDayNumber>
                        {day}
                    </CalendarDayHeaderDayNumber>
                    <CalendarMoons 
                        lunarData={lunarData}
                        daysSinceCalendarStart={daysSinceCalendarStart}/>
                </CalendarDayHeader>
                <CalendarDayDescription>
                    {monthNotes[String(day)] ?? ''}
                </CalendarDayDescription>
            </CalendarDayContainer>
        </CalendarDaysTableTd>
    )
}

export default CalendarDay;