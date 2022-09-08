import { useGetAllActivitiesQuery } from "../features/cityApi"

export default function EventActivities(){
    const {
        data:elem,

    } = useGetAllActivitiesQuery()


    console.log(elem)
    let activitiesShow =(activity)=>(
        <div className="cardActivities">
            <h3 className="title">{activity.name}</h3>
            <p>{activity.photo}</p>
            <p className="act">{activity.itinerary.name}</p>
    </div>
        
     )

return(
    <div>
        <h1 className="titleIti">Activities</h1>

       { elem?
        elem.map(activitiesShow)
        :''
       }
    </div>

  
)

}