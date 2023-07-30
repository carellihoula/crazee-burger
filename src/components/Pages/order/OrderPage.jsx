//import React from 'react'
import { Link, useParams } from 'react-router-dom'
//import LoginPage from '../login/LoginPage';


function OrderPage() {
  //state
  const {username} = useParams()

  //behavior

  //Output
  return (

    <div>
            <h1>Bonjour {username.toLowerCase()}</h1>
            <Link to="/">
               <button>Deconnexion</button>
            </Link>     
    </div>
  )
}

export default OrderPage