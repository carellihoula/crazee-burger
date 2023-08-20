import { useEffect, useState } from 'react';
import { FaEuroSign } from 'react-icons/fa';
import { GiHamburger } from 'react-icons/gi';
import { MdOutlinePhotoCamera } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from "styled-components";
import { addToList } from '../../../redux/listeItems/actions';

export default function AjoutForm() {
    const dispatch = useDispatch()
    const ourList = useSelector(state=>state.listItems.list)

    const [form, setForm] = useState({
        id : ourList.length-1,
        imageSource : "",
        title : "",
        price : "",
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
    })

    const [message, setMessage]  = useState("")

    const handleChange  = (e) => {
        const {name, value} = e.target;
            setForm((prevForm) =>({
                ...prevForm,
                [name] : value
            }))
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addToList(form))
        setForm({
        id : ourList.length,
        imageSource : "",
        title : "",
        price : "",
        quantity: 0,
        isAvailable: true,
        isAdvertised: false,
        })
        setMessage("produit ajouté avec succès");
        
    }
    useEffect(()=>{
        const messageTimer = setTimeout(()=>{
            setMessage("")
        }, 3000)

        return() => clearTimeout(messageTimer)
    },[message])

    return (
        <Container>
                <div className="image-part">
                       <img src={form.imageSource} alt={form.title} width="215px" height="120px"/>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                                <div className="name-product">
                                      <label><GiHamburger color="grey"/></label>
                                      <input type="text" placeholder="Nom du produit (ex: Super Burger)" 
                                      className="input"
                                      name  = "title"
                                      value={form.title}
                                      onChange={handleChange}
                                      />
                                </div>
                                <div className="name-product">
                                      <label><MdOutlinePhotoCamera color="grey"/></label>
                                      <input type="text" placeholder="Lien URL d'une image (ex: https://la-photo-de-mon-produit.png)" 
                                      className="input"
                                      name  = "imageSource"
                                      value={form.imageSource}
                                      onChange={handleChange}
                                      />
                                </div>
                                <div className="name-product">
                                      <label><FaEuroSign color="grey"/></label>
                                      <input type="text" placeholder="Prix" 
                                      className="input"
                                      name="price"
                                      value={form.price}
                                      onChange={handleChange}
                                      />
                                </div>
                                <div className="button-submit">
                                      <button className="button-submit" type="submit">
                                            Ajouter un nouveau produit au menu
                                      </button>
                                      
                                </div> 
                                <p className='succes-message'> {message} </p>   
                    </form>
                </div>     
        </Container>
      )
    }
    
    const Container = styled.div`
    display: flex;
    flex-direction: row;
    //margin-top:31px;
    padding-top:30px;
    overflow: hidden;
    width: 100%;
    height: 250px;
    background-color: #fff;
    

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
    .succes-message{
        color: #60BD4F;
        font-family: 'Open Sans';
        font-size: 15px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
    `;
