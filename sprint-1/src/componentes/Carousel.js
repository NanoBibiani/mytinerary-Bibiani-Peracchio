    

export default function Carousel(prop){
    
    const arr = prop.data
    
    let start =0
    let range=4


    const ItemShow =(item)=>(
        
    <div>
         <img src={item.img}></img>
         <p>{item.city}</p>
     </div>  
    

)
let matrix = [arr.slice(start,range).map(ItemShow)]
console.log(matrix)

const next = ()=>{

     matrix=[]
    if(range<arr.length){
        range += 4
        start += 4
        
        const item = arr.slice(start,range).map(ItemShow)
        console.log(item)
        matrix.push(item)

    }
    
}
const prev = ()=>{

        matrix=[]
    if(range<arr.length && range != 0 && start != 0){
        range += -4
        start +=  -4
        const item = arr.slice(start,range).map(ItemShow)
        console.log(item)
        matrix.push(item)
        console.log(matrix)
       
    }
    
}


   
    return(
        <div className ="slide">
                <button className="prev" onClick={prev} > Prev </button>
                {matrix}
                <button className="next" onClick={next}>Next</button>
            </div>
    
    )
}





/*
flecha 1 
range<arr.lenght ? start +4 range +4 : start0 range 4
flecha 2
range<arr.lenght && start != 0 ? start -4 range -4 :start = arr.length- 4 range = arr.length

*/









