//import React from 'react'
//import Panier from './Panier'
import CardList from './CardList'
import { styled } from 'styled-components';

function Main() {
  return (
    <MainStyled>
           
           <CardList/> 
                       
    </MainStyled>
  )
}

const MainStyled = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    overflow-y: scroll;
    scrollbar-width: thin;
    width: 100%;
    height: 90%;
    
    flex-shrink: 0;
    border-radius: 0px 0px 15px 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;
    
    
&::-webkit-scrollbar-thumb{
    border-radius: 8px;
    width:200px;
}

`;

export default Main