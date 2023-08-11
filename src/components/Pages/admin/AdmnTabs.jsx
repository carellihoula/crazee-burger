//import React from 'react'

import ButtonAdmin from "../../ButtonAdmin";
import {AiOutlinePlus} from 'react-icons/ai';
import {MdModeEditOutline} from 'react-icons/md';
import {FiChevronDown} from 'react-icons/fi';
import { styled } from "styled-components";

export default function AdmnTabs() {
  return (
    <ContainerTabs>
            <ButtonAdmin icon={FiChevronDown} background="#FFF" color="#93A2B1"/>
            <ButtonAdmin label="Ajouter un produit" icon={AiOutlinePlus} background="#292729" color="white"/>
            <ButtonAdmin label="Modifier un produit" icon={MdModeEditOutline} background="#FFF" color="#93A2B1"/>
    </ContainerTabs>
  )
}

const ContainerTabs = styled.div`
  display:flex;
  flex-direction: row;
  gap: 1px;
  position:absolute;
  top:0;
  right:0;
  left:0;

  margin-left:71px;
  background: none;
  border-style: none;
  



`;