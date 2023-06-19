import React from 'react';
import styled, { css } from 'styled-components';
import CalendarDay from './CalendarDay';
import { LunarData } from './CalendarMoons';

const CalendarDaysTableContainer = styled.table(({theme}) => css`
    border: ${theme.borderStyle.solidblackthin};
    border-radius: ${theme.borderRadius.soft};
    padding: ${theme.padding.normal};
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;
`);

const CalendarDaysTableTr = styled.tr(({theme}) => css`
    padding: ${theme.padding.thin};
`);

const CalendarDaysTableTh = styled.th<{numberOfDays: number}>(({theme, numberOfDays}) => css`
    background-color: ${theme.color.lightgray};
`)

interface CalendarDaysTableProps {
    numberOfDays: number;
    weekdays: string[];
    monthNotes: {[date: string]: string};
    lunarData: LunarData;
    daysToCurrentMonthSinceCalendarStart: number;
    monthName: string;
}

const CalendarDaysTable = ({numberOfDays, weekdays, monthNotes, lunarData, daysToCurrentMonthSinceCalendarStart, monthName}: CalendarDaysTableProps) => {
    const numberOfWeeks = numberOfDays / weekdays.length;
    return (
        <CalendarDaysTableContainer>
            <tbody>
                <CalendarDaysTableTr>
                    {weekdays.map(dayName => (
                            <CalendarDaysTableTh 
                                key={`${dayName}-${monthName}`}
                                numberOfDays={numberOfDays}
                            >
                                {dayName}
                            </CalendarDaysTableTh>
                        )
                    )}
                </CalendarDaysTableTr>
                {Array(numberOfWeeks).fill(0).map((_week, weekIndex) => {
                    return (
                        <CalendarDaysTableTr key={`week-${weekIndex}`}>
                            {weekdays.map((_day, dayIndex) => {
                                const day = weekIndex * weekdays.length + dayIndex + 1;
                                const daysSinceCalendarStart = daysToCurrentMonthSinceCalendarStart + day;
                                return (
                                <CalendarDay 
                                    day={day}
                                    numberOfDays={numberOfDays}
                                    monthNotes={monthNotes}
                                    lunarData={lunarData}
                                    daysSinceCalendarStart={daysSinceCalendarStart}
                                    key={daysSinceCalendarStart}
                                />)}
                            )}
                        </CalendarDaysTableTr>
                    )}
                )}
            </tbody>
        </CalendarDaysTableContainer>
    )
}

export default CalendarDaysTable;