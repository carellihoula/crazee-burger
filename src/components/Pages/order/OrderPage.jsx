//import React from 'react'

//import LoginPage from '../login/LoginPage';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';
import back from '../../../assets/back.jpg';
import Navbar from '../navbar/Navbar';
import Main from './Main';
import { Toast } from './Toast';



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
    background-image: url(${back}) ;
    background-repeat : no-repeat;
    background-size : cover;
    background-position: center;

    width:100%;
    height:100vh;
    .sous-container{
    
    padding:0;
    width: 80%;
    height: 94%;
    border-radius: 15px;
    background: #F00;
    }
    .main{
    overflow-y: hidden;
    width: 100%;
    height: 100vh;
    padding-top:0;
    flex-shrink: 0;
    border-radius: 0px 0px 15px 15px;
    background: #F5F5F7;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.20) inset;
    
    }
`;

