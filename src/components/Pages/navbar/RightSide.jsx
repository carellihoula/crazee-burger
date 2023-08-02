import Icon from '../../Icon';
import { BsPersonCircle } from 'react-icons/bs';
import { Link, useParams } from 'react-router-dom'
import { styled } from 'styled-components';





export default function RightSide() {
  const {username} = useParams()
  return (
    <Container>
                <div className="profil-text">
                    <p>Hey, <span className='username'>{username}</span></p>  
                    <p className='deconnect'>
                     <Link to="/" className='deconnect'>se déconnecter</Link>
                    </p>
                </div>
                <Icon icon={BsPersonCircle} size="40px" color="gray"/>
    </Container>
  )
}


// CSS ------------------------------------------------->>
const  Container = styled.div`

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

p{
color: #747B91;
margin-bottom: 6px;
text-align: right;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 140% */
}
.username{
color: #FFA01B;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 700;
line-height: 22px;
}
.deconnect{
color: #747B91 ;
text-align: right;
text-decoration: none;
font-family: 'Open Sans', sans-serif;
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 140% */

}
.deconnect:hover{
    text-decoration: underline;
}
`