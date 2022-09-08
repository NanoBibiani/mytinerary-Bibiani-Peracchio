import CallToAction from "./CallToAction"
export default function NotFound (){


    return(
        <div className="underConst">
           <h4 className="underText">
             Page not Found 404
            </h4>
            <CallToAction linkTo='/cities' TextButon='Go-back home' Clases ="button"/>
        </div>
    )
}