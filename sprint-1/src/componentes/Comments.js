import { useState } from "react"
import { useGetAllCommentsQuery } from "../features/cityApi"


export default function EventComments(){
    const {
        data:elem,

    } = useGetAllCommentsQuery()


    console.log(elem)
    let commentsShow =(comment)=>(
        <div className="cardComment">
            <h3 className="title">{comment.itinerary.name}</h3>
            <p>{comment.user}</p>
            <p className="act">{comment.comment}</p>
    </div>
        
     )

return(
    <div>
        <h1 className="titleIti">Comments</h1>
       { elem?
        elem.map(commentsShow)
        :''
       }
    </div>

  
)

}