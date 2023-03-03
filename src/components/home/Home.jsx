import React from 'react'

import Hero from './Hero'
import SaleArea from './SaleArea'
import AdoptArea from './AdoptArea'
import ShopArea from './ShopArea'
import ArticleArea from './ArticleArea'

const Home = () => {


    return(
        <div>
            <p>Welcome to Bunny Heaven!</p>
            <Hero />
            {/* <SaleArea />
            <AdoptArea />
            <ShopArea />
            <ArticleArea /> */}
        </div>
    )
}

export default Home