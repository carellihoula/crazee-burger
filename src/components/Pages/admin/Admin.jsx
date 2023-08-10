//import React from 'react'

import { styled } from "styled-components";
import AdmnTabs from "./AdmnTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  return (
    <Container>
            
            <AdminPanel/> 
            <AdmnTabs/>       
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: flex-start;
    background: #FFF;
    //justify-content:space-around;
`;