
import Welcome from '../componentes/Welcome';

import SitioWebLayout from '../layouts/SitioWebLayout';
import HomePage from './HomePage';

import Cities from './Cities';
import '../styles/footer.css'
import '../styles/welcome.css'
import '../styles/header.css'
import '../styles/carousel.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import UnderConstruction from '../componentes/UnderConstruction';
import ShowCities from '../componentes/ShowCities';
import NewCities from '../componentes/NewCities';

function App() {
  return (
    <div className="App">


      <>
        <BrowserRouter>
        <SitioWebLayout>

          <Routes>

              <Route path='/' element={<HomePage/>}/>
              <Route path='/welcome' element={<Welcome/>}/>
              <Route path='/cities' element={<Cities/>}/>
              <Route path='/showcities' element={<ShowCities/>}/>
              <Route path='/newcities' element={<NewCities/>}/>
              <Route path='/*' element={<UnderConstruction/>}/>

        
          </Routes>

        </SitioWebLayout>
        </BrowserRouter>

      </>
      


      {/* <EventCarousel/> */}
      {/* <SitioWebLayout /> */}
      {/*  */}
      {/* <Header />
      <Footer /> */}
     {/*  
     <Footer /> */}
    </div>
  );
}

export default App;
