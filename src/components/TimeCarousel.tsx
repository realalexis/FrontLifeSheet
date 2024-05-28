import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getWeek } from "date-fns";
import { DateType } from "@/types/GraphDataTypes";

const Timecarousel = ({
  selectedTimeUnit,
  setDate,
}: {
  selectedTimeUnit: string;
  setDate: ({ year, month, day, week }: DateType) => void;
}) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Les mois commencent à 0, donc on ajoute 1
  const [day, setDay] = useState(new Date().getDate());

  const adjustDate = useCallback(
    (unit: string, amount: number) => {
      let newYear = year;
      let newMonth = month;
      let newDay = day;

      if (unit === "year") {
        newYear += amount;
      } else if (unit === "month") {
        newMonth += amount;
        if (newMonth > 12) {
          newMonth = 1;
          newYear += 1;
        } else if (newMonth < 1) {
          newMonth = 12;
          newYear -= 1;
        }
      } else if (unit === "day") {
        newDay += amount;
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
        return;
      }

      setYear(newYear);
      setMonth(newMonth);
      setDay(newDay);
      setDate({ year: newYear, month: newMonth });
    },
    [year, month, day, setDate]
  );

  const renderNavigation = useCallback(() => {
    const handleNext = () => adjustDate(selectedTimeUnit, 1);
    const handlePrevious = () => adjustDate(selectedTimeUnit, -1);

    let displayDate;
    switch (selectedTimeUnit) {
      case "year":
        displayDate = year;
        break;
      case "month":
        displayDate = `${month}/${year}`;
        break;
      case "day":
        displayDate = `${day}/${month}/${year}`;
        break;
      default:
        displayDate = selectedTimeUnit;
    }

    return (
      <>
        <button onClick={handlePrevious}>
          <ChevronLeft />
        </button>
        <div>{displayDate}</div>
        <button onClick={handleNext}>
          <ChevronRight />
        </button>
      </>
    );
  }, [selectedTimeUnit, year, month, day, adjustDate]);

  return (
    <div className="flex justify-center items-center gap-4">
      {renderNavigation()}
    </div>
  );
};

export default Timecarousel;
