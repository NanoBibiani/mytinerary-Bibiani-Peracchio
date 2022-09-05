import CitiesCards from "./CitiesCards"
import { useGetAllCitiesQuery } from "../features/cityApi"



export default function EventCities(){
    const {
        data:elem,

    } = useGetAllCitiesQuery()
    


    return(
            elem?
            <CitiesCards data={elem}/> 
           :''
            
       
    )
    
}