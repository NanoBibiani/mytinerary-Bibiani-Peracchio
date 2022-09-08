import {createApi,  fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const ApiCities = createApi({
    reducerPath : 'ApiCities',

    baseQuery : fetchBaseQuery({
        baseUrl:"http://localhost:3001/"

    }),
    tagTypes: ['Post'],
    endpoints: (builder)=>({
  ///////////////////Cities Get////////////////////////////////////////////////////
       
        GetAllCities : builder.query({
            query :()=> '/cities'
        }),
        GetIdCity : builder.query({
            query:(id)=>`/cities/${id}`
        }),
        GetFilterCity : builder.query({
            query:(city)=>`/cities/?city=${city}`
        }),

//////////////////Itineraries Get///////////////////////////////////////

        GetAllItineraries : builder.query({
            query :()=> '/itineraries'
        }),

        GetFilterItineraries : builder.query({
            query:(city)=>`/itineraries/?city=${city}`
        }),



 /////////////////Cities Post////////////////////////////////////////////////////       
        addNewPost: builder.mutation({
            query: (payload) => ({
              url: '/cities',
              method: 'POST',
              body: payload,
            }),          
          }),


/////////////////////Activities Post//////////////////////////////////////////
        
        GetAllActivities: builder.query({
            query: () => '/activities'
        }),
/////////////////////Comments Post//////////////////////////////////////////

GetAllComments: builder.query({
    query: () => '/comment'
}),

    })
})

export default ApiCities
export  const {useGetAllCitiesQuery,useGetIdCityQuery, useGetFilterCityQuery,useAddNewPostMutation,useGetAllItinerariesQuery,useGetAllActivitiesQuery,useGetAllCommentsQuery,useGetFilterItinerariesQuery} = ApiCities
