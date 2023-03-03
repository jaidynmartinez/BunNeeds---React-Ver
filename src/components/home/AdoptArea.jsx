import React from 'react'
import ImageSlider from './ImageSlider'
import './adoptArea.css'

import buns1 from '../images/buns1.jpg'
import buns2 from '../images/buns2.jpg'
import buns3 from '../images/buns3.jpg'
import buns4 from '../images/buns4.jpg'
import buns5 from '../images/buns5.jpg'
import buns6 from '../images/buns6.webp'

const AdoptArea = () =>{

    const slides =[
        {url: `${buns1}`},
        {url: `${buns2}`},
        {url: `${buns3}`},
        {url: `${buns4}`},
        {url: `${buns5}`},
        {url: `${buns6}`}
    ];



    return(
        <div className='adopt-contain'>
            <div className='adopt-background'>

            </div>
            <div className='foster-background-flex'>
                <div className='foster-background'>
                    
                    <div className='slider'>
                        <div className='containerStyles'>
                        <ImageSlider slides={slides} parentWidth={480}/>
                        </div>
                    </div>
                    
                    
                
                </div>
            </div>
        </div>
    )
}

export default AdoptArea