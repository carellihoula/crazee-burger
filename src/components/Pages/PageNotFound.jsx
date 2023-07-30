import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
    //state
    const navigate = useNavigate()

    const handleClick =()=>{
        navigate('/')
    }
    //behavior
    //output
  return (
    
    <div>
            <h1>Bonjour {}</h1>
            
               <button onClick={handleClick}>Retourner vers Accueil</button>
            
    </div>
  )
}
