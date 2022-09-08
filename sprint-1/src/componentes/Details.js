import CallToAction from "./CallToAction"


import { useGetIdCityQuery ,useGetFilterItinerariesQuery} from "../features/cityApi"
export default function Details(){
 




    let id = window.location.search.split('?')
    console.log(id)

    let selectID = id[1]
    console.log(selectID)


    const {
        data:elem,

    } = useGetIdCityQuery(selectID)



    const {
        data:itiner,

    } = useGetFilterItinerariesQuery(selectID)
    console.log(itiner)
     let cityShow =(city)=>(
        <div className="cardDetails">
          <div className="imgCardDetails">
            <img className="imgCard1Details" src={city.photo}></img>
        </div>
        <div className="bodyCardDetails">
            <div>
            <h4 className="titleCardDetails">{city.city}</h4>
            <p className="pCardDetails">{city.country}</p>
            <p className="priceCardDetails">Population: {city.population}</p>
            <p className="priceCardDetails">Fundation: {city.fundation}</p>

            </div>
        <CallToAction linkTo={'/cities'} TextButon="Go Back Cities" Clases="buttonBuyDetails"/>
        </div>
    </div>
     )

     let cityItiner =(itiner)=>(
        <div className="bodyCardItiner">
            <h4 className="titleCardDetails">{itiner.city.city}</h4>
            <p className="pCardDetails">{itiner.name}</p>
            <p className="priceCardDetails">Duration: {itiner.duration}</p>
            <p className="priceCardDetails">User: {itiner.user.name}</p>

        </div>

     )





    return(
        <div className="Details">

            {elem?elem && cityShow(elem.response):''}
            <h2 className="titleIter">Itineraries  {elem?elem.response.city:''}</h2>
            {itiner?itiner.map(cityItiner) :<h3>No hay itinerarios de esta ciudad</h3>}
        </div>

    )

}