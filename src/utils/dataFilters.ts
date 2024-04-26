 export interface Entry {
    day?:number,
    month?:number,
    week?:number,
    moodLevel?:number,

}
export const filterDataByNavigationMode = (data: Entry[], valueChoice: {day?:number, month?:number, week?:number, navigationMode:string}): Entry[] => {
    return data.filter((entry: Entry) => {
        switch (valueChoice.navigationMode) {
            case 'month':
                return entry.month === valueChoice.month;
            case 'week':
                return entry.week === valueChoice.week;
            case 'day':
                return entry.day === valueChoice.day && entry.month === valueChoice.month;
            default:
                return true;
        }
    });
}

