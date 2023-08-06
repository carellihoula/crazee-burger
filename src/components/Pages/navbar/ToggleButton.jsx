//import React from 'react'

import { useState } from "react"
import { styled } from "styled-components";

function ToggleButton() {
    const [isChecked, setIschecked] = useState(false)

  return (
    
            <Container>
                <div className="circle"></div>
                <div className="label">
                    <label>ACTIVER LE MODE ADMIN</label>
                </div>
            </Container>
    
  )
}

export default ToggleButton

const Container = styled.div`
display:flex;
align-items: center;

height:40px;
width:200px;
border-radius: 30px;
border: 2px solid #292729;
background: #292729;
cursor:pointer;

.circle{
width: 30px;
height: 30px;
border-radius: 15px;
background: #FFA01B;
margin-left:5px;
}

label{
color: #FFA01B;
text-align: center;
font-family: 'Open Sans';
font-size: 10px;
font-style: normal;
font-weight: 700;
line-height: normal;
letter-spacing: 0.5px;
text-transform: uppercase;
display: flex;
flex-direction: column;
justify-content: center;

}
.label{
    width:170px;
    pointer-events: none;
}
`;