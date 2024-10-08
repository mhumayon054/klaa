import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";
import "swiper/css";
import styled from "styled-components";
import fabricImg1 from "../../assets/fabricImg1.jpeg"
import fabricImg2 from "../../assets/fabricImg2.jpeg"
import fabricImg3 from "../../assets/fabricImg3.jpeg"
import fabricImg4 from "../../assets/fabricImg4.jpeg"
import fabricImg5 from "../../assets/fabricImg5.jpeg"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 20px;
  align-items: center;
  .top-text {
    padding: 20px 0px;
    width: 95%;
    p {
      font-size: 30px;
      font-weight: 500;
      text-align: center;
    }
  }
  .swiper {
    z-index: 0;
  }
  .carousal-btns-parent {
    display: flex;
    justify-content: center;
  }
  .carousal-btns {
    display: flex;
    width: 95%;
    justify-content: space-between;
    position: relative;
    transform: translateY(-200px);
    button {
      border: none;
      background: transparent;
      color: white;
      font-size: x-large;
    }
  }
`;

const SliderComponent = () => {
  const swiperRef = useRef(null); // Create a reference to the Swiper

  const images = [fabricImg1, fabricImg2, fabricImg3, fabricImg4, fabricImg5];

  return (
    <Wrapper>
      <div className="top-text">
        <p>SHOP BY FABRIC</p>
      </div>
      <div style={{ maxWidth: "100%" }}>
        <Swiper
          ref={swiperRef} // Attach the reference to Swiper
          spaceBetween={5}
          slidesPerScroll={4}
          slidesPerView={4}
          speed={300}
          loop={true}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div style={{ height: "375px", backgroundColor: "#f0f0f0" }}>
                <img
                  src={img}
                  alt={`Slide ${index}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="carousal-btns-parent">
          <div className="carousal-btns">
            <button onClick={() => swiperRef.current.swiper.slidePrev()}>
              <SlArrowLeft />
            </button>
            <button onClick={() => swiperRef.current.swiper.slideNext()}>
              <SlArrowRight />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SliderComponent;
