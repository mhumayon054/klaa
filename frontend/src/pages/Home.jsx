import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import NewProducts from '../components/NewProducts/NewProducts'
import ButtonsBar from '../components/ButtonsBar/ButtonsBar'
import CardCarousal from '../components/CardCarousal/CardCarousal'
import DiscountSection from '../components/DiscountSection/DiscountSection'
import CartegoryContent from '../components/CartegoryContent/CartegoryContent'
import ImgCarousal from '../components/ImgCarousal/ImgCarousal'
import BrandsSection from '../components/BrandsContent/BrandsContent'
import SliderComponent from '../components/SliderComponent/SliderComponent'
import Footer from '../components/Footer/Footer'
import WhatsaappBtn from '../components/WhatsappBtn/WhatsappBtn'
import MainCarousel from '../components/MainCarousal/MainCarousal';
import "./Home.css"

const Home = () => {
  return (
    <div>
        {/* <Navbar/> */}
        <MainCarousel/>
        <NewProducts/>
        <ButtonsBar/>
        <CardCarousal/>
        <DiscountSection/>
        <CartegoryContent/>
        <ImgCarousal/>
        <BrandsSection/>
        {/* <ProductCarousal/>  */}
        <SliderComponent/>
        <Footer/>
      <WhatsaappBtn/>
    </div>
  )
}

export default Home