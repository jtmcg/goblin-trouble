export const getDayIndexFromDateKey = (dateKey: string) => {
    return dateKey.split('-')[2];
}

export const getMonthIndexFromDateKey = (dateKey: string) => {
    return dateKey.split('-')[1];
}

export const getYearIndexFromDateKey = (dateKey: string) => {
    return dateKey.split('-')[0];
}

const getMonthData = (
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

export default getMonthData;