import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px; /* Padding for the outer wrapper */
  width: 100%; /* Full width for the wrapper */

  .btns-sale {
    display: flex;
    padding: 10px 20px; /* Padding around the button container */
    align-items: center;
    justify-content: flex-start; /* Align buttons to the left */
    gap: 20px; /* Gap between buttons */
    flex-wrap: nowrap; 
    overflow-x: auto; 
    width: calc(100% - 30px); /* Full width minus margin */
    max-width: 1000px; /* Optional: Restrict maximum width */
    margin-left: 15px; /* Add margin to the left side */
  }

  @media screen and (max-width: 1024px) {
    justify-content: flex-start; /* Ensure buttons stay aligned to the left */
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 16px; /* Font size for buttons */
    color: black;
    padding: 10px 15px; /* Padding inside buttons for better touch area */
    white-space: nowrap; /* Prevents text wrapping */
    transition: background-color 0.3s; /* Smooth transition for hover effect */
    
    /* Optional: Add hover effect */
    &:hover {
      background-color: rgba(0, 0, 0, 0.1); /* Light background on hover */
      cursor: pointer; /* Cursor change on hover */
    }
  }

  @media screen and (max-width: 430px) {
    display: none; /* Hide buttons on small screens */
  }
`;

const ButtonsBar = () => {
  return (
    <Wrapper>
      <div className="btns-sale">
        <button>First Ever Sale</button>
        <button>Upto 30% Off</button>
        <button>Upto 40% Off</button>
        <button>Upto 50% Off</button>
        <button>Limited Edition</button>
        <button>Unisex</button>
        <button>Kid's</button>
      </div>
    </Wrapper>
  );
};

export default ButtonsBar;
