import React from 'react';
import { styled } from 'styled-components';

export default function CardPanier(props) {
  return (
    <Container>
                               {/*{ item.title} : {item.quantity}<button onClick={()=>handleclick(item.id)}>X</button>*/}
            <div>
                <img src={props.image}  title={props.title}/>
            </div>

            <div>
                <h2>{props.title}</h2>
                <p className='price'>{props.price} €</p>
            </div>
            <div>
                <p>{props.quantity}</p>
            </div>

    </Container>
  );
}

const Container = styled.div`
  display : flex;
  flex-direction: row;
  align-items : center;
  border-radius: 5px;
  width:90%;
  height:10%;
  background: #FFF;
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.20);
  margin : 10px 0px 10px 0px;
  gap : 30px;
  img{
    width: 85.8px;
    height: 70px;
    //flex-shrink: 0;
  }
  h2{
    color: #17161A;
    font-family: 'Amatic SC';
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
  }
  .price{
    color: #FFA01B;
    font-family: 'Open Sans';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }


`;