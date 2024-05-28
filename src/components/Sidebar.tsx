//icon
import { Home } from "lucide-react";
import { Rainbow } from "lucide-react";
import { Bike } from "lucide-react";
import { Weight } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Salad } from "lucide-react";
import { Github } from "lucide-react";
//shadcn
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button.tsx";

export const Sidebar = ({
  handleCategoryChange,
  activeCategory,
  setCategory,
  setType,
}: {
  handleCategoryChange: (category: string) => void;
  activeCategory: string;
  setCategory: (category: string) => void;
  setType: (type: string) => void;
}) => {
  return (
    <TooltipProvider>
      <nav className="h-full rounded-md border-2  p-2 flex flex-col justify-between items-center">
        <Tooltip>
          <TooltipTrigger>
            <Button
              variant={activeCategory === "home" ? "destructive" : "ghost"}
              onClick={() => {
                handleCategoryChange("home");
                setCategory("home");
              }}
            >
              <Home />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Home</p>
          </TooltipContent>
        </Tooltip>

        <div className="flex flex-col  rounded-md border-2 p-2 gap-4">
          <div>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant={activeCategory === "sport" ? "destructive" : "ghost"}
                  onClick={() => {
                    handleCategoryChange("sport");
                    setCategory("sport");
                    setType("bar");
                  }}
                >
                  <Bike />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sport</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant={activeCategory === "mood" ? "destructive" : "ghost"}
                  onClick={() => {
                    handleCategoryChange("mood");
                    setCategory("mood");
                    setType("line");
                  }}
                >
                  <Rainbow />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Mood</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant={
                    activeCategory === "hobbies" ? "destructive" : "ghost"
                  }
                  onClick={() => {
                    handleCategoryChange("hobbies");
                    setCategory("hobbies");
                    setType("bar");
                  }}
                >
                  <Sparkles />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Hobbies</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant={
                    activeCategory === "weight" ? "destructive" : "ghost"
                  }
                  onClick={() => {
                    handleCategoryChange("weight");
                    setCategory("weight");
                    setType("line");
                  }}
                >
                  <Weight />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Weight</p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant={
                    activeCategory === "dailymeals" ? "destructive" : "ghost"
                  }
                  onClick={() => {
                    handleCategoryChange("dailymeals");
                    setCategory("dailymeals");
                    setType("line");
                  }}
                >
                  <Salad />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Daily Meals</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <div>
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
        </div>
      </nav>
    </TooltipProvider>
  );
};
