import { Menubar } from "@/components/ui/menubar"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"

const Timebar = () =>{
    return (
      <div>
        <Menubar>
        <ToggleGroup type="single">
          <ToggleGroupItem value="year"> Year </ToggleGroupItem>
          <ToggleGroupItem value="quarter"> Quarter </ToggleGroupItem>
          <ToggleGroupItem value="month"> Month </ToggleGroupItem>
          <ToggleGroupItem value="week"> Week </ToggleGroupItem>
          <ToggleGroupItem value="day"> Day </ToggleGroupItem>
        </ToggleGroup>
        </Menubar>
      </div>
        
    )
}
export default Timebar;