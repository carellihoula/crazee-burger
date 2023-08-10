//import React from 'react'
//import Panier from './Panier'
import CardList from './CardList'
import { styled } from 'styled-components';
import Panier from './Panier';
import Admin from '../admin/Admin';

function Main() {
  return (
    <MainStyled>
           <Panier/>
        
           <ContentWrapper>
                <CardList/> 
                <Admin/>
           </ContentWrapper>
           
                       
    </MainStyled>
  )
}

const MainStyled = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    
    width: 100%;
    flex:1;
    height: 90%;
    flex-shrink: 0;
    border-radius: 0px 0px 15px 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;

`;

const ContentWrapper = styled.div`
  overflow: hidden; 
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 15px;
 
  
`;

export default Main