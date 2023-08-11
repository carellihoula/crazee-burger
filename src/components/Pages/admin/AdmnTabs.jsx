//import React from 'react'

import ButtonAdmin from "../../ButtonAdmin";
import {AiOutlinePlus} from 'react-icons/ai';
import {MdModeEditOutline} from 'react-icons/md';
import {FiChevronDown} from 'react-icons/fi';
import { styled } from "styled-components";
import { useSelector } from "react-redux";

export default function AdmnTabs({handleclick}) {
  const isClicked = useSelector(state=>state.toogBtn.isClicked)
  
  return (
    <ContainerTabs>
            <ButtonAdmin icon={FiChevronDown} background={isClicked ? '#FFF' : '#292729'} color={isClicked ? '#93A2B1' : '#FFF'} onclick={handleclick} />
            <ButtonAdmin label="Ajouter un produit" icon={AiOutlinePlus} background="#FFF" color="#93A2B1"/>
            <ButtonAdmin label="Modifier un produit" icon={MdModeEditOutline} background="#FFF" color="#93A2B1"/> 
    </ContainerTabs>
  )
}

const ContainerTabs = styled.div`
  display:flex;
  flex-direction: row;
  gap: 1px;
  margin-left:71px;
  background: none;
  border-style: none;
  



`;