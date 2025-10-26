import React from 'react';
import Sliding from '../component/Sliding';
import Testimonials from '../component/Testimonials/Testimonials';
import TopSellingItems from '../component/TopSellingItems';
import ShopByCategories from '../component/ShopByCategories';
import CelebrityOutfits from '../component/CelebrityOutfits';
import DressesShopSection from '../component/DressesShopSection';
import ShopByPrice from '../component/ShopByPrice';
import ContactSection from '../component/ContactSection';
import Footer from '../component/Footer';
// import VideoSection from '../component/VideoSection'; // Uncomment if needed

const MainPage = () => {
  return (
    <>
      <section>
        <Sliding />
      </section>
       
      <section>
        <Testimonials />
      </section>

      <section >
        <TopSellingItems />
      </section>

      <section >
        <ShopByCategories />
      </section> 

      {/* Uncomment below if you want the video section */}
      {/*
      <section style={{ padding: '60px 0' }}>
        <VideoSection />
      </section>
      */}

      <section>
        <CelebrityOutfits />
      </section>

      <section >
        <DressesShopSection />  
      </section>

      <section>
        <ShopByPrice />
      </section>

      <section>
        <ContactSection />  
      </section>

      <footer>
        <Footer />  
      </footer>
    </>
  );
};

export default MainPage;
        