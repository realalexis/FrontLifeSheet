
import Plot from 'react-plotly.js'
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useNavigation} from "@/hooks/NavigationContext"
const Graph = () => {

    const [isWeight, setIsWeight] = useState([])
    const location = useLocation();
    const pathSegments = location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    const { navigationMode } = useNavigation();


    const url = `http://localhost:8080/api/${lastSegment}/${navigationMode}`
    console.log(url)


    const fetchWeight = async () =>{
        try {
            const response = await fetch(url);
            const data = await response.json()
            setIsWeight(data)
            console.log(isWeight)
        } catch (error){
            console.log(error)
        }

    }
    useEffect(() => {
        fetchWeight();
    }, [navigationMode, location]);

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