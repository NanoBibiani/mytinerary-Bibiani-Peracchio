import { useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'
import Login from './Login'
import '../styles/header.css'


const pages = [
    {name: 'Home', to: '/home'},
    {name: 'Cities', to: '/cities'},
    {name: 'New Cities', to: '/newcities'},
    /* {name: 'Contact', to: '/contact'}, */ // pagina de contaacto suma?
]

const link = (page) => <li><LinkRouter className='Header-link' to={page.to} key={page.name}>{page.name}</LinkRouter></li>

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
            <div className='ProfileContainer'>
                <img className='Usuario' src="http://localhost:3000/usuario.png" alt="usuario"></img>
                <a className='ProfileLink' href="#">Profile</a>
                <a className='ProfileLink' href="#">Log In</a>
            </div>
            <div className='Maping'>
            {pages.map(link)}
            </div>
            <div className='LogoContainer'>
              <img className = "logoViaje" src="http://localhost:3000/logosinfondo.png" alt="Logo"></img>
            </div>



            {/* menu hamburguesa */}
            <div className="Burger">
            <button className='ButtonBurger' onClick={handleOpenMenu}>☰</button>
             <div className='ContenedorBurger'> 
                {
                    open
                        ? <div className='LinkBurger'>
                             {pages.map(link)}
                        </div>
                        : null
                }
            </div>
        </div>
        </div>
    )
}