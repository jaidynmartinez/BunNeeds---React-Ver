import React from 'react'
import hexagons from '../images/bunny-side.png'
import './saleArea.css'

const SaleArea = () => {

    return(
        <div className='sale-area-contain'>
            <div className='flex-contain'>
                <div className='hexagons'>
                    <img src={hexagons}/>
                </div>
                <div className='text-contain'>
                    <div className=''>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SaleArea