import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Sidebar } from "@/components/Sidebar.tsx";
import Timebar from "@/components/Timebar";
import Graph from "@/components/Graph";
import { useCallback, useState } from "react";
import Timecarousel from "./components/TimeCarousel";
import { DateType } from "@/types/GraphDataTypes";

const App = () => {
  const [category, setCategory] = useState("home");
  const [selectedTimeUnit, setSelectedTimeUnit] = useState("year");
  const [type, setType] = useState("line");
  const [date, setDate] = useState<DateType>({
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
    week: Math.ceil(new Date().getDate() / 7),
  });
  const handleCategoryChange = useCallback((category: string) => {
    setCategory(category);
  }, []);
  const handleDateChange = useCallback((date: DateType) => {
    setDate(date);
  }, []);

  return (
    <ThemeProvider>
      <div className=" flex flex-col h-screen p-2 ">
        <div className="flex justify-between m-2">
          <div className="">Logo ?</div>
          <Timebar setSelectedTimeUnit={setSelectedTimeUnit} />
          <ModeToggle />
        </div>
        <div className="flex h-full p-8">
          <Sidebar
            activeCategory={category}
            setCategory={setCategory}
            handleCategoryChange={handleCategoryChange}
            setType={setType}
          />
          <div className="flex flex-col justify-center items-center w-full">
            {category !== "home" && (
              <>
                <h2>{category.toUpperCase()}</h2>
                <div className="flex items-center  text-white  flex-col justify-center gap-4 h-80">
                  <Graph
                    category={category}
                    selectedTimeUnit={selectedTimeUnit}
                    date={date}
                    type={type}
                  />
                </div>
                <Timecarousel
                  selectedTimeUnit={selectedTimeUnit}
                  setDate={handleDateChange}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
