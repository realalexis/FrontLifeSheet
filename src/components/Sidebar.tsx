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

export const Sidebar = () => {
    return(
        <TooltipProvider>
            <nav className="h-screen rounded-sm border-2  p-4 m-4 flex flex-col justify-between items-center">
                <NavLink to="/home">
                    <Tooltip>
                        <TooltipTrigger>
                            <Home/>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p>Home</p>
                        </TooltipContent>
                    </Tooltip>
                </NavLink>
                <div className="flex flex-col  rounded-sm border-2 p-4 gap-6">
                    <NavLink to="/sport">
                        <Tooltip>
                            <TooltipTrigger>
                                <Bike/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Sport</p>
                            </TooltipContent>
                        </Tooltip>
                    </NavLink>
                    <NavLink to="/mood">
                        <Tooltip>
                            <TooltipTrigger>
                                <Rainbow/>
                            </TooltipTrigger>
                            <TooltipContent>
                                <p>Mood</p>
                            </TooltipContent>
                        </Tooltip>
                    </NavLink>
                    <NavLink to="/sleep">
                        <Tooltip>
                            <TooltipTrigger>
                                <Bed />
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
                            <Github/>
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