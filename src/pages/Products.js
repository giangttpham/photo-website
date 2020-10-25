import React from 'react';
import '../App.css';
import Footer from '../components/footer/Footer'
import Cards from '../components/card/Cards'

export default function Products() {
  // return ;
  return (
    <>
      <h1 className='products'>PRODUCTS</h1>
      {/* <HeroSection /> */}
      <Cards />
      <Footer />
    </>
  );
}
