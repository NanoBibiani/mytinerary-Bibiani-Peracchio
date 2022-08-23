import { Link as LinkRouter } from "react-router-dom"
export default function Footer () {
  let goTop=()=>{
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
    return (
        <div className = "Footer">
          <LinkRouter to='/' class="home" aria-hidden="true">home</LinkRouter>
            <div className = "socialMedia">
                <button className="top" onClick={goTop}>Go top</button>
              <h3>You can also follow us social media</h3>
                <div className = "socialMedia1">
                 <a href="">Facebook</a>
                 <a href="">Instagram</a>
                 <a href="">Whatsapp</a>
                </div>
            </div>
            <LinkRouter to='#' class="plane" aria-hidden="true">plane</LinkRouter>
        </div>
    )
}

