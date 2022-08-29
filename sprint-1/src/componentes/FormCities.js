import { useState,useRef } from "react"
import FormCity from "./FormCity"
export default function Formcities(){
    const[img,setImg]=useState()
    const [city,setCity] = useState()
    const [description,setDescription]=useState()
    const [price,setPrice]=useState()
    const [obj,setObj]=useState()
    const [submit,setSubmit]=useState(false)
    const inputElement = useRef();
    const inputPrice = useRef()
    const inputURL = useRef()
const handleImg =(e)=>{

        setImg(e.target.value)
     


}
const handleCity =(e)=>{
    let name =e.target.value.charAt(0).toUpperCase()
    let Minuscula = (e.target.value.substring(1,e.target.value.length))
    let Combinacion = name.concat(Minuscula)

setCity(Combinacion)

}
const handleDescription = (e)=>{
    if(e.target.value)
    
setDescription(e.target.value)
  

}
const handlePrice = (e)=>{
    let num = parseInt(e.target.value)
    if(Number(num)){
        setPrice(num)
        
    }else{
        inputPrice.current.value=''
        alert("the price need be a number")
    }


}
const handleSubmit = (e)=>{
    e.preventDefault()
    let url;
    try{
        url=new URL(img)
        if(description!=undefined && city!=undefined && price != undefined &&url.protocol === "http:" || url.protocol === "https:"||url.protocol === "data:"){
            inputElement.current.reset()
            const card = [{
                id: Math.random(),
                img:img,
                city:city,
                description:description,
                price:price
    
            }]
            console.log(card)
            setSubmit(true)
            setObj(card)
            
            
            
        }
    }catch(error){
        alert("that url its invalid")
        console.log(inputURL.current)
    }
 

}


    return(
        
        <>
            { !submit?

                <form ref={inputElement} className="formCity" onSubmit={handleSubmit}>
                    
                    <p>Ingrese el link de la Imagen</p>
                    <input type="text" rel={inputURL}className="feedback-input" onChange={handleImg} ></input>
                    <p>Ingrese el nombre de la ciudad</p>
                    <input type="text"className="feedback-input" onChange={handleCity}  ></input>
                    <p>Ingrese una descripcion</p>
                    <input type="text"className="feedback-input" onChange={handleDescription}  ></input>
                    <p>Ingrese el Precio</p>
                    <input type="text" ref={inputPrice} className="feedback-input" onChange={handlePrice}  ></input>
                    <button type="submit">Create City</button>
                    
                </form>
                :<>
                <FormCity obj={obj}/> 
                
                </> 
                   
            }
          
        
        
        </>
                  
    )
}