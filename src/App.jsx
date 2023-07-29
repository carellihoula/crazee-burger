

import LoginPage from './LoginPage'
import { Logo } from './components/Logo'
import logof from './assets/fc.png'

function App() {
 

  return (
    <div>
        
        <Logo imageUrl={logof} longueur={50} hauteur={50} />
        <LoginPage/>
    </div>
  )
}

export default App
