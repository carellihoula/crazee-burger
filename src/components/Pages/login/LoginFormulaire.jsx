import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginFormulaire() {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => { 
        setUsername(e.target.value)
     }
    const handleSubmit =(e) =>{
        e.preventDefault()
        //alert(`Bonjour ${prenom}`)
        setUsername('')
        navigate(`/order/${username}`)
    }
  return (
    
        <form onSubmit={handleSubmit}>
          <h1>Bienvenue chez nous !</h1>
          <h2>connectez-vous</h2>
            <input type="text" 
            value={username}
            onChange={handleChange}
            placeholder='Entrez votre prenom' 
            required   
            />
            <button>Accédez à votre espace</button>
        </form>
    
  )
}
