import {useLocation} from "react-router-dom";
import {useNavigation} from "@/hooks/NavigationContext"
import {useEffect} from "react";
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

  const url = `http://localhost:8080/api/${categorieMode}/year/45`
  console.log(url)
  console.log(navigationMode)

  const fetchData = async () =>{
    try {
        const response = await fetch(url);
        const data = await response.json()
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
                <CarouselItem>2024</CarouselItem>
                <CarouselItem>2025</CarouselItem>
                <CarouselItem>2026</CarouselItem>
            </CarouselContent>

            <CarouselNext />
        </Carousel>
      </div> 
    )
}
export default Timecarousel;