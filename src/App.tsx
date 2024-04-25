import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/mode-toggle";
import {Home} from "@/pages/Home.tsx";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import {Sidebar} from "@/components/Sidebar.tsx";
import Timebar from "@/component/Timebar";
import Graph from "@/component/graphique/Graph.tsx";
const App = () =>{
    return (
        <ThemeProvider>
            <Router>
                <div className=" flex flex-col h-screen">
                    <div className="flex justify-between m-2">
                      <div className="">Logo ?</div>
                      <div className=""><Timebar /></div>
                      <div className=""><ModeToggle /></div>
                     </div>
                     <div className="flex h-full p-8">
                        <Sidebar />

                        <Routes>
                            <Route path="/home" element={<Graph /> }/>
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