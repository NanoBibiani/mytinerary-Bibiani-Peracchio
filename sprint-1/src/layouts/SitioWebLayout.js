import Header from "../componentes/Header"
import Footer from "../componentes/Footer"


export default function SitioWebLayout (props) {
    return (
        <div>
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}