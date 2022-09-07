import { useGetAllItinerariesQuery } from "../features/cityApi"
import CallToAction from "./CallToAction"
export default function EventItineraries(){
    const {
        data:elem,

    } = useGetAllItinerariesQuery()


    console.log(elem)
    let cityShow =(city)=>(
        <div className="cardItineraries">
            <h3 > {city.name}</h3>
            <h4 >User Name: {city.user}</h4>
            <p >Price: {city.price}</p>
            <p >Likes: {city.likes}</p>
            <p >Tags: {city.tags}</p>
            <p >Duration: {city.duration}</p>
            <CallToAction linkTo={`/cities`} TextButon="Go Back Cities" Clases="ItinerariesButton"/>
            <br></br>
            <hr></hr>
    </div>
        
     )

return(
    <div>
        <h1 className="titleIti">Itineraries</h1>

       { elem?
        elem.map(cityShow)
        :''
       }
    </div>

  
)

}