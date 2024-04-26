//icon
import { Home } from 'lucide-react';
import { Rainbow } from 'lucide-react';
import { Bed } from 'lucide-react';
import { Bike } from 'lucide-react';
import { Github } from 'lucide-react';


import {NavLink} from "react-router-dom";
//shadcn
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {Button} from "@/components/ui/button.tsx";
import {useState} from "react";

export const Sidebar = () => {
    const [activeButton, setActiveButton] = useState('');

    const handleButtonClick = (buttonName : string) => {

        setActiveButton(buttonName);
        console.log(activeButton)
    };
    return(
        <TooltipProvider>
            <nav className="h-full rounded-sm border-2  p-2 flex flex-col justify-between items-center">
                <NavLink to="/home">
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant={activeButton === 'home' ? 'destructive' : 'ghost'} onClick={() => handleButtonClick('home')}>
                                <Home/>
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Home</p>
                        </TooltipContent>
                    </Tooltip>
                </NavLink>
                <div className="flex flex-col  rounded-sm border-2 p-1 gap-6">
                    <NavLink to="/sport">
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant={activeButton === 'sport' ? 'destructive' : 'ghost'} onClick={() => handleButtonClick('sport')}>
                                    <Bike/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Sport</p>
                            </TooltipContent>
                        </Tooltip>
                    </NavLink>
                    <NavLink to="/mood">
                        <Tooltip>
                            <TooltipTrigger>
                                <Button variant={activeButton === 'mood' ? 'destructive' : 'ghost'} onClick={() => handleButtonClick('mood')}>
                                    <Rainbow/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Mood</p>
                            </TooltipContent>
                        </Tooltip>
                    </NavLink>
                    <NavLink to="/sleep">
                        <Tooltip>
                            <TooltipTrigger>
                                <Button  variant={activeButton === 'sleep' ? 'destructive' : 'ghost'} onClick={() => handleButtonClick('sleep')} >
                                    <Bed/>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Sleep</p>
                            </TooltipContent>
                        </Tooltip>
                    </NavLink>
                </div>

                <NavLink to="https://github.com/realalexis/FrontLifeSheet">
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant={"ghost"}>
                                <Github />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Github</p>
                        </TooltipContent>
                    </Tooltip>
                </NavLink>
            </nav>
        </TooltipProvider>
    )
}