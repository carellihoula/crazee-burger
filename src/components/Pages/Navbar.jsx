import styled from 'styled-components';
import { Logo } from '../Logo';
import Icon from '../Icon';
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom'



export default function Navbar() {

  const {username} = useParams()

  const handleClick = ()=>{
        window.location.reload()
  }
  return (
    <Container>
            <div onClick={handleClick}> 
                <Logo width="80px" height="60px" fontSize="36px"/> 
            </div>
            <div className="profil-deconnect">
                <div className="profil-text">
                    <p>Hey, {username}</p>  
                    <p>
                     <Link to="/">se déconnecter</Link>
                    </p>
                </div>
                <Icon icon={BsPersonCircle} size="40px" color="gray"/>
            </div>
    </Container>
  )
}



const Container = styled.div`
display:flex;

align-items: center;
justify-content: space-between;
width: 100%;
height: 10%;
box-sizing: border-box;
padding: 0px 70px 0px 20px;
align-items: center;
/*gap: 950.234px; distance entre les elemenst */
border-radius: 15px 15px 0px 0px;
background: #FFF;
span{
    cursor:pointer;
}
.profil-deconnect{
    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
p{
color: #747B91;
margin-right: 10px;
text-align: right;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 140% */
}

`