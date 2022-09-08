import React, { useRef, useState } from 'react';
import CallToAction from './CallToAction';
import axios from 'axios';
export default function CitiesCards(prop){
    const[showFilter,setFilter]=useState(false)
    const [input,setInput]=useState()
    const [elem,setElem]=useState([])
    const SelectRef = useRef

axios.get("http://localhost:3001/cities/")
.then(response => setElem(response.data))

    let arr = prop.data
  
const inputFilter=(e)=>{
    setInput(e.target.value)
}

        let cityShow =(cities)=>(
            <div className="card">
            <div className="imgCard">
            <img className="imgCard1" src={cities.photo}></img>

            </div>
            <div className="bodyCard">
                <h4 className="titleCard">{cities.city}</h4>
                <p className="pCard">Country: {cities.country}</p>
                <p className="priceCard">Fundation: {cities.fundation}</p>
                     <CallToAction linkTo={`/details?${cities._id}`} TextButon="Details" Clases="buttonBuy"/>
            </div>
        </div>
        
        )


    
       
        return(
            <div className="showcities">
                {arr!=undefined?arr.map(cityShow):""}
            </div>
            
        )
    }