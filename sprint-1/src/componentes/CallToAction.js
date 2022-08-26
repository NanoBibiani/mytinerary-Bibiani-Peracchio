import { Link as LinkRouter } from "react-router-dom"
export default function CallToAction(prop){

let linkTo = prop.linkTo
let TextButon = prop.TextButon
let Clases = prop.Clases
let ides = prop.ides
    return(
    
       <LinkRouter className = {Clases} id={ides} to={linkTo}>{TextButon.toUpperCase()}</LinkRouter>
        
    )

}