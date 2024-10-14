import React from 'react';
import styled from 'styled-components';
import facebook from '../../assets/facebook.svg'; 
import instagram from '../../assets/instagram.svg';
import tiktok from "../../assets/tiktok.svg";
import youtube from '../../assets/youtube.svg';
import linkedin from '../../assets/linkedin.svg';

const Wrapper = styled.div`
  p,
  p a,
  li a {
    color: rgb(153, 101, 21) !important;
  }
  display: flex;
  flex-direction: column;
  background-color: rgb(255, 245, 235);
  justify-content: center;
  
  .footer {
    display: flex;
    justify-content: space-between;
    padding: 30px;
    width: 85%;
    font-family: Arial, sans-serif;

    @media (max-width: 1024px) {
      flex-direction: column;
      padding: 20px;
      width: 100%;
    }
  }

  .footer-column {
    flex: 1;
    margin-right: 20px;

    @media (max-width: 1024px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }

  .footer-column h4 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #222;

    @media (max-width: 768px) {
      font-size: 12px;
    }
  }

  .footer-column p,
  .footer-column li {
    font-size: 12px;
    color: #878787;
    margin-bottom: 10px;

    @media (max-width: 768px) {
      font-size: 11px;
    }
  }

  .footer-column a {
    color: #878787;
    text-decoration: none;
  }

  .footer-column a:hover {
    text-decoration: underline;
  }

  .footer-column ul {
    list-style-type: none;
    padding: 0;
  }

  .footer-column ul li {
    margin-bottom: 10px;
  }

  .social-icons {
    display: flex;
    align-items: center;
  }

  .social-icons img {
    width: 25px;
    height: 25px;
    margin-right: 10px;

    @media (max-width: 768px) {
      width: 20px;
      height: 20px;
    }
  }

  .whatsapp-channel {
    margin-top: 10px;
  }

  .whatsapp-channel a {
    color: #3dbb18;
    font-weight: bold;
    font-size: 16px;
  }

  .whatsapp-link:hover {
    text-decoration: underline;
  }

  .copyright-text {
    display: flex;
    justify-content: center;
    padding: 10px;
    background-color: #c5c6c6;

    p {
      font-size: 14px;
      font-weight: 600;
      text-align: center;

      @media (max-width: 768px) {
        font-size: 12px;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>Email Us: <a href="mailto:sales@asimjofa.com">klaaofficial00@gmail.com</a></p>
          <p>Call Us: <a href="tel:+922111111JOFA">+92319 4160712</a></p>
          <p>Whatsapp Us: <a href="tel:+923211244440">+92319 4160712</a></p>
          <div className="whatsapp-channel">
            <a href="#" className="whatsapp-link">Join our WhatsApp Channel</a>
          </div>
          <div className="social-icons">
            <a href="#"><img src={facebook} alt="Facebook" /></a>
            <a href="https://www.instagram.com/klaa_fashion"><img src={instagram} alt="Instagram" /></a>
            <a href="https://youtube.com/@klaaofficial"><img src={youtube} alt="YouTube" /></a>
            <a href="#"><img src={tiktok} alt="TikTok" /></a>
            <a href="#"><img src={linkedin} alt="LinkedIn" /></a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Customer Care</h4>
          <ul>
            <li><a href="#">My Account</a></li>
            <li><a href="#">Track your order</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Stockists</a></li>
            <li><a href="#">Wholesale</a></li>
            <li><a href="#">Ecatalogue</a></li>
            <li><a href="#">Blogs</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Ordering & Tracking</a></li>
            <li><a href="#">Return & Exchanges</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookies Policy</a></li>
          </ul>
        </div>
      </footer>
      <div className="copyright-text">
        <p>©2024 KLAA STUDIO Global (Private) Limited All rights reserved.</p>
      </div>
    </Wrapper>
  );
};

export default Footer;
