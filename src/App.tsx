import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {Sidebar} from "@/components/Sidebar.tsx";
import Timebar from "@/component/Timebar";
import Graph from "@/component/graphique/Graph.tsx";
import {NavigationProvider} from "@/hooks/NavigationContext.tsx";
const App = () =>{
    return (
        <ThemeProvider>
            <NavigationProvider>
                <Router>
                    <div className=" flex flex-col h-screen p-2">
                        <div className="flex justify-between m-2">
                          <div className="">Logo ?</div>
                          <Timebar />
                          <ModeToggle />
                        </div>
                        <div className="flex h-full p-8">
                            <Sidebar />

                            <Routes>
                                <Route path="/home" element={<Graph /> }/>
                                <Route path="/mood" element={<Graph /> }/>
                                <Route path="/sport" element={<Graph /> }/>
                                <Route path="/sleep" element={<Graph />}/>
                            </Routes>

                        </div>
                    </div>
                </Router>
            </NavigationProvider>
        </ThemeProvider>
    )
}

export default App;