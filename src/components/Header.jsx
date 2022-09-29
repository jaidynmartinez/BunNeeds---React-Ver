import React from 'react'
import logo from './images/logo.png'
import './header.css'


const Header = () => {

    return(
        <div className='header-contain'>
            <div className='new-items'>
                <p>new items in shop!</p>
            </div>
            <div className='header-flex'>
                    <div className='logo'><img src={logo}/></div>
                    <div className='title'><p>BunNeeds</p></div>
                    <div className='login'><p>login</p></div>
            </div>
            <div className='nav-contain'>
                    <ul className='nav-ul'>
                        <li>Home</li>
                        <li>Adopt</li>
                        <li>Shop</li>
                    </ul>
            </div>
        </div>

    )
}

export default Header