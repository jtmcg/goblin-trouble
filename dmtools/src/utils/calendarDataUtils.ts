export const getDayIndexFromDateKey = (dateKey: string) => {
    return dateKey.split('-')[2];
}

export const getMonthIndexFromDateKey = (dateKey: string) => {
    return dateKey.split('-')[1];
}

export const getYearIndexFromDateKey = (dateKey: string) => {
    return dateKey.split('-')[0];
}
export const computeDaysToCurrentMonthSinceCalendarStart = (year: number, yearLength: number, currentMonth: string, monthLength: {[month: string]: number}) => {
    const months = Object.keys(monthLength);
    const passedMonths = computePassedMonthsArray(months, currentMonth);
    return year * yearLength + passedMonths.reduce((totalDays, currentMonth) => {
        return totalDays + monthLength[currentMonth];
    }, 0);
}

export const computePassedMonthsArray = (months: string[], currentMonth: string) => {
    return months.slice(0, months.indexOf(currentMonth));
}

export const getMonthData = (
    notes: {[date: string]: string},
    months: string[],
    currentMonth: string,
    currentYear: number,
    ) => {
    let monthData: {[date: string]: string} = {};
    
    // Add 1 so the index is calendar compatible
    const monthIndex = months.findIndex((month) => month === currentMonth) + 1;
    
    Object.keys(notes).forEach((dateKey) => {
        if (getMonthIndexFromDateKey(dateKey) === String(monthIndex) && getYearIndexFromDateKey(dateKey) === String(currentYear)) {
            monthData[getDayIndexFromDateKey(dateKey)] = notes[dateKey]
            }
    });
    return monthData;
}