import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function LoginFormulaire({onLogin}) {
    const [prenom, setPrenom] = useState('')
    const handleChange = (e) => { 
            setPrenom(e.target.value)
     }
    const handleSubmit =(e) =>{
        e.preventDefault()
        onLogin(prenom)
        alert(`Bonjour ${prenom}`)
        setPrenom('')
    }
  return (
    
        <form onSubmit={handleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <h2>connectez-vous</h2>
            <input type="text" 
            value={prenom}
            onChange={handleChange}
            placeholder='Entrez votre prenom' 
            required   
            />
            <button>Accédez à votre espace</button> <Link to="/order">Vers order</Link>
        </form>
    
  )
}
