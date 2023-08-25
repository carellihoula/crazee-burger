import React from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { TiDelete } from 'react-icons/ti';
//import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

export default function CardPanier(props) {

  
  return (
    <Container>
                               {/*{ item.title} : {item.quantity}<button onClick={()=>handleclick(item.id)}>X</button>*/}
            
            <img src={props.image}  title={props.title}/>
            <div className='name-price'>
                <h2>{props.title}</h2>
                <p className='price'>{props.price}€</p>
            </div>
            <div className='qty-price'>
                <div className='qty'>
                <HiPlusSm onClick={props.handleplus} style = {{cursor : "pointer"}}/>               
                <p>{props.quantity}</p>
                <HiMinusSm onClick={props.handleminus} style ={{cursor : "pointer"}}/>
                </div>
                <TiDelete onClick={props.handleclickdelete} className='delete-ti'/>
            </div>
            
    </Container>
  );
}

const Container = styled.div`
  display : flex;
  flex-direction: row;
  align-items : center;
  
  //justify-content: space-around;
  border-radius: 5px;
  width:90%;
  height:15%;
  background: #FFF;
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.20);
  margin : 10px 0px 10px 0px;
  padding :  0px 10px 0px 10px;
  gap : 5px;
  img{
    width: 70px;
    height: 50px;
    //flex-shrink: 0;
  }
  
  TiDelete:hover{
    color : red;
    cursor: pointer;
  }
  h2{
    color: #17161A;
    font-family: 'Amatic SC';
    text-align: left;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px; /* 133.333% */
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100px;
  }
  .price{
    color: #FFA01B;
    text-align: left;
    font-family: 'Open Sans';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .name-price{
    display : flex;
    flex-direction: column;  
  }
  .qty{
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 25px;
    
  }
  .qty-price{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    flex:1;
  }
  .delete-ti:hover{
    color:red;
  }
  .delete-ti{
    color:#FFA01B;
  }

`;