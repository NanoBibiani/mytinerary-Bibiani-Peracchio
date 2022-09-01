import CallToAction from "./CallToAction"
import axios from "axios"
import { useEffect, useState } from "react"
export default function Details(){
 
    
    const [onlyId,setId]=useState({})

    
    let id = window.location.search.split('?')
    console.log(id)
    
    let selectID = id[1]
    console.log(selectID)    
    const ids = onlyId.response
    
    useEffect(()=>{

        axios.get(`http://localhost:3001/cities/${selectID}`)
        .then(response => setId(response.data))
    },[])

     let cityShow =(city)=>(
        <div className="cardDetails">
        <div className="imgCardDetails">
        <img className="imgCard1Details" src={city.photo}></img>

        </div>
        <div className="bodyCardDetails">
            <h4 className="titleCardDetails">{city.city}</h4>
            <p className="pCardDetails">{city.country}</p>
            <p className="priceCardDetails">Population: {city.population}</p>
            <p className="priceCardDetails">Fundation: {city.fundation}</p>
            <CallToAction linkTo={`/cities`} TextButon="Go Back Cities" Clases="buttonBuyDetails"/>
        </div>
    </div>
     )
   



  
    return(
        <div className="Details">

            {ids && cityShow(ids)}
        </div>
        
    )

}