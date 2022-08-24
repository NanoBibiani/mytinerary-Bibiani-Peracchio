import CallToAction from "./CallToAction"
import "../styles/under.css"
export default function UnderConstruction(){

    return(

    
    <div className="underConst">
        <CallToAction linkTo='#' TextButon='404' Clases ="button"/>
        <h4 className="underText">not found  or under contruction page</h4>
        <CallToAction linkTo='/' TextButon='Go-back home' Clases ="button"/>

    </div>
    
    )
}