import Carousel from "./Carousel"

import { useGetAllCitiesQuery } from "../features/cityApi"
export default function EventCarousel(){
    const {
        data:elem,

    } = useGetAllCitiesQuery()

return(
   
        elem?
        <Carousel data={elem}/>
        :''

  
)

}