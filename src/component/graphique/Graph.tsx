
import Plot from 'react-plotly.js'
import {useEffect, useState} from "react";
const Graph = () => {

    const [isWeight, setIsWeight] = useState([])
    const fetchWeight = async () =>{
        try {
            const response = await fetch("http://localhost:8080/api/weight");
            const data = await response.json()
            setIsWeight(data)
            console.log(isWeight)
        } catch (error){
            console.log(error)
        }

    }
    useEffect(() => {
        fetchWeight();
    }, []);

    const layout = { width:820, height: 540 ,title: "Chart Title" };

    return(
        <div className="flex justify-center items-center w-screen">
                <div className=" border border-black">
                    <Plot data={[{
                        x: isWeight.map(entry => entry.day),
                        y: isWeight.map(entry => entry.weight),
                        type: "scatter",
                        mode: "lines"
                    }

                    ]} layout={layout}/>

                </div>
        </div>
    )
}
export default Graph