//import React from 'react'
//import Panier from './Panier'
import Admin from '../admin/Admin';
import CardList from './CardList'
import { styled } from 'styled-components';
import Panier from './Panier';

function Main() {
  return (
    <MainStyled>

           <Panier/>
           <ContentWrapper>
                <CardListScrollable>
                    <CardList/>
                </CardListScrollable>
                <Admin/>
           </ContentWrapper>
            
                
    </MainStyled>
  )
}

const MainStyled = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: flex-end;
    
    width: 100%;
    height: 90%;
    border-radius: 0px 0px 15px 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;
    overflow-y: hidden;
    
    


`;

const ContentWrapper = styled.div`
  display:flex;
  flex-direction: column;
  flex:1;
  padding: 20px;
`;
const CardListScrollable = styled.div`
 
 
  overflow-y: auto;
  background: #fff; /* Ajoutez un arrière-plan si nécessaire */
  
`
export default Main