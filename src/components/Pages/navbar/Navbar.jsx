import styled from 'styled-components';
import {useState} from 'react'
import { Logo } from '../../Logo';
import RightSide from './RightSide';
import { RefreshhPage } from '../../RefreshPage';
import SearchBar from './SearchBar';
import {useSelector, useDispatch} from 'react-redux'
import { setSearchValue } from '../../../redux/listeItems/actions';


export default function Navbar() {
  const [value, setValue] = useState('')
  //const valueR = useSelector(state=>state.listItems.searchValue)
  const dispatch = useDispatch()
  console.log(valueR);
  const handleChange = (e) =>{
    setValue(e.target.value)
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(setSearchValue(value))
  }

  return (
    <Container>
             
            <Logo width="80px" height="60px" fontSize="36px" handleClick = {RefreshhPage}/> 
            <SearchBar searchValue={value} 
              handleChange={handleChange} 
              handleSubmit={handleSubmit}
              placeholder="Rechercher Ici"
            />
            <RightSide/>
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
margin-bottom: 6px;
text-align: right;
font-family: 'Open Sans', sans-serif;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 14px; /* 140% */
}

`