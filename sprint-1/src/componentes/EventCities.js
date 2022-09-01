import axios from "axios"
import { useState } from "react"
import CitiesCards from "./CitiesCards"



export default function EventCities(){
 
    const [element,setelement] = useState([])
    axios.get("localhost:3001/cities")
    .then(res =>setelement (res.data))
    console.log(element)
    
    }