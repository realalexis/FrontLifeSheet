// import GraphPanel from "./component/graphique/GraphPanel.tsx";
// import { Button } from "@/components/ui/button";
import {
    Menubar,
    MenubarMenu,
    MenubarTrigger,
  } from "@/components/ui/menubar"
  import { ThemeProvider } from "@/components/theme-provider"

const App = () =>{
    return (
        <ThemeProvider>
            <div>
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
        </div>
        </ThemeProvider>
    )
}

export default App;