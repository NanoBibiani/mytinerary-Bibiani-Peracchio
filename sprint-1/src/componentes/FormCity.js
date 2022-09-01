import EventCities from "./EventCities"
import EventInput from "./EventInput"
import CallToAction from "./CallToAction"
export default function({obj}){

    let cityShow =(city)=>(
        <div className="card">
        <div className="imgCard">
        <img className="imgCard1" src={city.img}></img>

        </div>
        <div className="bodyCard">
            <h4 className="titleCard">{city.city}</h4>
            <p className="pCard">{city.description}</p>
            <p className="priceCard">{city.price}</p>
                 <CallToAction linkTo='/notfound' TextButon="Buy" Clases="buttonBuy"/>
        </div>
    </div>
    )

    console.log(obj)
    return(
        <div className="showcities">
        {obj!=undefined?obj.map(cityShow):""}
        </div>
    )
}