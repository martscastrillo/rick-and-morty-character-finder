import {Link} from 'react-router-dom';
/* import Alive from "../images/alien.png";
import Dead from "../images/calavera.png";
import Unknown from "../images/who.png"; */
const CharacterCardFromList = ({character}) => {
/*   let result = '';
  const checkStatus = () =>{

    if(character.status === 'Alive'){
      result = {Alive};
    }
    if(character.status === 'Dead'){
      result =  {Dead};
    }
    if(character.status === 'unknown'){
       result =  {Unknown};
    }
    return result;
  }
    */

    return (
    <li className="card" key='character.id'>
   
     <Link to={`user/${character.id}`}  >
          <img
            className="card__img"
            src={character.image}
            alt={`Foto de ${character.name}`}
            title={`Foto de ${character.name}`}
          />
          <div className='textbluebox'>
          <h2 className="card__name">{character.name}</h2>
          <h3 className="card__species"> {character.species} </h3>
          <span className='logobox'>{/* <img className='logostatus' src={Alive} alt="status" />
          <img className='logostatus' src={Alive} alt="status" /> */}</span>
          </div>
      
    </Link> 
    </li>
    );
  }
  export default CharacterCardFromList;
