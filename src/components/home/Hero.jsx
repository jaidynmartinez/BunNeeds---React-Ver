import React from 'react'
import bee from '../images/bee.jpeg'
import './hero.css'

const Hero = () => {

    return(
        <div className='hero-contain'>
            <div className='second'>
                <img src={bee} alt='second'/>
            </div>
            <div className='first-third'>
                <img src={bee} alt='first'/>
                <img src={bee} alt='third'/>
            </div>
        </div>
    )
}

export default Hero