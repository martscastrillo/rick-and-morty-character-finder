import {Link} from 'react-router-dom';
import "../styles/CharacterCardFromList.scss";
/* import {  useState } from "react"; */

const CharacterCardFromList = ({character}) => {
 
  /* const [status, setStatus] = useState('');
  const checkStatus = () =>{

    if(character.status === 'Alive'){
      setStatus("../images/alien.png")
    }
    if(character.status === 'Dead'){
       setStatus('../images/calavera.png')
    }
    if(character.status === 'unknown'){
      setStatus("../images/who.png")
      
    }
   
  } */
  

    return (
    <li className="card" key='character.id'>
    
     <Link to={`/character/${character.id}`}  >
          <img
            className="card__img"
            src={character.image}
            alt={`Foto de ${character.name}`}
            title={`Foto de ${character.name}`}
          />
          <div className='textbluebox'>
          <h2 className="card__name">{character.name}</h2>
          <h3 className="card__species"> {character.species} </h3>
          <span className='logobox'>{/* <img className='logostatus' src="" alt=''/>
          <img className='logostatus' src={status} alt='' /> */}</span>
          </div>
      
    </Link> 
    </li>
    );
  }
  export default CharacterCardFromList;
