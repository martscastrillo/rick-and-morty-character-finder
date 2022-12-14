import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import getDataFromAPI from "../services/api.js";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import ls from "../services/localStorage";
import NotFoundPage from "./NotFoundPage";
import "../styles/App.scss";
import logo from "../images/Rick_and_Morty_title_card_(cropped).png";
import Filters from "./Filters.js";
function App() {
	const [characterData, setCharacterData] = useState([]);
	const [filterByName, setFilterByName] = useState("");
	const [filterBySpecie, setFilterBySpecie] = useState("All");
	const [filterByStatus, setFilterByStatus] = useState([]);
	useEffect(() => {
			const localStorage = ls.get("data");
		if (localStorage === null) {
		getDataFromAPI().then((cleanData) => {
			setCharacterData(cleanData);
			ls.set("data", cleanData);
		});
		} else {
			setCharacterData(localStorage);
		}
	}, []);

	const handleFilterName = (value) => {
		setFilterByName(value);
		ls.set("input", value);
	};
	const handleFilterBySpecie = (value) => {
		setFilterBySpecie(value);
		ls.set("specie", value);
	};
	const handleFilterByStatus = (value) => {
		setFilterByStatus([...filterByStatus, value]);
		ls.set("status", filterByStatus);
	};
	const handleReset = () => {
		setCharacterData([...characterData]);
		setFilterByName("");
		setFilterByStatus([]);
		setFilterBySpecie("All");
		ls.remove("specie");
		ls.remove("input");
	};

	const filterCharacters = characterData
		.filter((eachCharacter) =>
			eachCharacter.name.toLowerCase().includes(filterByName.toLowerCase())
		)
		.filter((eachCharacter) => {
			let result = "";
			if (filterBySpecie === "All") {
				result = true;
				return result;
			} else if (eachCharacter.species === filterBySpecie) {
				result = true;
				return result;
			}

			return result;
		})
		.filter((eachCharacter) => {
			let result = "";
			if (filterByStatus.length === 0) {
				result = true;
				return result;
			}
			if (filterByStatus.includes(eachCharacter.status)) {
				result = true;
				return result;
			}
			return result;
		});

	const findCharacter = (id) => {
		return characterData.find((character) => character.id.toString() === id);
	};

	return (
		<div>
			<header className="header">
				<img className="logo" src={logo} alt="logo" title="rick-and" />
			</header>
			<Routes>
				<Route
					path="/"
					element={
						<div className="main">
							<Filters
								handleFilterName={handleFilterName}
								filterByName={filterByName}
								handleFilterBySpecie={handleFilterBySpecie}
								filterBySpecie={filterBySpecie}
								handleReset={handleReset}
								handleFilterByStatus={handleFilterByStatus}
								filterByStatus={filterByStatus}
								characterData={characterData}
							/>
							<CharacterList data={filterCharacters}></CharacterList>
						</div>
					}
				>
				</Route>
				<Route
					path="/character/:characterId"
					element={<CharacterDetail findCharacter={findCharacter} />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</div>
	);
}

export default App;
