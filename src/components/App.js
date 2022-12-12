import { useEffect, useState } from 'react';
/* import {Routes, Route, Link, NavLink} from 'react-router-dom'; */
import getDataFromAPI from '../services/api.js';
import CharacterList from './CharacterList'
import '../styles/App.scss';
import logo from "../images/Rick_and_Morty_title_card_(cropped).png"

import Filters from './Filters.js';
function App() {
  const [characterData, setCharacterData] = useState([]);
  const [filterByName, setFilterByName] = useState('');

  useEffect(() => {
    getDataFromAPI().then((cleanData) => {
      setCharacterData(cleanData);
     
    });
  }, []);

  const handleFilterName = (value) => {
    setFilterByName(value);
  };


  const listCharacters = () => {
    
    return characterData
      .filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase()));
  }
    
      return (
    <div>  
    <header className='header'><img className='logo' src={logo} alt="" /></header>
    <Filters handleFilterName={handleFilterName} filterByName={filterByName}/>
       <CharacterList data={listCharacters()}></CharacterList> 
    

    </div>
  );
}

export default App;
