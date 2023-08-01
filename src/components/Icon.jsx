import React from 'react'
import styled from 'styled-components';

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export default function Icon(props) {
  const IconComponent = props.icon;
  return (
    <IconWrapper>
    {IconComponent && <IconComponent{...props}/>}
        
    </IconWrapper>
  )
}
