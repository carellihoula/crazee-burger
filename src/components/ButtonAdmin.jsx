//import React from 'react'
import { styled } from 'styled-components';

export default function ButtonAdmin({label, icon:IconAdminButton, background, color}) {
  return (
    <Container back={background} color={color}>
             {IconAdminButton && <IconAdminButton/>} {label}
    </Container>
      
      
  )
}

const  Container= styled.button`

color: ${props=>props.color};
text-align: center;
font-family: 'Open Sans';
font-size: 16px;
font-style: normal;
font-weight: 400;
border-radius: 5px 5px 0px 0px;
border: 1px solid ${props=>props.back !== '#292729'? '#E4E5E9' : '#292729' };
border-bottom: 2px solid ${props=>props.back};
background: ${props=>props.back};
box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);
display: flex;
height: 43px;
padding: 10px 22px 11px 22px;
justify-content: center;
align-items: center;
gap: 13.022px;

//line-height: normal;

&:active{
  background-color: red;
}

`

;