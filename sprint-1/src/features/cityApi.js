import {createApi,  fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const ApiCities = createApi({
    reducerPath : 'ApiCities',

    baseQuery : fetchBaseQuery({
        baseUrl:"http://localhost:3001/"

    }),
    endpoints: (builder)=>({
        
        GetAllCities : builder.query({
            query :()=> '/cities'
        }),
        GetIdCity : builder.query({
            query:(id)=>`/cities/${id}`
        }) 

    })
})

export default ApiCities
export  const {useGetAllCitiesQuery,useGetIdCityQuery} = ApiCities
