import { styled } from "styled-components";


function Panier() {
  return (
    <Container>
        <div className="top">
            <div className="total-price">TOTAL</div> 
            <div className="total-price">0.00 €</div>
        </div>

        <div className="sub-basket">
            <div>
                <p className="empty-order">Votre commande est vide.</p>
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
overflow-y: scroll;
scrollbar-width: thin;

}
`;