
import Calendar from "../../assets/Calendar.svg";
import CalendarHovered from "../../assets/CalendarSelect.svg"
import {useState} from "react";

const MenuGraph = () =>{

    const [isHovered, setIsHovered] = useState(false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    return (
        <div className="border border-solid">
            <div
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {isHovered ?
                    <img src={CalendarHovered} alt="Calendar Selected"/>
                    : <img src={Calendar} alt="Calendar"/>
                }
            </div>
        </div>
    )
}

export default MenuGraph