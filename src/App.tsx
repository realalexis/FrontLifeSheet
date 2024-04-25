// import GraphPanel from "./component/graphique/GraphPanel.tsx";
// import { Button } from "@/components/ui/button";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";
import {Home} from "@/pages/Home.tsx";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {Sidebar} from "@/components/Sidebar.tsx";
const App = () =>{
    return (
        <ThemeProvider>
            <Router>
                <div>
                    <ModeToggle />
                    {/* <GraphPanel /> */}
                    {/* <Button>Click me</Button> */}

                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>Year</MenubarTrigger>
                            <MenubarTrigger>Quarter</MenubarTrigger>
                            <MenubarTrigger>Month</MenubarTrigger>
                            <MenubarTrigger>Week</MenubarTrigger>
                            <MenubarTrigger>Day</MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                    <div className="flex">
                        <Sidebar />

                        <Routes>
                            <Route path="/home" element={<Home /> }/>
                            <Route path="/mood" element={<Home /> }/>
                            <Route path="/sport" element={<Home /> }/>
                            <Route path="/sleep" element={<Home />}/>
                        </Routes>
                    </div>
                </div>
            </Router>
        </ThemeProvider>
    )
}

export default App;