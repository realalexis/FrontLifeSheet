import { getWeek } from "date-fns";
export const goToNextMonth = (
    {
        year,
        month,
    }:{
        year : number,
        month : number
    }
) => {
    console.log("tu avances");
    let newYear = year;
    let newMonth = month;
    if (month === 12) {
      newMonth = 1;
      newYear = year + 1;
    } else {
      newMonth = month + 1;
    }
    return { year: newYear, month: newMonth };
    };

export const goToPreviousMonth = (
    {
        year,
        month,
    }:{
        year : number,
        month : number
    }
  ) => {
    console.log("tu recules");
    let newYear = year;
    let newMonth = month;
    if (month === 1) {
      newMonth = 12;
      newYear = year - 1;
    } else {
      newMonth = month - 1;
    }
    return { year: newYear, month: newMonth };
    };

export const goToNextYear = (
    {
        year,
        month,
    }:{
        year : number,
        month : number
    }
) => {
    console.log("tu avances");
    const newYear = year + 1;
    return { year: newYear, month};
    };

  export const goToPreviousYear = (
    
        year: number,
        month: number,

) => {
    console.log("tu recules");
    const newYear = year - 1;
    return { year: newYear, month};
    };

export const goToNextDay = (
    {
        year,
        month,
        day
    }:{
        year : number,
        month : number,
        day: number
    }
) => {
    console.log("tu avances");
    let newYear = year;
    let newMonth = month;
    let newDay = day;
    if (day === 31) {
      newDay = 1;
      if (month === 12) {
        newMonth = 1;
        newYear = year + 1;
      } else {
        newMonth = month + 1;
      }
    } else {
      newDay = day + 1;
    }
    const newDate = new Date(newYear, newMonth - 1, newDay);
    const newWeek = getWeek(newDate);
    return { year: newYear, month: newMonth, day: newDay, week: newWeek };
    };

export const goToPreviousDay = (
    {
        year,
        month,
        day
    }:{
        year : number,
        month : number,
        day: number
    }
) => {
    console.log("tu recules");
    let newYear = year;
    let newMonth = month;
    let newDay = day;

    if (day === 1) {
      if (month === 1) {
        newMonth = 12;
        newYear = year - 1;
      } else {
        newMonth = month - 1;
      }
      newDay = 31;
    } else {
      newDay = day - 1;
    }

    const newDate = new Date(newYear, newMonth - 1, newDay);
    const newWeek = getWeek(newDate);

    console.log(newWeek);
    return{ year: newYear, month: newMonth, day: newDay, week: newWeek };
    };