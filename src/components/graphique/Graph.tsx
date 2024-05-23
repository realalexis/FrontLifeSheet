
import Plot from 'react-plotly.js'
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {useNavigation} from "@/hooks/NavigationContext"

interface Entry{
    day?:number,
    month?:number,
    week?:number,
    moodLevel?:number,
    reason?:string
}

const filterDataByNavigationMode = (data: Entry[], navigationMode: string): Entry[] => {
    switch (navigationMode) {
        case 'month':
            return data.filter((entry: Entry) => entry.month === 45);
        case 'week':
            return data.filter((entry: Entry) => entry.week === 45);
        case 'day':
            return data.filter((entry: Entry) => entry.day === 26 && entry.month === 45);
        default:
            return data;
    }
};
const filterDataByCategorie = (data: Entry[], categorieMode: string) => {
    const  dataPlot = {
        x: [0,1,2,3,4,5,6,7,8,9,10],
        y: [] as (number | "")[]
    }
    switch (categorieMode) {
        case 'mood':
            dataPlot.y = data.reduce((acc, entry) => {
                if (entry.moodLevel !== undefined) {
                    acc.push(entry.moodLevel);
                }
                return acc;
            }, [] as (number | "")[]);
            return dataPlot
        // case 'sport':
        //     return data.filter((entry: Entry) => entry.reason);
        // case 'comfort':
        //     return data.filter((entry: Entry) => entry.day);
        // case 'stress':
        //     return data.filter((entry: Entry) => entry.day === 26 && entry.month === 45);
        default:
            return dataPlot;
    }
};
const Graph = () => {

    // const [plotX, setPlotX] = useState<number[]>([])
    // const [plotY, setPlotY] = useState<(number | "")[]>([])


    // const location = useLocation();
    // const pathSegments = location.pathname.split('/');
    // const categorieMode = pathSegments[pathSegments.length - 1];
    // const { navigationMode } = useNavigation();



    // const url = `http://localhost:8080/api/${categorieMode}/year/45`
    // console.log(url)
    // console.log(navigationMode)


    // const fetchData = async () =>{
    //     try {
    //         const response = await fetch(url);
    //         const data = await response.json()

    //         const filteredData = filterDataByNavigationMode(data, navigationMode)
    //         const filterByCategorie = filterDataByCategorie(filteredData, categorieMode)
    //         setPlotX(filterByCategorie.x)
    //         setPlotY(filterByCategorie.y)

    //     } catch (error){
    //         console.log(error)
    //     }

    // }
    // useEffect(() => {
    //     // fetchData();
    // }, [navigationMode, location]);



    // const layout = {title: `${categorieMode}` };

    return(
        <div className="flex justify-center items-center w-screen">
                <div className=" border border-black ">
                    {/* <Plot data={[{
                        x: plotY,
                        y: plotX,
                        type: "scatter",
                        mode: "lines"
                    }]} layout={layout}/> */}

                </div>
        </div>
    )
}
export default Graph