import React, {useState} from 'react'
import logo from './images/logo.png'
import './header.css'


const Header = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {setOpenMenu(!openMenu)}

    return(
        <div className='header-contain'>
            {/* <div className='new-items'>
                <p>new items in shop!</p>
            </div> */}
                <div className='title'>
                    <img src={logo}/>
                    <h1>BunNeeds</h1>
                </div>
            
                <div className='toggle-menu' onClick={toggleMenu} >
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>

            {openMenu?
            <div className='nav-contain'>
                    <ul className='nav-ul'>
                        <li>Home</li>
                        <li>Adopt</li>
                        <li>Shop</li>
                    </ul>
            </div>
            : null}
        </div>

    )




}

export default Header