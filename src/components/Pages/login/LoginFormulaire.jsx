import React, { useState } from 'react'

export default function LoginFormulaire() {
    const [prenom, setPrenom] = useState('')
    const handleChange = (e) => { 
            setPrenom(e.target.value)
     }
    const handleSubmit =(e) =>{
        e.preventDefault()
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
            <button>Accédez à votre espace</button>
        </form>
    
  )
}
