import { useSelector } from 'react-redux';
import styled from 'styled-components';




export default function ButtonComponent({label, icon:Icon, width, height, onclick,color, isSelected}) {
  const isChecked = useSelector(state=>state.toogBtn.isChecked);
  return (
    
        <Button width={width} height={height} onClick={onclick} isSelected = {isSelected} isChecked={isChecked}>
          {label} {Icon && <Icon/>}
        </Button>
    
  )
}



//si le produit est selectionné et qu'on est en mode admin => tu fais ceci : ou sinon  (isSelected && isChecked)
const Button = styled.button`
    display: flex;
    border-radius: 5px;
    width:${props=>props.width || 'auto' };
    height:${props=>props.height || 'auto' };
    
    justify-content: center;
    align-items: center;
    border: 1px solid #FF9F1B;
    background: ${props => props.isSelected && props.isChecked? "#FFF" : "#ffa01b"};
    color: ${props => props.isSelected && props.isChecked? "#ffa01b" : "#FFF"};
    text-align: center;
    font-family: Arial, sans-serif;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
    line-height: 15px; 
    
    cursor:pointer;
    box-sizing: border-box;
    
    &:hover{
      //si le produit est selectionné et qu'on est en mode admin => tu fais ceci : ou sinon 
      
    background: ${props => props.isSelected && props.isChecked? "#ffa01b" : "#FFF"}; 
    color: ${props => props.isSelected && props.isChecked ? "#FFF" : "#ffa01b"};
    border: 1px solid ${props => props.isSelected && props.isChecked ? "#FFF" : "#ffa01b"};

}
    
`;