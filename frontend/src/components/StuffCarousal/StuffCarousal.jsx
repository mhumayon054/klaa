import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Autoplay } from 'swiper';

// Sample image data
const ImageData = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 5,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 6,
    image:
      "https://images.pexels.com/photos/3140043/pexels-photo-3140043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Wrapper = styled.div`
  margin-top: 20px;
  overflow: hidden; /* Hide horizontal overflow */

  .img-carousal-container {
    width: 100%;
    padding: 10px 0px;
    margin: 0 auto;
  }

  .img-container-parent {
    width: 100%;
    margin: 0 auto;
  }

  .card {
    border: none;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .image-container {
    width: 100%;
    height: 640px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container img {
    width: 100%; /* Take full width */
    height: auto; /* Maintain aspect ratio */
    object-fit: cover; /* Ensure the image covers the entire container */
  }

  @media (max-width: 1024px) {
    .image-container {
      height: 400px; /* Adjust height for medium screens */
    }
  }

  @media (max-width: 768px) {
    .image-container {
      height: 300px; /* Adjust height for tablet screens */
    }
  }

  @media (max-width: 480px) {
    .image-container {
      height: 200px; /* Adjust height for small screens */
    }
  }
`;

const StuffCarousal = () => {
  return (
    <Wrapper>
      <div className="img-carousal-container">
        <div className="img-container-parent">
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            autoplay={{ delay: 2000 }}
            pagination={{ clickable: true }}
            breakpoints={{
              1150: {
                slidesPerView: 3, // Show 3 slides for large screens
              },
              950: {
                slidesPerView: 2, // Show 2 slides for medium screens
              },
              768: {
                slidesPerView: 2, // Show 2 slides for tablet
              },
              480: {
                slidesPerView: 1, // Show 1 slide for mobile
              },
            }}
          >
            {ImageData.map((img) => (
              <SwiperSlide key={img.id} className="card">
                <div className="image-container">
                  <img src={img.image} alt="" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

export default StuffCarousal;
