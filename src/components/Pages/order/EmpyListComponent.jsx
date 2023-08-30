import React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { resetList } from '../../../redux/listeItems/actions';
import ButtonComponent from '../../ButtonComponent';

function EmpyListComponent() {
    const dispatch = useDispatch()

    const handleClick = () => {
       dispatch(resetList())
    }
  return (
    <Container>
        <p className='message'>Le menu est vide ?</p>
        <p className='message'>Cliquez ci-dessous pour le réinitialiser</p>
        <ButtonComponent label = "Générer de nouveaux produits" width="250px" height="40px" onclick={handleClick}/>
    </Container>
  )
}

export default EmpyListComponent

const Container = styled.div`
display : flex;
flex-direction: column;
align-items: center;
justify-content: center;
flex:1;

  .message{
    font-family: 'Amatic SC';
    font-size: 36px;
  }
`;