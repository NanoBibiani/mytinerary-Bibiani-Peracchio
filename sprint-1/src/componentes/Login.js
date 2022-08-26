import { useState } from 'react'
import '../styles/login.css'

export default function Login() {
     const [open, setOpen] = useState(false)

    const handleOpenMenu = () => {
        if(open == true) {
            setOpen(false)
        } else {
            setOpen(true)
        }
    }

    return (
        <div className="Login">
             <div className='Desplegable'> 
                {
                    open
                        ? <ul className='Profile'>
                            <li><img className='Usuario' src="http://localhost:3000/usuario.png" alt="usuario"></img></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Log In</a></li>
                        </ul>
                        : null
                }
            </div>
            <button className='Sesion' onClick={handleOpenMenu}>Menu</button>
        </div>
    )
}