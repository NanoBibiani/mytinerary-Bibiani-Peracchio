import Carousel from "./Carousel"
import axios from "axios"
import { useEffect, useState } from "react"
export default function EventCarousel(){
const [elem,setElem]=useState([])

useEffect(()=>{

    axios.get("http://localhost:3001/cities")
    .then(response => setElem(response.data))
},[])

return(
    <div>
        <Carousel data={elem}/>

    </div>
)

}