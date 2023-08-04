import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs';
import { FiChevronRight } from 'react-icons/fi'
import Icon from '../../Icon';
//import { theme } from '../../../theme';
import ButtonComponent from '../../ButtonComponent';


export default function LoginFormulaire() {

    const [username, setUsername] = useState('')
    const navigate = useNavigate()


    const handleChange = (e) => { 
        setUsername(e.target.value)
     }
    const handleSubmit =(e) =>{
        e.preventDefault()
        //alert(`Bonjour ${prenom}`)
        setUsername('')
        navigate(`/order/${username}`)
    }
  return (
    <>
        
        <Form onSubmit={handleSubmit}>

          <h1>Bienvenue chez nous !</h1>
          <Bar/>
          <h2>connectez-vous</h2>

          <DivInput>
          <Icon icon={BsPersonCircle} size="15px" color="black" />

                <StyledInput type="text" 
                    value={username}
                    onChange={handleChange}
                    placeholder='Entrez votre prenom' 
                    required
                    width = "320" 
                    />
          </DivInput>
            <ButtonComponent label="Accédez à mon espace" icon={FiChevronRight} width="447px" height="53px"/>
        </Form>
    </>
       
    
  )
}


const Form  = styled.form`
display:flex;
flex-direction: column;
align-items: center;
h1{
    color: #FFF;
    text-align: center;
    font-family: 'Amatic SC', cursive;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 61px; /* 127.083% */
    margin-top:39.27px; 
}
h2{
    color: #FFF;
        text-align: center;
        font-family: 'Amatic SC', cursive;
        font-size: 36px;
        font-style: normal;
        font-weight: 700;
        line-height: 46px; /* 127.778% */
        margin-bottom:18px;
}
`


const DivInput = styled.div`
display: flex;
align-items: center;
padding-left:20px;
box-sizing: border-box;
border-radius: 5px;
background: #FFF;
width:447px;
height:55px;
margin-bottom: 18px;

`

const StyledInput = styled.input`
width:320px;
border-style: none;
outline: none;
margin-left:10px;
color: #17161A;
font-family: Arial;
font-size: 15px;
font-style: normal;
font-weight: bold; 

&::placeholder{
color: #D3D3D3;
font-family: Arial;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 17px; /* 113.333% */
}
`
const Bar = styled.hr`
width: 400px;
height: 3px;
flex-shrink: 0;
border: 1px solid #F56A2C;
background: #F56A2C;
text-align:center;
margin : 32.16px 0 40px 0;
`
