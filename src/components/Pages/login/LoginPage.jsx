
import {Logo } from '../../Logo'
import LoginFormulaire from './LoginFormulaire'
import { styled } from 'styled-components'
import background from '../../../assets/burger-background.jpg'

const Container = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    background-image :linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${background});
    background-repeat : no-repeat;
    background-size : cover;
    background-position: center;
    height:100vh;
    
  `
function LoginPage() {
  
  return (
    <Container>
          <Logo width="200px" height="150px" fontSize="110px"/>
          <LoginFormulaire />
    </Container>
        
        

  )
}

export default LoginPage