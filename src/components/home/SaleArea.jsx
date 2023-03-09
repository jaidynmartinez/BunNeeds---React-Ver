import React from 'react'
import './saleArea.css'

import bunDress1 from '../images/bunDress.webp'
import bunDress2 from '../images/bunDress2.webp'
import bunDress3 from '../images/bunDress3.webp'
import bun3 from '../images/buns3.jpg'

const SaleArea = () => {

    return(
        <div className='sale-area-contain'>
            <div className='sales-block'>
                <p>Check out all our new accessories! <br/>
                <span>10% of all purchases go to our rabbit rescue!</span>
                </p>
            <div className='sales-circles-contain'>
                <div id='first-circle'><img src={bunDress1}/></div>
                <div id='second-circle'><img src={bunDress2}/></div>
                <div id='third-circle'><img src={bunDress3}/></div>
            </div>
            <div className='sales-picture'>
                <img src={bun3}/>
            </div>
            <div className='sales-picture-title'>
                <h1>25% off all Bun® products!</h1>
            </div>
            </div>
        </div>
    )
}

export default SaleArea