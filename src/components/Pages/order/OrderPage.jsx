//import React from 'react'
import { Link, useParams } from 'react-router-dom'
//import LoginPage from '../login/LoginPage';
import styled from 'styled-components';
import { theme } from '../../../theme';

const Container = styled.div`
    display : flex;
    justify-content: center;
    align-items: center;
    background: ${theme.colors.primary};
    width:100%;
    height:100vh;
    .sous-container{
    
    width: 95%;
    height: 94%;
    border-radius: 15px;
    background: #FFF;
    }
`;



function OrderPage() {
  //state
  const {username} = useParams()

  //behavior

  //Output
  return (
          
    <Container>
      <div className="sous-container">
            {/*<h1>Bonjour {username.toLowerCase()}</h1>
            <Link to="/">
               <button>Deconnexion</button>
            </Link> */}
      </div>
             
    </Container>
  )
}

export default OrderPage