import React from 'react'

import './shopArea.css'

const ShopArea = () =>{

    const scrollLeft = () =>{
        document.querySelector('.items-contain').scrollLeft += 300;
    }

    const scrollRight = () =>{
        document.querySelector('.items-contain').scrollLeft -= 300;
    }

    return(
        <div className='shop-area-contain'>

            <div className='shop-slider'>

                <div className='buttons'>
                    <button className='scroll-btn' id='scroll-left' onClick={scrollRight}><i className='fas fa-chevron-left'></i></button>
                    <button className='scroll-btn' id='scroll-right' onClick={scrollLeft}><i className='fas fa-chevron-right'></i></button>
                </div>

                <div className='items-contain'>
                    <div className='item-block'>
                        <img src='' alt='item' className='shop-img'/>
                        <p className='item-descript'>Item Description</p>
                    </div>
                    <div className='item-block'>
                        <img src='' alt='item' className='shop-img'/>
                        <p className='item-descript'>Item Description</p>
                    </div>
                    <div className='item-block'>
                        <img src='' alt='item' className='shop-img'/>
                        <p className='item-descript'>Item Description</p>
                    </div>
                    <div className='item-block'>
                        <img src='' alt='item' className='shop-img'/>
                        <p className='item-descript'>Item Description</p>
                    </div>
                    <div className='item-block'>
                        <img src='' alt='item' className='shop-img'/>
                        <p className='item-descript'>Item Description</p>
                    </div>
                    <div className='item-block'>
                        <img src='' alt='item' className='shop-img'/>
                        <p className='item-descript'>Item Description</p>
                    </div>
                    <div className='item-block'>
                        <img src='' alt='item' className='shop-img'/>
                        <p className='item-descript'>Item Description</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShopArea