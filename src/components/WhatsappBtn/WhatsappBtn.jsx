import React from 'react';
import styled from 'styled-components';
import whatsapp from "../../assets/whatsapp.svg"; // Adjusted path

const Button = styled.a`
display: flex;
justify-content: flex-end;
position: fixed;
right: 10px;
bottom: 10px;
z-index: 1;
.wa-btn:hover {
    transition: transform 0.3s ease-in-out;
    transform: scale(1.1) translateY(-5px); 
}

`;

const WhatsaappBtn = () => {
  return (
    <Button href="https://wa.me/923194160712" target="_blank" rel="noopener noreferrer">
        <div className='wa-btn'>
      <img style={{width:"40px", height:"40px"}} src={whatsapp} alt="" />
      </div>
    </Button>
  );
};

export default WhatsaappBtn;
