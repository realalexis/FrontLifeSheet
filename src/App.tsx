import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";
import Timebar from "@/component/Timebar";

const App = () =>{
    return (
        <ThemeProvider>
                <div className="flex justify-between m-2">
                    <div className="">Logo ?</div>
                    <div className=""><Timebar /></div>
                    <div className=""><ModeToggle /></div>
                </div>
        </ThemeProvider>
    )
}

export default App;