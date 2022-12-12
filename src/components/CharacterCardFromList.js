import {Routes, Route, Link, NavLink} from 'react-router-dom';

const CharacterCardFromList = ({character}) => {


    return (
    <li className="card" key='character.id'>
        <Link>
          <img
            className="card__img"
            src={character.image}
            alt={`Foto de ${character.name}`}
            title={`Foto de ${character.name}`}
          />
  
          <h2 className="card__name">
            {character.name}
          </h2>
          <h3 className="card__species">
          {character.species}
          </h3>
          </Link>
      </li>  
    );
  }
  export default CharacterCardFromList;
