import { styled } from "styled-components";
import {GiHamburger} from 'react-icons/gi'
import {MdOutlinePhotoCamera} from 'react-icons/md';
import {FaEuroSign} from 'react-icons/fa';


export default function AdminPanel() {
    return (
        <Container>
                <div className="image-part">
                       <image src="" alt="image"/>
                </div>
                <div>
                    <form>
                                <div className="name-product">
                                      <label><GiHamburger color="grey"/></label>
                                      <input type="text" placeholder="Nom du produit (ex: Super Burger)" className="input"/>
                                </div>
                                <div className="name-product">
                                      <label><MdOutlinePhotoCamera color="grey"/></label>
                                      <input type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" className="input"/>
                                </div>
                                <div className="name-product">
                                      <label><FaEuroSign color="grey"/></label>
                                      <input type="text" placeholder="Prix" className="input"/>
                                </div>
                                <div className="button-submit">
                                      <button className="button-submit">
                                            Ajouter un nouveau produit au menu
                                      </button>
                                </div>     
                    </form>
                </div>     
        </Container>
      )
    }
    
    const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-top:31px;
    padding-top:30px;
    overflow: hidden;
    width: 100%;
    height: 250px;
    position: absolute;
    background-color: white;
    bottom: 0;
    left:0;
    right:0;

    form{
        margin-left:30px;


    }
    .image-part{
        border-radius: 5px;
        border: 1px solid #E4E5E9;
        background-color: #fff;
        width:215px;
        height:120px;
        margin-left:65px;
    }
    .name-product{
        display:flex;
        align-items: center;
        border-radius: 5px;
        background: #f5f5f7;
        width:500px;
        height:35px;
        margin-bottom: 8px;
        padding-left: 24px;
        box-sizing: border-box;
    }
    .input{
        border-style: none;
        outline:none;
        font-family: 'Open Sans';
        font-size: 15px;
        font-weight:500;
        background: #f5f5f7;
        width:440px;
        height:35px;
        box-sizing: border-box;
        margin-left:15px;
    }

    .input::placeholder{
        color: #A7A8AD;
        font-family: 'Open Sans';
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .button-submit{
        color: #FFF;
        text-align: center;
        font-family: 'Open Sans';
        font-size: 12.333px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        border-radius: 5px;
        border: 1px solid #60BD4F;
        width:275px;
        height:35px;
        background: #60BD4F;
    }
    .button-submit:hover{
        background: #FFF;
        color: #60BD4F;
    }
    `;
