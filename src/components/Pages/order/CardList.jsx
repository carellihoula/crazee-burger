import { styled } from "styled-components";
import Card from "./Card"
import { fakeMenu1, fakeMenu2 } from "../../../assets/fakeData/fakeMenu";

import { formatPrice } from "../../../utils/FormatPrice";

function CardList() {
    const listFusion = [fakeMenu1, fakeMenu2];
    const globalList = listFusion.flat()

  return (
    <Container>
            {
                globalList.map((item, index)=>{
                    return(
                        <Card key={index} title={item.title} image={item.imageSource} price={formatPrice(item.price)} />
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
  
`;