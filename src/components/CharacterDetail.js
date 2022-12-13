import {Link} from 'react-router-dom';
import '../styles/CharacterDetail.scss';
import { useParams } from 'react-router-dom';
const CharacterCardFromList = (props) => {
  const params = useParams();

  const characterFound = props.findCharacter(params.characterId);

  console.log(characterFound)
 const numberOfEpisodes = characterFound.episode.length;

    return (
    <li  className='detailSuperbox'>
        <Link to='/' className='link'> <i className="fa-solid fa-chevron-left"></i>Volver</Link>
        <div className='detail'>
            <img
            className=""
            src={characterFound.image}
            alt={characterFound.name}
            title={characterFound.name}/>
          <div className='detailtextbox'>
          <h2 className="detail__name">{characterFound.name}</h2>
          <h3 className="detail__status">Status:  <span className='detailspan'>{characterFound.status}</span></h3> 
          <h3 className="detail__species">Species:  <span className='detailspan'>{characterFound.species}</span></h3>
          <h3 className="detail__origin">Origin:  <span className='detailspan'>{characterFound.origin}</span></h3>
          <h3 className="detail__episodes">Episodes:  <span className='detailspan'>{numberOfEpisodes}</span></h3>
    
          </div> 
          </div> 
        
      </li>  
    );
  }
  export default CharacterCardFromList;
