import CallToAction from "./CallToAction"
export default function EventItineraries(props){
    const arr = props.data
    let cityShow =(city)=>(
        <div className="cardDetails">
        <div className="imgCardDetails">
        <img className="imgCard1Details">{city.name}</img>
    
        </div>
        <div className="bodyCardDetails">
            <h4 className="titleCardDetails">{city.user}</h4>
            <p className="pCardDetails">{city.price}</p>
            <p className="priceCardDetails">Likes: {city.likes}</p>
            <p className="priceCardDetails">Tags: {city.tags}</p>
            <p className="priceCardDetails">Duration: {city.duration}</p>
            <CallToAction linkTo={`/cities`} TextButon="Go Back Cities" Clases="buttonBuyDetails"/>
        </div>
    </div>
     )

     return(
        <>
        {arr && cityShow(arr.response)}
        </>
     )

}