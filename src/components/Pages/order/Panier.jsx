import { useDispatch, useSelector } from "react-redux";
import {useState} from 'react'
import { styled } from "styled-components";
import { basketEmpty, basketPaiement, removeToCart } from "../../../redux/actions";
//import increaseQty from "../../../redux/actions.quantity";
import { increaseQty, minusQty } from "../../../redux/actions.quantity";
import { formatPrice } from "../../../utils/FormatPrice";
import ButtonComponent from "../../ButtonComponent";
import CardPanier from "../panier/CardPanier";
import { isEmpty } from "../../../utils/IsEmpty";


function Panier() {
  const produits = useSelector(state=>state.basket.panier)
  const messagePaiement = useSelector(state=>state.basket.message)
  const isPaid = useSelector(state=>state.basket.isPaid)
  const [paid,setPaid] = useState(isPaid)
  const isBasketEmpty = isEmpty(produits);
  const prixTotalPanier =  formatPrice(produits.reduce((total, product)=> total+ product.price*product.quantity, 0))
  
  const dispatch = useDispatch();
  //comportements
  const handleclick = (productId) =>{
    dispatch(removeToCart(productId))
    setPaid(false)
  }

  const handlePlus = (product) =>{
    dispatch(increaseQty(product))
  }
  const handleMinus = (product) =>{
    dispatch(minusQty(product))
  }
  const handlePaiement =()=>{
    //dispatch(basketEmpty())
    dispatch(basketPaiement())
    setPaid(true)
    
  }
 
  return (
    <Container>
        <div className="top">
            <div className="total-price">TOTAL</div> 
            <div className="total-price">{prixTotalPanier} €</div>
        </div>
       
            {
              !isBasketEmpty ? (
                <>
                <span className="delete" onClick={handlePaiement}><ButtonComponent label="Payer" width="95px" height="38px" /></span>

                    <div className="sub-basket">
                        <div>
                            
                            <p className="empty-order">
                                {
                                  produits.map((item, index)=>{
                                    return (
                                        <div className="basket-content" key={index}>
                                          {/*{ item.title} : {item.quantity}<button onClick={()=>handleclick(item.id)}>X</button>*/}
                                          <CardPanier title={item.title} image = {item.imageSource} 
                                          price = {formatPrice(item.price)} quantity = {item.quantity}
                                          handleclickdelete = {()=>handleclick(item.id)}
                                          handleplus = {()=>handlePlus(item.id)}
                                          handleminus = {()=>handleMinus(item.id)}
                                          
                                          />     
                                        </div>
                                    )
                                  })
                                }
                            </p>
                        </div>
                            
                    </div>
                </> ) : paid ? 
                (<div className="message"> <p>{messagePaiement}</p> </div>) : 
                ((<div className="message"> <p>Panier Vide </p> </div>))
            }
        <div className="bottom">
             <p className="paragraph-bottom">Carel ❤️ et React.JS</p>
        </div>
    </Container>
  )
}

export default Panier

const Container= styled.div`
display: flex;
flex-direction: column;
//justify-content: center;
width:30%;
overflow: hidden;
position:relative;
border-radius: 0px 0px 0px 15px;
background: #F5F5F7;
box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.20) inset;


.top{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background:#292729;
  height:70px;

}
.total-price{
color: #FFA01B;
font-family: 'Amatic SC';
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: normal;
letter-spacing: 2px;
margin:0 20px 0 20px;
}
.bottom{
  display:flex;
  align-items: center;
  justify-content: center;
  background: #292729;
  border-radius: 0px 0px 0px 15px;
  height: 70px;
  bottom:0;
  left:0;
  right:0;
  position: absolute;
}
.paragraph-bottom{
color: #FFF;
font-family: 'Amatic SC';
font-size: 20px;
font-style: normal;
font-weight: 700;
line-height: normal;
}
.empty-order{
color: #747B91;
text-align: center;
font-family: 'Amatic SC';
font-size: 36px;
font-style: normal;
font-weight: 400;
line-height: 72px; /* 200% */
}
.sub-basket{
max-height :  694px; 
overflow-y: auto;
scrollbar-width: thin;

}
.basket-content{
  display:flex;
  justify-content: center;
  //margin-bottom:50px;
  gap:2px!important;
 
}
.delete{
  display : flex;
  justify-content: center;
  margin-top: 15px;
  
}
.message{
  display: flex;
  align-self: center;
  font-family: 'Amatic SC';
  font-size: 25px;
  color: green;
  font-weight: bold;
  margin-top:50%;
}

`;