import {configureStore} from '@reduxjs/toolkit'
import ApiCities from './features/cityApi'



const store =  configureStore({


    reducer:{
        [ApiCities.reducerPath]: ApiCities.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiCities.middleware),
})
export default store