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
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
  margin:50px 10px 60px 10px ;
  gap:85px;
  /*height: 100vh;*/
`;