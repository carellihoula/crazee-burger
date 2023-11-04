import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { addToCart } from "../../../redux/actions";
import { removeToList, selectedItem } from "../../../redux/listeItems/actions";
import { formatPrice } from "../../../utils/FormatPrice";
import Card from "./Card";

function CardList() {
  //state
  const menuItems = useSelector(state=>state.listItems.list)
  const selected = useSelector(state=>state.listItems.selected)
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
       
    }

  return (
    <Container>
            {
              menuItems.map((item, index)=>{
                    return(
                        <Card key={index} title={item.title} image={item.imageSource} 
                        price={formatPrice(item.price)} 
                        handleClick = {()=>handleAddToCart(item)}
                        handledelete = {()=>handleDeleteItem(item)}
                        handleclickadd = {()=>handleClickCard(item)}
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