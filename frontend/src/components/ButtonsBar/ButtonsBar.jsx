import React from 'react'
import styled from 'styled-components'

const Wrapper=styled.div`
   display: flex;
   padding: 30px;
   align-items: center;
   justify-content: center;
   gap: 30px;

   button{
    border:none;
    background-color: transparent;
    font-size: 20px;
    color: black;
   }
`
const ButtonsBar = () => {
  return (
    <Wrapper>
        <button>First Ever Sale</button>
        <button>Upto 30% Off</button>
        <button>Upto 40% Off</button>
        <button>Upto 50% Off</button>
        <button>Limited Edition</button>
        <button>Unisex</button>
        <button>Kid's </button>
    </Wrapper>
  )
}

export default ButtonsBar