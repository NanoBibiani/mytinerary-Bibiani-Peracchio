
import Welcome from '../componentes/Welcome';

import SitioWebLayout from '../layouts/SitioWebLayout';
import HomePage from './HomePage';

import Cities from './Cities';
import '../styles/footer.css'
import '../styles/welcome.css'
import '../styles/header.css'
import '../styles/carousel.css'
import '../styles/home.css'
import '../styles/showcities.css'
import '../styles/newcities.css'
import '../styles/sigleCard.css'
import '../styles/form.css'
import '../styles/details.css'
import {BrowserRouter, Routes , Route} from 'react-router-dom'
import UnderConstruction from '../componentes/UnderConstruction';
import ShowCities from '../componentes/ShowCities';
import NewCities from '../componentes/NewCities';
import NotFound from '../componentes/NotFound';
import FormCities from '../componentes/FormCities';
import Details from '../componentes/Details';
import ShowDetails from '../componentes/ShowDetails';
import FormCity from '../componentes/FormCity';
function App() {
  return (
    <div className="App">


      <>
        <BrowserRouter>

          <SitioWebLayout>
          <Routes>

              <Route path='/home' element={<HomePage/>}/>
              <Route path='/' element={<Welcome/>}/>
              <Route path='/cities' element={<Cities/>}/>
       
              <Route path='/newcities' element={<NewCities/>}/>
              <Route path='/under' element={<UnderConstruction/>}/>
              <Route path='/createcity' element={<FormCities/>}/>
              <Route path='/details' element={<ShowDetails/>}/>
              <Route path='/created' element={<FormCity/>}/>
                     
              <Route path='/*' element={<NotFound/>}/>
        
          </Routes>
          </SitioWebLayout>

        </BrowserRouter>

      </>
      



    </div>
  );
}

export default App;
