import { useSelector } from "react-redux";
import { styled } from "styled-components";
import AjoutForm from './AjoutForm';
import EmpyUpdate from "./EmptyUpdate";
import UpdateForm from "./UpdateForm";

export default function AdminPanel() {
    const selectedMenu = useSelector(state=>state.toogBtn.selectedMenu)
    const selected = useSelector(state=>state.listItems.selected)

    return (
        <Container>
                {selectedMenu==='ajouter'? (<AjoutForm/>) : (Object.keys(selected).length === 0 ?  <EmpyUpdate/> : <UpdateForm/>) }
                   
        </Container>
      )
    }
    
    const Container = styled.div`
    
    `;
