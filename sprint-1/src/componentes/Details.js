import CallToAction from "./CallToAction"


import { useGetIdCityQuery } from "../features/cityApi"
export default function Details(){
 
    
  

    
    let id = window.location.search.split('?')
    console.log(id)
    
    let selectID = id[1]
    console.log(selectID)    
   
    
    const {
        data:elem,

    } = useGetIdCityQuery(selectID)

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

            {elem?
            elem && cityShow(elem.response)
        :''}
        </div>
        
    )

}