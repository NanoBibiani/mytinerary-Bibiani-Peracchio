import Footer from '../componentes/Footer';
import Welcome from '../componentes/Welcome';
import Header from '../componentes/Header';
import SitioWebLayout from '../layouts/SitioWebLayout';
import HomePage from './HomePage';
import EventCarousel from '../componentes/EventCarousel'
import Cities from './Cities';
import '../styles/footer.css'
import '../styles/welcome.css'
import '../styles/header.css'
import '../styles/carousel.css'

function App() {
  return (
    <div className="App">
      <Cities />
      


      {/* <EventCarousel/> */}
      {/* <SitioWebLayout /> */}
      {/* <HomePage /> */}
      {/* <Header />
      <Footer /> */}
     {/*  <Welcome />
     <Footer /> */}
    </div>
  );
}

export default App;
