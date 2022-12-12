import { useEffect, useState } from "react";
import {Routes, Route, matchPath, useLocation} from 'react-router-dom';
import getDataFromAPI from "../services/api.js";
import CharacterList from "./CharacterList";
import CharacterDetail from './CharacterDetail'
import "../styles/App.scss";
import logo from "../images/Rick_and_Morty_title_card_(cropped).png";

import Filters from "./Filters.js";
function App() {
	const [characterData, setCharacterData] = useState([]);
	const [filterByName, setFilterByName] = useState("");

	useEffect(() => {
		getDataFromAPI().then((cleanData) => {
			setCharacterData(cleanData);
		});
	}, []);

	const handleFilterName = (value) => {
		setFilterByName(value);
	};

	const filterCharacters = () => {
		return characterData.filter((eachCharacter) =>
			eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
		);
	};
	const notFound = () => {
		const notFound = characterData.filter(
			(eachCharacter) =>
				!eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
		);
		if (notFound) {
			return (
				<p className="error">
					{" "}
					No hemos encontrado lo que buscas, prueba otra vez
				</p>
			);
		}
	};
  const findCharacter = (id) => {
    return characterData. find((character) => character.id === id);
    };
	return (
		<div>
			<header className="header">
				<img className="logo" src={logo} alt="" />
			</header>
      <Routes>
        <Route path='/' >
        </Route>
        <Route path="/user/:characterId"  element={<CharacterDetail findCharacter={findCharacter} />}/>
      
     
      </Routes>
      <div className="main">
          <Filters
            handleFilterName={handleFilterName}
            filterByName={filterByName}
          />
          <CharacterList data={filterCharacters() || notFound()}></CharacterList>
        </div>
		</div>
	);
}

export default App;
