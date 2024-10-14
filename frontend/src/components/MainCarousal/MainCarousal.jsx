import React from 'react';
import beige from '../../assets/beige.webp';
import girl from '../../assets/girl.webp';
import outfits from '../../assets/outfits.webp';
import staller from '../../assets/staller.webp';
import palette from '../../assets/palette.webp';
import "bootstrap/dist/css/bootstrap.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

const MainCarousel = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <div id="carouselExampleInterval" style={{ width: "100%",  overflow: "hidden" }} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: "100%" }}>
          <div className="carousel-item active" data-bs-interval="10000">
            <img src={beige} className="d-block w-100" alt="..." style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img src={girl} className="d-block w-100" alt="..." style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="10000">
            <img src={outfits} className="d-block w-100" alt="..." style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={palette} className="d-block w-100" alt="..." style={{ height: "100%", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src={staller} className="d-block w-100" alt="..." style={{ height: "100%", objectFit: "cover" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default MainCarousel;
