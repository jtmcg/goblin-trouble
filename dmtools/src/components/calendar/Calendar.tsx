import React from 'react';
import styled from 'styled-components';
import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';

const CalendarContainer = styled.div``;

const Calendar = () => {
    return (
        <CalendarContainer>
            <CalendarHeader/>
            <CalendarBody/>
        </CalendarContainer>
    )
}

export default Calendar;