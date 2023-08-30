import styled from 'styled-components';




export default function ButtonComponent({label, icon:Icon, width, height, onclick,color, isSelected}) {
  return (
    
        <Button width={width} height={height} onClick={onclick} isSelected = {isSelected}>
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
    background: ${props => props.isSelected? "#FFF" : "#ffa01b"};
    color: ${props => props.isSelected? "#ffa01b" : "#FFF"};
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; 
    
    cursor:pointer;
    box-sizing: border-box;
    
    &:hover{
  background: ${props => props.isSelected? "#ffa01b" : "#FFF"};
  color: ${props => props.isSelected? "#FFF" : "#ffa01b"};
  border: 1px solid ${props => props.isSelected? "#FFF" : "#ffa01b"};

}
    
`;