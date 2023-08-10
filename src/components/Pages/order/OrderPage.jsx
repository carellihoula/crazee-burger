//import React from 'react'

//import LoginPage from '../login/LoginPage';
import styled from 'styled-components';
import { theme } from '../../../theme';
import Navbar from '../navbar/Navbar';
import Main from './Main';
import 'react-toastify/dist/ReactToastify.css';
import { Toast } from './Toast';
import Admin from '../admin/Admin';
//import Admin from '../admin/Admin';



function OrderPage() {
  //state
  

  //behavior

  //Output
  return (
          
    <Container>

      <div className="sous-container">
          
                <Navbar/>
                <Main/> 
                  
                <Toast/>
           
                
      </div>
             
    </Container>
  )
}

export default OrderPage

// CSS ------------------------------------------------->>
const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    width:100%;
    height:100vh;
    .sous-container{
    width: 80%;
    height: 94%;
    border-radius: 15px;
    background: #F00;
    
    }
    
    
`;

