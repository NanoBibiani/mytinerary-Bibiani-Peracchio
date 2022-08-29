import CallToAction from "./CallToAction"

export default function Details(props){
    let arr = props.datas
    

    
    let id = window.location.search.split('?').filter(Number)
    console.log(id)
    
    let selectID = Number(id[0])
    console.log(selectID)    

     let cityShow =(city)=>(
        <div className="cardDetails">
        <div className="imgCardDetails">
        <img className="imgCard1Details" src={city.img}></img>

        </div>
        <div className="bodyCardDetails">
            <h4 className="titleCardDetails">{city.city}</h4>
            <p className="pCardDetails">{city.description}</p>
            <p className="priceCardDetails">{city.price}</p>
            <CallToAction linkTo={`#`} TextButon="BUY" Clases="buttonBuyDetails"/>
        </div>
    </div>
     )
   

  let encontrar =arr.filter((e)=>e.id===selectID)
  console.log(encontrar)

  
    return(
        <div className="Details">

            {
             arr.filter((e)=>e.id===selectID).map(cityShow)
            }
        </div>
        
    )

}