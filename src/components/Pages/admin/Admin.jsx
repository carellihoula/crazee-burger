//import React from 'react'

import { styled } from "styled-components";
import AdmnTabs from "./AdmnTabs";
import AdminPanel from "./AdminPanel";

export default function Admin() {
  return (
    <Container>
            
            <AdmnTabs/>  
            <AdminPanel/> 
                 
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    //align-items: flex-start;
    position: absolute;
    bottom: 0;
    left:0;
    right:0;
    //justify-content:space-around;
`;