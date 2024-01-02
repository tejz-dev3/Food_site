import React from 'react'
import '/index.css'
import { LOGO_URL } from '../utils/constants'
import { useState } from 'react'

function Header() {
  const [btnLog, setbtnLog] = useState('Login')
  return (
    <div className='Header-container'>
        <img  className="log-img" src={LOGO_URL} alt="res-logo"/>
        <div>
            <ul className='nav-items'>
                <li>Home</li>
                <li>AboutUs</li>
                <li>Contact Us</li>
                <li>Cart</li>
                <button onClick={()=>
                 btnLog === 'Login' ?
                 setbtnLog('Logout'): setbtnLog('Login')
                }>{btnLog}</button>
            </ul>
        </div>
    </div>
    
  )
}

export default Header
