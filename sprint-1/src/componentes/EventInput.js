import InputSearch from "./InputSearch"
import CallToAction from "./CallToAction"
export default function EventInput({obj}){
    console.log(obj)
    const elem = [
        {
            img:"https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014619_960_720.jpg",
            city: "Osaka",
            description:'',
            price:'',
             id:1
             
         },
         {
             img:"https://cdn.pixabay.com/photo/2014/08/08/21/02/iceland-413700_960_720.jpg",
             city:"Islandia",
             description:'',
             price:'',
             id:2
         },
         {
             img:"https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg",
             city:"New york",
             description:'',
             price:'',
             id:3
         },
         {
             img:"https://cdn.pixabay.com/photo/2017/06/15/18/57/journey-2406354_960_720.jpg",
             city:"Auckland",
             description:'',
             price:'',
             id:4
         },
         {
             img:"https://cdn.pixabay.com/photo/2016/10/30/20/40/snowy-peaks-1784279_960_720.jpg",
             city:"Alberta",
             description:'',
             price:'',
             id:5
         },
         {
             img:"https://cdn.pixabay.com/photo/2018/10/02/23/13/autumn-3720160_960_720.jpg",
             city:'Zurich',
             description:'',
             price:'',
             id:6
         },
         {
             img:"https://cdn.pixabay.com/photo/2018/05/26/09/27/prizren-3430989_960_720.jpg",
             city:"Kosovo",
             description:'',
             price:'',
             id:7
         },
         {
             img:"https://cdn.pixabay.com/photo/2017/08/11/10/20/dolomites-2630272_960_720.jpg",
             city:"Dolomitas",
             description:'',
             price:'',
             id:8
         },
         {
             img:"https://cdn.pixabay.com/photo/2016/02/10/17/45/village-1192158_960_720.jpg",
             city:"Himalaya",
             description:'',
             price:'',
             id:9
         },
         {
             img:"https://cdn.pixabay.com/photo/2017/02/21/00/54/beach-2084350_960_720.jpg",
             city:"Phuket",
             description:'',
             price:'',
             id:10
         },
         {
             img:"https://cdn.pixabay.com/photo/2018/12/15/14/44/bordeaux-3876995_960_720.jpg",
             city:"Burdeos",
             description:'',
             price:'',
             id:11
         },
         {
             img:"https://cdn.pixabay.com/photo/2016/01/30/02/22/people-1169019_960_720.jpg",
             city:"Miami",
             description:'',
             price:'',
             id:12
         }
     ]

    return(
        <InputSearch datas={elem}/>
    
    )

}

