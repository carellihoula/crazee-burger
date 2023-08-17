import { useState } from "react";
import { useDispatch } from "react-redux";
import { styled } from "styled-components";
import { fakeMenu1, fakeMenu2 } from "../../../assets/fakeData/fakeMenu";
import { addToCart } from "../../../redux/actions";
import { formatPrice } from "../../../utils/FormatPrice";
import Card from "./Card";

function CardList() {
  //state
    const listFusion = [...fakeMenu1, ...fakeMenu2];
    const globalList = listFusion.flat();
    const [list, setList]  = useState([...globalList])
    
    const dispatch = useDispatch();
    //const state = useSelector(state=>state.basket.panier);
    //console.log(state);
    //comportements
    const handleAddToCart = (item)=>{
          dispatch(addToCart(item))
          //setList((prevList) => [...prevList, item])
          //console.log(list)

    }

  return (
    <Container>
            {
                list.map((item, index)=>{
                    return(
                        <Card key={index} title={item.title} image={item.imageSource} price={formatPrice(item.price)} handleClick = {()=>handleAddToCart(item)}/>
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