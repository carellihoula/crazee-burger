
import {Logo } from '../../Logo'
import logo from '../../../assets/fc.png'
import LoginFormulaire from './LoginFormulaire'

function LoginPage() {
    
  return (
    <div>
        <Logo imageUrl={logo} longueur={100} hauteur={50}/>
        <LoginFormulaire/>
        
    </div>
  )
}

export default LoginPage