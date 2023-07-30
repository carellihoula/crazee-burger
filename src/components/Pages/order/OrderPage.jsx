//import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import LoginPage from '../login/LoginPage';
function OrderPage() {

    const handleClickDeconnect = () =>{
            var a = 10;
            alert(a)
    }

  return (

    <div>
            <h1>Bonjour {}</h1>
            <Link to="/">
               <button onClick={handleClickDeconnect}>Deconnexion</button>
            </Link>
            <Routes>
                <Route path="rr" element={<OrderPage/>} />
            </Routes>
            
    </div>
  )
}

export default OrderPage