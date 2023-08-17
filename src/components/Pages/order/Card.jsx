import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import ButtonComponent from "../../ButtonComponent";


export default function Card(props) {
  const isChecked = useSelector(state=>state.toogBtn.isChecked);
 
  return (
    <Container>
                {isChecked && <TiDelete onClick={props.handledelete}/>}
                
                <img src={props.image} title={props.title}/>
                <div>
                   <h1 className="title">{props.title}</h1>
                </div>
        
                <div className="div-ajouter">
                    <p className="prix">{props.price} €</p>
                    <ButtonComponent label="Ajouter" width="95px" height="38px" onclick={props.handleClick}/>   
                </div> 
    </Container>
  )
}



//--------------------------------------===> css
const Container = styled.div`
display: flex;
width: 240px;
height:330px;
padding: 50px 20px 10px 20px;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 15px;
border-radius: 15px;
background: #FFF;
box-shadow: -8px 8px 20px 0px rgba(0, 0, 0, 0.20);

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
color: #FFA01B;
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

`;