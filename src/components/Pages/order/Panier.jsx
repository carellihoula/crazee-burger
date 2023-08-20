import { useDispatch, useSelector } from "react-redux";
import { styled } from "styled-components";
import { removeToCart } from "../../../redux/actions";
//import increaseQty from "../../../redux/actions.quantity";
import { increaseQty, minusQty } from "../../../redux/actions.quantity";
import { formatPrice } from "../../../utils/FormatPrice";
import ButtonComponent from "../../ButtonComponent";
import CardPanier from "../panier/CardPanier";


function Panier() {
  const produits = useSelector(state=>state.basket.panier)

  const prixTotalPanier =  formatPrice(produits.reduce((total, product)=> total+ product.price, 0))
  
  const dispatch = useDispatch();
  //comportements
  const handleclick = (productId) =>{
    dispatch(removeToCart(productId))
  }

  const handlePlus = (product) =>{
    dispatch(increaseQty(product))
  }
  const handleMinus = (product) =>{
    dispatch(minusQty(product))
  }

  return (
    <Container>
        <div className="top">
            <div className="total-price">TOTAL</div> 
            <div className="total-price">{prixTotalPanier} €</div>
        </div>
       
            <span className="delete"><ButtonComponent label="Payer" width="95px" height="38px" /></span>
       
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

        <div className="bottom">
             <p className="paragraph-bottom">Codé avec ❤️ et React.JS</p>
        </div>
    </Container>
  )
}

export default Panier

const Container= styled.div`
width:25%;
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
 
}
.delete{
  display : flex;
  justify-content: center;
  margin-top: 15px;
  
}
`;