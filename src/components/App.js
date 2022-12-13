import { useEffect, useState } from "react";
import { Routes, Route } from 'react-router-dom';
import getDataFromAPI from "../services/api.js";
import CharacterList from "./CharacterList";
import CharacterDetail from './CharacterDetail';
import ls from '../services/localStorage';
import NotFoundPage from './NotFoundPage';
import "../styles/App.scss";
import logo from "../images/Rick_and_Morty_title_card_(cropped).png";

import Filters from "./Filters.js";
function App() {
	const [characterData, setCharacterData] = useState([]);
	const [filterByName, setFilterByName] = useState("");
	const [filterSpecie, setFilterSpecie] = useState('All');
	useEffect(() => {
		getDataFromAPI().then((cleanData) => {
			setCharacterData(cleanData);
			ls.set('data', cleanData);
		});

	}, []);

	const handleFilterName = (value) => {
		setFilterByName(value);
	};

	const handleFilterSpecie = (value) => {
		setFilterSpecie(value);
	};

	const filterCharacters = 
		 characterData
			.filter((eachCharacter) => eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase()))/* 
			.filter((eachCharacter) => {
				let result = '';
				 if (filterSpecie === 'All') {
					result = true;
					return result;
				} else if (filterSpecie === 'Human') {
					console.log('Human');
					result = true;
					return result;
				}
				else if (filterSpecie === 'Alien') {
					console.log('Alien');
					
				}
				return result;
			}) */;
	


	const findCharacter = (id) => {
		return characterData.find((character) => character.id === parseInt(id));
	};


	return (
		<div>
			<header className="header">
				<img className="logo" src={logo} alt="logo" title="rick-and" />
			</header>
			<Routes>
				<Route path='/' element={<div className="main"><Filters handleFilterName={handleFilterName} filterByName={filterByName} handleFilterSpecie={handleFilterSpecie} filterSpecie={filterSpecie} />
					<CharacterList data={filterCharacters}></CharacterList></div>}> </Route>
				<Route path="/character/:characterId" element={<CharacterDetail findCharacter={findCharacter} />} />
				<Route path='*' element={<NotFoundPage />} />

			</Routes>

		</div>
	);
}

export default App;
