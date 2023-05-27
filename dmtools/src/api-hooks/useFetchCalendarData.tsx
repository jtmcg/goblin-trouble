import React from 'react';
import {useQuery} from '@tanstack/react-query';
import fetchApi from './fetch/fetchApi';

interface CalendarData {
    year_len: number;
    events: number;
    n_months: number;
    months: string[];
    month_len: {[key: string]: number};
    week_len: number;
    weekdays: string[];
    n_moons: number;
    moons: string[];
    lunar_cyc: {[index: string]: number};
    lunar_shf: {[index: string]: number};
    year: number;
    first_day: number;
    notes: {[data: string]: string};
}

const useFetchCalendarData = () => {
    const url = "calendar.json";
    const { isLoading, data, isError } = useQuery<CalendarData>(['calendarData'], () => fetchApi({url, method: 'GET'}));
    return {isLoading, data, isError};
}

export default useFetchCalendarData;