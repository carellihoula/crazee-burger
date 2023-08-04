import styled from 'styled-components';
import { theme } from '../theme';




export default function ButtonComponent({label, icon:Icon, width, height}) {
  return (
    
        <Button width={width} height={height}>
          {label} {Icon && <Icon/>}
        </Button>
    
  )
}




const Button = styled.button`
    display: flex;
    border-radius: 5px;
    width:${props=>props.width || 'auto' };
    height:${props=>props.height || 'auto' };
    
    justify-content: center;
    align-items: center;
    border: 1px solid #FF9F1B;
    background: ${theme.colors.primary_burger};
    background: #FF9F1B;
    color: #FFF;
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; 
    
    cursor:pointer;
    box-sizing: border-box;
    
    &:hover{
  background: ${theme.colors.white};
  color: ${theme.colors.primary_burger};

}
    
`;