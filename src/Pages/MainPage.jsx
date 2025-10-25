import React from 'react'
import Sliding from '../component/Sliding'
import Testimonials from '../component/Testimonials/Testimonials'
import TopSellingItems from '../component/TopSellingItems'
 import ShopByCategories from '../component/ShopByCategories'
    

const MainPage = () => {
  return (
    <>
      <section>
        <Sliding />
      </section>
       
       <section>
        <Testimonials />
      </section>

      <section>
        <TopSellingItems />
      </section>

      <section>
        <ShopByCategories />
      </section> 

      
    </>
  )
}

export default MainPage
