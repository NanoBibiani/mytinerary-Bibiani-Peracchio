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
            <p className="pCard">{city.population}</p>
            <p className="priceCard">{city.fundation}</p>
                 <CallToAction linkTo={'asd'} TextButon="City Created" Clases="buttonBuy"/>
        </div>
    </div>
    )




    return(
        <div className="showCreated">
            <h1>City created successfully</h1>
        {arr&&cityShow(arr)}
        </div>
    )
}
