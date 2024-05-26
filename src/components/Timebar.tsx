import { Menubar } from "@/components/ui/menubar";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MouseEvent } from "react";

const Timebar = ({
  setSelectedTimeUnit,
}: {
  setSelectedTimeUnit: (value: string) => void;
}) => {
  const handleSelectedTimeUnit = (e: MouseEvent<HTMLButtonElement>) => {
    const value = e.currentTarget.textContent?.trim().toLowerCase();
    setSelectedTimeUnit(value || "");

    console.log(value);
  };
  return (
    <div>
      <Menubar className="p-6">
        <ToggleGroup type="single">
          <ToggleGroupItem
            variant="default"
            value="year"
            onClick={handleSelectedTimeUnit}
          >
            {" "}
            Year{" "}
          </ToggleGroupItem>

          <ToggleGroupItem value="month" onClick={handleSelectedTimeUnit}>
            {" "}
            Month{" "}
          </ToggleGroupItem>
          <ToggleGroupItem value="day" onClick={handleSelectedTimeUnit}>
            {" "}
            Day{" "}
          </ToggleGroupItem>
        </ToggleGroup>
      </Menubar>
    </div>
  );
};
export default Timebar;
