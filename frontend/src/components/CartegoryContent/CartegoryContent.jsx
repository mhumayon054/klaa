import React from 'react'
import styled from 'styled-components'
import discountImg7 from "../../assets/discountImg7.jpeg"
import discountImg10 from "../../assets/discountImg10.jpeg"


const Wrapper=styled.div`
    display: flex;
    margin-top: 20px;
    justify-content: center;
    flex-direction: column;
    align-items: center;

        .discount-text {
    padding: 20px 0px;
    width: 95%;
    p {
      font-size: 30px;
      font-weight: 500;
      text-align: center;
    }
  }

  .img-container{
    height: 600px;
    width: 100%;
    display: flex;
    gap: 10px;
  }
  .img-container img{
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`
const CartegoryContent = () => {
  return (
    <Wrapper>
<div className="discount-text">
        <p>SHOP BY DISCOUNT</p>
      </div>
      <div className="img-container">
        <img src={discountImg7} alt="" />
        <img src={discountImg10} alt="" />
      </div>
      </Wrapper>
    )
}

export default CartegoryContent