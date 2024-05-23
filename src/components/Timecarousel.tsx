import {useLocation} from "react-router-dom";
import {useNavigation} from "@/hooks/NavigationContext"
import {useEffect, useState} from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const Timecarousel = () =>{
  const location = useLocation();
  const pathSegments = location.pathname.split('/');
  const categorieMode = pathSegments[pathSegments.length - 1];
  const { navigationMode } = useNavigation();
 
  const fetchData = async () =>{
    const url =`http://localhost:8080/${categorieMode}`
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
    } catch (error){
        console.log(error)
    }

}
useEffect(() => {
    fetchData();
}, [navigationMode, location]);

    return (
      <div>
        <Carousel>
        <CarouselPrevious />
            <CarouselContent>
            {/* {years.map(year => (
                        <CarouselItem key={year}>{year}</CarouselItem>
                    ))} */}
            </CarouselContent>

            <CarouselNext />
        </Carousel>
      </div> 
    )
}
export default Timecarousel;