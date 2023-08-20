import { useSelector } from "react-redux";
import { styled } from "styled-components";
import AjoutForm from './AjoutForm';
import UpdateForm from "./UpdateForm";

export default function AdminPanel() {
    const selectedMenu = useSelector(state=>state.toogBtn.selectedMenu)
    return (
        <Container>
                {selectedMenu==='ajouter'? <AjoutForm/> : <UpdateForm/> }
                   
        </Container>
      )
    }
    
    const Container = styled.div`
    
    `;
