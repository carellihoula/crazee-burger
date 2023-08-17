import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';
import { styled } from "styled-components";
import { toggleButton as toggleButtonAction } from "../../../redux/actions";
import { notify } from "../order/Toast";

export default function ToggleButton() {
  const isChecked = useSelector(state=>state.toogBtn.isChecked);
  const dispatch = useDispatch();
  //console.log(isChecked);

  const handleClick = () =>{
    dispatch(toggleButtonAction())
    !isChecked? notify() : null // le composant <Toast/> a été mis dans <OrderPage/>

  }
 
  return (
    
            <Container onClick={handleClick} checked={isChecked} >
                <div className="circle"></div>
                <div className="label">
                    <label className={`label-mode-off ${ isChecked? 'label-mode-on': ''}`}>
                       {isChecked ? 'DÉSACTIVER LE MODE ADMIN' : 'ACTIVER LE MODE ADMIN'}  
                    </label>
                </div>
                
            </Container>
    
  )
}

















const Container = styled.div`
display:flex;
align-items: center;
//flex-direction: ${({checked})=>(checked ? 'row-reverse': '')};

height:40px;
width:200px;
border-radius: 30px;
border: 2px solid ${({checked})=>(checked ? '#FFA01B': '#292729')};                               
background: ${({checked})=>(checked ? 'white': '#292729')};                                                 
cursor:pointer;

.circle{
width: 30px;
height: 30px;
border-radius: 15px;
background: #FFA01B;
margin-left:${({checked})=>(checked ? '0': '5px')};
margin-right:${({checked})=>(checked ? '5px': '')};
transform: translateX(${({ checked }) => (checked ? '165px' : '0')});
transition: transform 0.4s ease;


}

.label-mode-off{
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
.label-mode-on{
color: #17161A;
text-align: center;
font-family: 'Open Sans';
font-size: 10px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 0.5px;
text-transform: uppercase;
transform: translateX(${({ checked }) => (checked ? '-34px' : '0')});
transition: transform 0.0s ease;
}

.label{
    width:170px;
    pointer-events: none;
}
`;