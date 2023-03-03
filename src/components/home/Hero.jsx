import React from 'react'
import './hero.css'

import bunDiet from '../images/bunDiet.jpeg'
import bunHide from '../images/bunHide.jpeg'
import bunToys from '../images/bunToys.jpeg'

const Hero = () => { 

    return(
        <div className='hero-contain'>
            <h1 id='hero-title'>shop all of our greatest deals!</h1>
            <div className='shortcuts-contain'>
                <div className='shortcuts'>
                    <img  id='shortcut-img' src={bunDiet}/>
                    <div className='shortcuts-title'>Diet</div>
                </div>
                <div className='shortcuts'>
                    <img  id='shortcut-img' src={bunHide}/>
                    <div className='shortcuts-title'>Hides</div>
                </div>
                <div className='shortcuts'>
                    <img  id='shortcut-img' src={bunToys}/>
                    <div className='shortcuts-title'>Toys</div>
                </div>
            </div>
        </div>
    )
}

export default Hero