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
            <div>
              <img className = "logoViaje" src="http://localhost:3000/logosinfondo.png" alt="Logo"></img>
            </div>
            <div> 
                {
                    open
                        ? <ul>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                        : null
                }
            </div>
            {pages.map(link)}
            <button onClick={handleOpenMenu}>Menu</button>
        </div>
    )
}
 