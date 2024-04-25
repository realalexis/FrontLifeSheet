import { Menubar } from "@/components/ui/menubar"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {useNavigation} from "@/hooks/NavigationContext"
import {MouseEvent} from "react";


const Timebar = () =>{
    const { setNavigationMode } = useNavigation();
    const handleNavigationMode = (e: MouseEvent<HTMLButtonElement>) => {

        const value = e.currentTarget.textContent?.trim().toLowerCase();
        console.log(value)
        if (value) {
            console.log(value)
            setNavigationMode(value);
        }
    };
    return (
      <div>
        <Menubar>
            <ToggleGroup type="single" >
                <ToggleGroupItem value="year" onClick={handleNavigationMode}> Year </ToggleGroupItem>
                <ToggleGroupItem value="quarter" onClick={handleNavigationMode}> Quarter </ToggleGroupItem>
                <ToggleGroupItem value="month" onClick={handleNavigationMode}> Month </ToggleGroupItem>
                <ToggleGroupItem value="week" onClick={handleNavigationMode}> Week </ToggleGroupItem>
                <ToggleGroupItem value="day" onClick={handleNavigationMode}> Day </ToggleGroupItem>
            </ToggleGroup>
        </Menubar>
      </div>
        
    )
}
export default Timebar;