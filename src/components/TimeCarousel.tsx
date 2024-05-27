import { useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getWeek } from "date-fns";
import { DateType } from "@/types/GraphDataTypes";

const Timecarousel = ({ selectedTimeUnit, setDate }:
  {
  selectedTimeUnit: string;
  setDate: ({
    year,
    month,
    day,
    week,
  }: 
  DateType
) => void;
}) => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth() + 1); // Les mois commencent à 0, donc on ajoute 1
  const [day, setDay] = useState(new Date().getDate());

  const adjustDate = useCallback((unit: string, amount: number) => {
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
      const date = new Date(newYear, newMonth - 1, newDay);
      if (date.getMonth() + 1 !== newMonth) {
        newDay = amount > 0 ? 1 : new Date(newYear, newMonth - 1, 0).getDate();
        newMonth += amount > 0 ? 1 : -1;
        if (newMonth > 12) {
          newMonth = 1;
          newYear += 1;
        } else if (newMonth < 1) {
          newMonth = 12;
          newYear -= 1;
        }
      }
      const newWeek = getWeek(date);
      setDate({ year: newYear, month: newMonth, day: newDay, week: newWeek });
      return;
    }

    setYear(newYear);
    setMonth(newMonth);
    setDay(newDay);
    setDate({ year: newYear, month: newMonth });
  }, [year, month, day, setDate]);

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
