import CitiesCards from "./CitiesCards"
import Details from "./Details"
import axios from "axios"
import { useEffect, useState } from "react"


// agregar el objeto del createcard aqui
export default function EventCities({obj}){
    

    const [elem,setElem]=useState([])

    useEffect(()=>{

        axios.get("http://localhost:3001/cities")
        .then(response => setElem(response.data))
    },[])
    

    return(
        
            <CitiesCards data={elem}/> 
           
            
       
    )
    
}