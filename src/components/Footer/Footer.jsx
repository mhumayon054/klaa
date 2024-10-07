import React from 'react';
import styled from 'styled-components';
import facebook from '../../assets/facebook.svg'; 
import instagram from '../../assets/instagram.svg';
import tiktok from "../../assets/tiktok.svg";
import snapchat from '../../assets/snapchat.svg';
import linkedin from '../../assets/linkedin.svg';

const Wrapper = styled.div`
p,
p a,
li a{
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
  }

  .footer-column {
    flex: 1;
    margin-right: 20px;
  }

  .footer-column h4 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 15px;
    color: #222;
  }

  .footer-column p{
    margin-bottom: 10px !important;
    font-size: 12px;
    color: #878787;
  }
  .footer-column li {
    font-size: 12px;
    color: #878787;
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

  .app-icons img {
    width: 120px;
    margin-right: 10px;
  }

  .social-icons img {
    width: 24px;
    margin-top: 10px;
    margin-right: 10px;
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
.copyright-text{
  display: flex;
  justify-content: center;
p{
    font-size: 14px;
    font-weight: 600;
    background-color: #C5C6C6;
}

}
  `;

const Footer = () => {
  return (
    <Wrapper>
      <footer className="footer">
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            Email Us: <a href="mailto:sales@asimjofa.com">sales@asimjofa.com</a>
          </p>
          <p>
            Call Us: <a href="tel:+922111111JOFA">+92-21-111-11JOFA (5632)</a>
          </p>
          <p>
            Whatsapp Us: <a href="tel:+923211244440">+923211244440</a>
          </p>
          <div className="whatsapp-channel">
            <a href="#" className="whatsapp-link">
              Join our WhatsApp Channel
            </a>
          </div>
          <div className="social-icons">
            <a href="#">
              <img style={{width:"20px", height:"20px"}} src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/klaa_fashion?igsh=MTEzbmxzMHRnazRwbA==">
              <img style={{width:"25px", height:"25px"}} src={instagram} alt="Instagram" />
            </a>
            <a href="#">
              <img style={{width:"25px", height:"25px"}} src={snapchat} alt="Snapchat" />
            </a>
            <a href="#">
              <img style={{width:"25px", height:"25px"}} src={tiktok} alt="TikTok" />
            </a>
            <a href="#">
              <img style={{width:"25px", height:"25px"}} src={linkedin} alt="TikTok" />
            </a>
          </div>
        </div>
        <div className="footer-column">
          <h4>Customer Care</h4>
          <ul>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Track your order</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Information</h4>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Stockists</a>
            </li>
            <li>
              <a href="#">Wholesale</a>
            </li>
            <li>
              <a href="#">Ecatalogue</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Policies</h4>
          <ul>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Shipping Policy</a>
            </li>
            <li>
              <a href="#">Ordering & Tracking</a>
            </li>
            <li>
              <a href="#">Return & Exchanges</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Cookies Policy</a>
            </li>
          </ul>
        </div>
      </footer>
        <div className='copyright-text'><p>©2024 Asim Jofa Global (Private) Limited All rights reserved.</p></div>
    </Wrapper>
  );
};

export default Footer;