
import { Route, Routes } from 'react-router-dom'

import LoginPage from './components/Pages/login/LoginPage'
import OrderPage from './components/Pages/order/OrderPage'
import PageNotFound from './components/Pages/PageNotFound'

//import { styled } from 'styled-components'



function App() {
 

  return (
   
    
        <Routes>

            <Route path="/" element={<LoginPage/>}/>
            <Route path="/order/:username" element={<OrderPage/>}/>
            <Route  path="*" element={<PageNotFound/>}/>
            

        </Routes>   
      
        
   
        
          
    
    
  )
}

export default App
