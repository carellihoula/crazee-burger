//import React from 'react'

import { styled } from "styled-components";
import AdmnTabs from "./AdmnTabs";
import AdminPanel from "./AdminPanel";
import { useDispatch, useSelector } from "react-redux";
import { chevronButton } from "../../../redux/actions";

export default function Admin() {
  const isChecked = useSelector(state=>state.toogBtn.isChecked)

  const isClicked = useSelector(state=>state.toogBtn.isClicked)

  const dispatch = useDispatch()

  const handleClickButton = () =>{
      dispatch(chevronButton())

  }
  return (
    <Container ischecked = {isChecked} isclicked={isClicked}>
            
            <AdmnTabs handleclick={handleClickButton}/>  
            <AdminPanel/> 
                 
    </Container>
  )
}

const Container = styled.div`
  display:flex;
  transform: translateY(${({ ischecked }) => (ischecked ? '0' : '100%')})
             translateY(${({ isclicked }) => (isclicked ? '0' : '86.6%')});

  transition: transform ${({ ischecked }) => (ischecked ? '0.5s' : '0.0s')} ease,
              transform ${({ isclicked }) => (isclicked ? '0.0s' : '0.0s')} ease;
  flex-direction: column;
  justify-content: flex-start;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
    
`;