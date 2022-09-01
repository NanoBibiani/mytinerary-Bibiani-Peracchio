
import { useState,useRef } from "react"
import FormCity from "./FormCity"
export default function Formcities(){
    const[img,setImg]=useState()
    const [city,setCity] = useState()
    const [population,setPopulation]=useState()
    const [funded,setFunded]=useState()
    const [Country,setCountry]=useState()
    const [obj,setObj]=useState()
    const [submit,setSubmit]=useState(false)
    const inputElement = useRef();
    const inputFunded = useRef()
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
const handlePopulation = (e)=>{
    let pop = parseInt(e.target.value)
    if(Number(pop)){
        setPopulation(pop)
        
    }else{
        inputFunded.current.value=''
        alert("the price need be a number")
    }
    
  

}
const handleFunded = (e)=>{
    let num = parseInt(e.target.value)
    if(Number(num)){
        setFunded(num)
        
    }else{
        inputFunded.current.value=''
        alert("the price need be a number")
    }


}

const handleCountry=(e)=>{
    setCountry(e.target.value)
}
console.log(inputElement)
const HandleSubmit = (e)=>{
    e.preventDefault()
    let url;
    try{
        url=new URL(img)
        if(population!=undefined && city!=undefined &&Country!=undefined&& funded != undefined &&url.protocol === "http:" || url.protocol === "https:"||url.protocol === "data:"){
            inputElement.current.reset()
            const card = {
                photo:img,
                city:city,
                population:population,
                fundation:funded,
                country:Country
    
            }
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

                <form ref={inputElement} className="formCity" onSubmit={HandleSubmit} method="POST">
                    
                    <p>put the link of your image</p>
                    <input type="text" rel={inputURL}className="feedback-input" onChange={handleImg} ></input>
                    <p>Write the  City</p>
                    <input type="text"className="feedback-input" onChange={handleCity}  ></input>
                    <p>Write the Country</p>
                    <input type="text"className="feedback-input" onChange={handleCountry}  ></input>
                    <p>write a population</p>
                    <input type="text"className="feedback-input" onChange={handlePopulation}  ></input>
                    <p>write the year of funded</p>
                    <input type="text" ref={inputFunded} className="feedback-input" onChange={handleFunded}  ></input>
                    <button type="submit" linkTo={`/created`}>Create City</button>
                    
                </form>
                :<>
                <FormCity data={obj}/>
                
                </> 
                   
            }
          
        
        
        </>
                  
    )
}