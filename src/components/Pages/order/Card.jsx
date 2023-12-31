import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ButtonComponent from "../../ButtonComponent";


export default function Card(props) {
  const isChecked = useSelector(state=>state.toogBtn.isChecked);
  const [click, setClick] = useState(false) 
  
  return (
    <Container isChecked={isChecked} onClick={props.handleclick} 
    isccolorback={click} isSelected = {props.isSelected}
    >
                {isChecked && <TiDelete onClick={props.handledelete} size={35} className="deleteIcon"/>}
                
                <img src={props.image} title={props.title}/>
                <div>
                   <h1 className="title">{props.title}</h1>
                </div>
        
                <div className="div-ajouter">
                    <p className="prix">{props.price} €</p>
                    
                    <ButtonComponent label="Ajouter" width="95px" height="38px" 
                    onclick={props.handleClickadd} isSelected={props.isSelected}
                    />   
                </div> 
    </Container>
  )
}

//si le produit est selectionné et qu'on est en mode admin => tu fais ceci : ou sinon  (isSelected && isChecked)

//--------------------------------------===> css
const Container = styled.div`
display: flex;
width: 190px;
height:270px;
padding: 50px 20px 10px 20px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
border-radius: 15px;
background:${props=>props.isSelected && props.isChecked ? "#ffa01b" : "#ffffff"};
box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.20);
cursor : ${props=>props.isChecked ? 'pointer':'default'};
&:hover{

}


img{
width: 200px;
height: 145px;

}
.div-ajouter{
    display:flex;
    flex-direction: row;
    align-items: center;
    align-content:center;
    gap:50px;
    
    
    
    
}
.prix{
color: ${props=>props.isSelected && props.isChecked ?  "#ffffff" : "#ffa01b"};
font-family: 'Open Sans';
font-size: 16px;
font-style: normal;
font-weight: 400;


}
.title{
color: #17161A;
font-family: 'Amatic SC';
font-size: 36px;
font-style: normal;
font-weight: 700;
line-height: normal;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
max-width: 200px;
}
.deleteIcon{
  display:flex;
  flex-direction:column;
  align-self: flex-end;
  margin-top:-50px;
  margin-right: -15px;
  justify-content:flex-start;
  color : ${props=>props.isSelected && props.isChecked ?  "#ffffff" : "#ffa01b"};
  
}
.deleteIcon:hover{
 color: red;
  
}

`;