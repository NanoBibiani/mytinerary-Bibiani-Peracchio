import React from 'react';
import CallToAction from './CallToAction';
export default function CitiesCards(prop){
    let arr = prop.data
    let link = prop.link
        let cityShow =(cities)=>(
            <div className="card">
            <div className="imgCard">
            <img className="imgCard1" src={cities.img}></img>

            </div>
            <div className="bodyCard">
                <h4 className="titleCard">{cities.city}</h4>
                <p className="pCard">its a good idea</p>
                <p className="priceCard">$500</p>
                     <CallToAction linkTo='/notfound' TextButon="Buy" Clases="buttonBuy"/>
            </div>
        </div>
    
        )
        return(
            <div className="showcities">
                {arr!=undefined?arr.map(cityShow):""}
            </div>
            
        )
    }