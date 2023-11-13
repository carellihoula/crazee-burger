import React from 'react';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { TiDelete } from 'react-icons/ti';
//import { useDispatch } from 'react-redux';
import { styled } from 'styled-components';

export default function CardPanier(props) {
  
  
  return (
    <Container>
                               {/*{ item.title} : {item.quantity}<button onClick={()=>handleclick(item.id)}>X</button>*/}
            <div className='right-side'>
                <img src={props.image}  title={props.title}/>
                <div className='name-price'>
                    <h2>{props.title}</h2>
                    <p className='price'>{props.price}€</p>
                </div>
            </div>
            
            <div className='qty-price'>
                <div className='qty'>
                <HiPlusSm onClick={props.handleplus} color="#FFF" 
                  style = {{cursor : "pointer",backgroundColor:'green',borderRadius:'50%'}}
                />               
                <p style={{fontWeight:"900",fontSize:'30px'}}>{props.quantity}</p>
                <HiMinusSm onClick={props.handleminus} color="#FFF"  
                  style = {{cursor : "pointer",backgroundColor:'red',borderRadius:'50%'}}
                />
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
  
  justify-content: space-between;
  border-radius: 5px;
  width:85%;
  height:85px;
  background: #FFF;
  box-shadow: -4px 4px 15px 0px rgba(0, 0, 0, 0.20);
  margin : 10px 0px 10px 0px;
  padding :  0px 10px 0px 10px;
  //gap : 5px;
  //transform : translateX(${({a})=>a ? '100%' : '0'});
  //transition : transform 0.5s ease-in-out;
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
    font-size: 23px;
    gap: 5px;
    
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
  .right-side{
    display: flex;
    flex-direction: row;
    
  }

`;