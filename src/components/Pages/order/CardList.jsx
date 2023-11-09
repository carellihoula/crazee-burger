import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addToCart } from "../../../redux/actions";
import { removeToList, selectedItem } from "../../../redux/listeItems/actions";
import {chevronButtonToTrue,selectMenu} from "../../../redux/actions"
import { formatPrice } from "../../../utils/FormatPrice";
import Card from "./Card";

function CardList() {
  //state
  const menuItems = useSelector(state=>state.listItems.list)
  const selected = useSelector(state=>state.listItems.selected)
  const isClickedChevron = useSelector(state=>state.toogBtn.isClicked)
  const selectedMenu = useSelector(state=>state.toogBtn.selectedMenu)
  //const selectedMenu = useSelector(state=>state.toogBtn.selectedMenu)
  const dispatch = useDispatch()
  
    const handleAddToCart = (item)=>{
          dispatch(addToCart(item))
    }

    const handleDeleteItem  = (item) => {
          dispatch(removeToList(item))
          //dispatch(clearSelected())
          //alert("item removed")
    } 

    const handleClickCard = (item)=>{
        dispatch(selectedItem(item))
        dispatch(chevronButtonToTrue())
        dispatch(selectMenu('modifier'))//mettre selectedmenu == modifier pour le background selected au menu <moodifier>
       
    }

  return (
    <Container>
            {
              menuItems.map((item, index)=>{
                    return(
                        <Card key={index} title={item.title} image={item.imageSource} 
                        price={formatPrice(item.price)} 
                        handleClickadd = {()=>handleAddToCart(item)}
                        handledelete = {()=>handleDeleteItem(item)}
                        handleclick = {()=>handleClickCard(item)}
                        isSelected  = {item.id == selected.id}
                        
                        />
                    )
                })
            }
              
    </Container>
  )
}

export default CardList

const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  box-sizing: border-box;
  gap: 35px;
  overflow-y: scroll;
  scrollbar-width: thin;
  padding-bottom: 30px;
  padding-top:20px;
`;