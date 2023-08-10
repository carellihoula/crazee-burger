//import React from 'react'
import Panier from './Panier'
import CardList from './CardList'
import { styled } from 'styled-components';
import Admin from '../admin/Admin';

function Main() {
  return (
    <MainStyled>

            <ContentWrapper>
                <CardList/>
                <Admin/>  
            </ContentWrapper>
                          
    </MainStyled>
  )
}

const MainStyled = styled.div`
  
    overflow-y: auto;
    scrollbar-width: thin;
    width: 100%;
    height: 90%;
    padding-top:0;
    flex-shrink: 0;
    border-radius: 0px 0px 15px 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;
    

`;

const ContentWrapper = styled.div`
    

`

export default Main