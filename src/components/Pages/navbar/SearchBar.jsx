import React from 'react'
import styled from 'styled-components'
import {BsSearch} from 'react-icons/bs'

export default function SearchBar({searchValue,handleChange,placeholder, handleSubmit}) {

    
  return (
    <SearchStyled>
        <form onSubmit={handleSubmit}>
            <div className='form-container'>
                <input type="text"
                    onChange={handleChange} 
                    value={searchValue}
                    placeholder={placeholder}  
                    className='input'
                />

                <div className='div-icon-search'>
                    <BsSearch color="#FFF" size={25} />
                </div>
            </div>
            
        </form>
      
    </SearchStyled>
  )
}

const SearchStyled  = styled.div`
    width: 20%;
    .form-container{
    display:flex;
    align-items: center;
    border:2px solid #FFA01B;
    height: 45px;
    //border-radius: 5px;
    width:100%;}
    .input{
        //border: 2px solid #FFA01B;
        height: 100%;
        width:100%;
        outline: none;
        border-style: none;
        padding:5px;
        box-sizing: border-box;
    }
    .div-icon-search{
        display:flex;
        align-items:center;
        justify-content:center;
        background-color:#FFA01B;
        height:100%;
        width:45px;
        cursor:pointer;
        
    }
`
