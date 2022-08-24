import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import '../styles/header.css'


const pages = [
    {name: 'Home', to: '/'},
    {name: 'Cities', to: '/cities'},
    {name: 'New Cities', to: '/newcities'},
    /* {name: 'Contact', to: '/contact'}, */ // pagina de contaacto suma?
]

const link = (page) => <LinkRouter className='Header-link' to={page.to} key={page.name}>{page.name}</LinkRouter>

export default function Header() {
    const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        if(open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }


    return (
        <div className="Header">
            <div className='logos'>
              <img className = "logoViaje" src="http://localhost:3000/logosinfondo.png" alt="Logo"></img>
              <h2 className='logoh2'>JONAS</h2>
            </div>
            <div> 
                {
                    open
                        ? <ul className='ulNav'>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                        : null
                }
            </div>
            <div className='navigator'>
            {pages.map(link)}
            <a href='#' onClick={handleOpenMenu} className='Header-link'>Menu</a>

            </div>
        </div>
    )
}
 