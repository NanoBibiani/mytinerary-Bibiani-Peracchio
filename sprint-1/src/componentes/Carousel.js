    import {useEffect, useState} from "react"

export default function Carousel(prop){
    
    const arr = prop.data
    const [start , setStart]= useState([0]) //AGREGAR PROPS PARA MODIFICAR ESTADO DESDE COMPONENTE
    const [range , setRange]= useState([4]) //AGREGAR PROPS PARA MODIFICAR ESTADO DESDE COMPONENTE


    const ItemShow =(item)=>(    
    <div>
         <img src={item.img}></img>
         <p>{item.city}</p>
     </div>  
)


 useEffect(()=>{

        let id =   setInterval(function(){
                if(range < arr.length){

                    next()
                }else{
                    setRange(4)
                    setStart(0)
                }
            
        },3000)
        return()=>clearInterval(id)

 },[start])



const next = ()=>{
    if(range<arr.length){
        setRange(parseInt(range)+4)
        setStart(parseInt(start)+4)       
    }
    
}
const prev = ()=>{    
    if(range<=arr.length && range != 0 && start != 0){
        setRange(parseInt(range)-4)
        setStart(parseInt(start)-4)
    }   
}
  
    return(
        <div className ="slide">
                <button className="prev" onClick={prev}> Prev </button>
                {arr.slice(start,range).map(ItemShow)}
                <button className="next" onClick={next}>Next</button>
            </div>
    
    )
}
