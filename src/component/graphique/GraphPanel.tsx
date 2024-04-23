
import MenuGraph from "./MenuGraph.tsx";
import Graph from "./Graph.tsx";

const GraphPanel = () =>{
    return (
        <div className="flex gap-6">
            <MenuGraph />
            <Graph />
        </div>
    )
}

export default GraphPanel;