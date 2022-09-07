import EventCities from "./EventCities"
import EventInput from "./EventInput"
import axios from "axios"
import { useEffect } from "react"
import CallToAction from "./CallToAction"
export default function(props){
const arr = props.data



    let cityShow =(city)=>(
        <div className="card">
        <div className="imgCard">
        <img className="imgCard1" src={city.photo}></img>

        </div>
        <div className="bodyCard">
            <h4 className="titleCard">{city.city}</h4>
            <p className="pCard">{city.country}</p>
            <p className="priceCard">${city.fundation}</p>
                 <CallToAction linkTo={`asd`} TextButon="Details" Clases="buttonBuy"/>
        </div>
    </div>
    )

    

   
    return(
        <div className="showcities">
        {arr&&cityShow(arr)&&<h6>your city was created with succes</h6>}
        </div>
    )
}