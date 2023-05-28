import React from 'react';
import styled, { css } from 'styled-components';

const CalendarDaysTableContainer = styled.table(({theme}) => css`
    border: ${theme.borderStyle.solidblackthin};
    border-radius: ${theme.borderRadius.soft};
    padding: ${theme.padding.normal};
`);

const CalendarDaysTableTr = styled.tr(({theme}) => css`
    padding: ${theme.padding.thin};
`);

const CalendarDaysTableTh = styled.th(({theme}) => css`
    padding: ${theme.padding.thin};
`)

const CalendarDaysTableTd = styled.td(({theme}) => css`
    padding: ${theme.padding.normal};
`)

interface CalendarDaysTableProps {
    numberOfDays: number;
    weekdays: string[];
    monthNotes: {[date: string]: string};
}

const CalendarDaysTable = ({numberOfDays, weekdays, monthNotes}: CalendarDaysTableProps) => {
    const numberOfWeeks = numberOfDays / weekdays.length;
    return (
        <CalendarDaysTableContainer>
            <tbody>
                <CalendarDaysTableTr>
                    {weekdays.map(dayName => (
                            <CalendarDaysTableTh key={dayName}>{dayName}</CalendarDaysTableTh>
                        )
                    )}
                </CalendarDaysTableTr>
                {Array(numberOfWeeks).fill(0).map((week, weekIndex) => {
                    console.log('here')
                    return (
                        <CalendarDaysTableTr key={`week-${weekIndex}`}>
                            {weekdays.map((_day, dayIndex) => {
                                const day = weekIndex * weekdays.length + dayIndex + 1;
                                console.log({day, weekIndex, dayIndex});
                                console.log(monthNotes[String(day)]);
                                return (<CalendarDaysTableTd key={day}>{monthNotes[String(day)]}</CalendarDaysTableTd>)}
                            )}
                        </CalendarDaysTableTr>
                    )}
                )}
            </tbody>
        </CalendarDaysTableContainer>
    )
}

export default CalendarDaysTable;