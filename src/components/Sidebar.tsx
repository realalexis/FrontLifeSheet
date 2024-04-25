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

export const Sidebar = () => {

    return(
        <TooltipProvider>
            <nav className="h-full rounded-sm border-2  p-2 flex flex-col justify-between items-center">
                <NavLink to="/home">
                    <Tooltip>
                        <TooltipTrigger>
                            <Button variant={"ghost"}>
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
                                <Button variant={"ghost"}>
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
                                <Button variant={"ghost"}>
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
                                <Button variant={"ghost"}>
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