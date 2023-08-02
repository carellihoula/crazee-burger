// eslint-disable-next-line react/prop-types
import logo from '../assets/logo-orange.png'
import styled from 'styled-components'


const Container = styled.div`
   display:flex;
   align-items: center; 
   justify-content: center

`
export const Logo = (props) =>{
    
    return(
        <Container>
                <LogoStyled fontSize={props.fontSize}>CRAZEE</LogoStyled> 
                <LogoImage src={logo} width={props.width} height={props.height} /> 
                <LogoStyled fontSize={props.fontSize}>BURGER</LogoStyled> 
        </Container>
        
    )
}


const LogoStyled = styled.span`
    color: #FFA01B;
    text-align: center;
    font-family: 'Amatic SC', cursive;
    font-size: ${props => props.fontSize || '110px'};
    font-style: normal;
    font-weight: 700;
    line-height: 115px; /* 104.545% */
    letter-spacing: 1.5px;
    text-transform: uppercase;
    
    
`
const LogoImage = styled.img`
    
`