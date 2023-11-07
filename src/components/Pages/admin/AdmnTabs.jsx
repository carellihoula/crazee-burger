//import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { MdModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { selectMenu } from '../../../redux/actions';
import ButtonAdmin from "../../ButtonAdmin";

export default function AdmnTabs({handleclick}) {
  //state
  const isClicked = useSelector(state=>state.toogBtn.isClicked)
  const selectedMenu = useSelector(state=>state.toogBtn.selectedMenu)
  const dispatch = useDispatch()
  const icon  = isClicked ? FiChevronDown : FiChevronUp
  const backGround = isClicked ? '#FFF' : '#292729'
  const color  = isClicked ? '#93A2B1' : '#FFF'
  const colorButtonAdd = selectedMenu==='ajouter'?'#FFF':'#93A2B1'
  const backgroundButtonAdd = selectedMenu==='ajouter'?'#292729':'white'
  const colorButtonModify = selectedMenu==='modifier'?'#FFF':'#93A2B1'
  const backgroundButtonModify = selectedMenu==='modifier'?'#292729':'white'
  
  //const [selectedMenu, setSelectedMenu] = useState('')
  //comportements
  const handleClickAdd = (menu) =>{
      //setSelectedMenu(menu)
      dispatch(selectMenu(menu))
      
  }
 
  return (
    <ContainerTabs>
            
            <ButtonAdmin icon = {icon} 
            background={backGround} 
            color={color} onclick={handleclick} 
            />
            
            <ButtonAdmin label="Ajouter un produit" icon={AiOutlinePlus} background={backgroundButtonAdd} 
            color={colorButtonAdd}
            onclick={()=>handleClickAdd('ajouter')}
            />
            
          
                <ButtonAdmin label="Modifier un produit" icon={MdModeEditOutline} background={backgroundButtonModify } 
                color={colorButtonModify}
                onclick={()=>handleClickAdd('modifier')}
                /> 
           
            
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