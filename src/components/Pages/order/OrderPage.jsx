//import React from 'react'

//import LoginPage from '../login/LoginPage';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from '../Navbar';

const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    width:100%;
    height:100vh;
    .sous-container{
    
    padding:0;
    width: 95%;
    height: 94%;
    border-radius: 15px;
    background: #F00;
    }
    .main{
    width: 100%;
    height: 90%;
    padding-top:0;
    flex-shrink: 0;
    border-radius: 0px 0px 15px 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;
    
    }
`;



function OrderPage() {
  //state
  

  //behavior

  //Output
  return (
          
    <Container>
      <div className="sous-container">
            <Navbar/>
            <div className='main'>

            </div>
            
      </div>
             
    </Container>
  )
}

export default OrderPage