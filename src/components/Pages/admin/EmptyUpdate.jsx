import React from 'react';
import { HiCursorClick } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';
import { resetList } from '../../../redux/listeItems/actions';

function EmpyUpdate() {
    const dispatch = useDispatch()

    const handleClick = () => {
       dispatch(resetList())
    }
  return (
    <Container>
        <p className='message'>Cliquer sur un produit du menu pour le modifier <HiCursorClick/></p>
    </Container>
  )
}

export default EmpyUpdate

const Container = styled.div`
display : flex;
flex-direction: row;
justify-content: flex-start;
padding-top:30px;
overflow: hidden;
width: 100%;
height: 250px;
background-color: #fff;
padding-left: 15px;
flex:1;

  .message{
    font-family: 'Amatic SC';
    font-size: 30px;
  }
`;