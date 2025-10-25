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
       
      <section style={{ padding: '60px 0' }}>
        <Testimonials />
      </section>

      <section style={{ padding: '60px 0' }}>
        <TopSellingItems />
      </section>

      <section style={{ padding: '60px 0' }}>
        <ShopByCategories />
      </section> 

      {/* Uncomment below if you want the video section */}
      {/*
      <section style={{ padding: '60px 0' }}>
        <VideoSection />
      </section>
      */}

      <section style={{ padding: '60px 0' }}>
        <CelebrityOutfits />
      </section>

      <section style={{ padding: '60px 0' }}>
        <DressesShopSection />  
      </section>

      <section style={{ padding: '60px 0' }}>
        <ShopByPrice />
      </section>

      <section style={{ padding: '60px 0' }}>
        <ContactSection />  
      </section>

      <footer>
        <Footer />  
      </footer>
    </>
  );
};

export default MainPage;
        