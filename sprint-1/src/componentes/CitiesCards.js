export default function CitiesCards(prop){
    let arr = prop.data
        let cityShow =(cities)=>(
            <div className="card">
            <img className="imgCard" src={cities.img}></img>
            <div className="bodyCard">
                <h4 className="titleCard">{cities.city}</h4>
                <p className="pCard">its a good idea</p>
                <p className="priceCard">$ 500</p>
            </div>
        </div>
    
        )
        return(
            <div className="showcities">
                {arr!=undefined?arr.map(cityShow):""}
            </div>
            
        )
    }