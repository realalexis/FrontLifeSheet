import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { getWeek } from "date-fns";

const Timecarousel = ({
  selectedTimeUnit,
  setDate,
}: {
  selectedTimeUnit: string;
  setDate: ({
    year,
    month,
    day,
    week,
  }: {
    year: number;
    month?: number;
    day?: number;
    week?: number;
  }) => void;
}) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Les mois commencent à 0, donc on ajoute 1
  const [day, setDay] = useState(new Date().getDate());
  const goToNextMonth = () => {
    console.log("tu avances");
    let newYear = year;
    let newMonth = month;
    if (month === 12) {
      newMonth = 1;
      newYear = year + 1;
    } else {
      newMonth = month + 1;
    }
    setMonth(newMonth);
    setYear(newYear);
    setDate({ year: newYear, month: newMonth });
  };

  const goToPreviousMonth = () => {
    console.log("tu recules");
    let newYear = year;
    let newMonth = month;
    if (month === 1) {
      newMonth = 12;
      newYear = year - 1;
    } else {
      newMonth = month - 1;
    }
    setMonth(newMonth);
    setYear(newYear);
    setDate({ year: newYear, month: newMonth });
  };
  const goToNextYear = () => {
    console.log("tu avances");
    const newYear = year + 1;
    setYear(newYear);
    setDate({ year: newYear, month });
  };
  const goToPreviousYear = () => {
    console.log("tu recules");
    const newYear = year - 1;
    setYear(newYear);
    setDate({ year: newYear, month });
  };
  const goToNextDay = () => {
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
    setDay(newDay);
    setMonth(newMonth);
    setYear(newYear);
    setDate({ year: newYear, month: newMonth, day: newDay, week: newWeek });
  };
  const goToPreviousDay = () => {
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
    setDay(newDay);

    setMonth(newMonth);
    setYear(newYear);

    setDate({ year: newYear, month: newMonth, day: newDay, week: newWeek });
  };
  return (
    <div className="flex justify-center items-center gap-4">
      {(() => {
        switch (selectedTimeUnit) {
          case "year":
            return (
              <>
                <button onClick={goToPreviousYear}>
                  <ChevronLeft />
                </button>
                <div>{year}</div>
                <button onClick={goToNextYear}>
                  <ChevronRight />
                </button>
              </>
            );
          case "month":
            return (
              <>
                <button onClick={goToPreviousMonth}>
                  <ChevronLeft />
                </button>
                <div>
                  {month}/{year}
                </div>
                <button onClick={goToNextMonth}>
                  <ChevronRight />
                </button>
              </>
            );
          case "day":
            return (
              <>
                <button onClick={goToPreviousDay}>
                  <ChevronLeft />
                </button>
                <div>
                  {day}/{month}/{year}
                </div>
                <button onClick={goToNextDay}>
                  <ChevronRight />
                </button>
              </>
            );
          default:
            return <div>{selectedTimeUnit}</div>;
        }
      })()}
    </div>
  );
};
export default Timecarousel;
