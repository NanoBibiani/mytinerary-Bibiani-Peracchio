
import CallToAction from "./CallToAction"
export default function Welcome(){
    return (
        <div className = "welcome">
            <h1>App MyTernary</h1>
            <p className = "slogan">The only rule of the trip is: don't come back as you left. come back different</p>
            {/* <button>Go to App</button> */}
            <CallToAction linkTo="/" TextButon='Go to App' Clases ="button"/>
        </div>
    )
}