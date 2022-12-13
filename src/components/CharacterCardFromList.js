import { Link } from "react-router-dom";
import "../styles/CharacterCardFromList.scss";
import Alien from "../images/Alien.png";
import Dead from "../images/Dead.png";
import Alive from "../images/Alive.png";
import Human from "../images/Human.png";
import unknown from "../images/unknown.png";

const CharacterCardFromList = ({ character }) => {
	const checkSpecies = () => {
		if (character.species === "Human") {
			return (<img src={Human} alt="human" title={`Icon de ${character.species}`} className="card__img-species" />);
		}
		if (character.species === "Alien") {
			return (<img src={Alien} alt="alien" title={`Icon de ${character.species}`} className="card__img-species" />);
		}
	};
	const checkStatus = () => {
		if (character.status === "Alive") {
			return (<img src={Alive} alt="alive" title={`Icon de ${character.status}`} className="card__img-species" />);
		}
		if (character.status === "Dead") {
			return (<img src={Dead} alt="dead" title={`Icon de ${character.status}`} className="card__img-species" />);
		}

		if (character.status === "unknown") {
			return (<img src={unknown} alt="unknown" title={`Icon de ${character.status}`} className="card__img-species" />
			);
		}
	};

	return (
		<li className="card" key="character.id">
			<Link to={`/character/${character.id}`}>
				<img
					className="card__img"
					src={character.image}
					alt={`Foto de ${character.name}`}
					title={`Foto de ${character.name}`}
				/>
				<div>
					<h2 className="card__name">{character.name}</h2>
					<div className="statusspecies-div">
						<span className="textbluebox__species">
							<h3 className="card__species"> {character.species}</h3>
							{checkSpecies()}
						</span>
						<span className="textbluebox__status">
          	<h3 className="card__status"> {character.status}</h3>{checkStatus()} </span>
					</div>
				</div>
			</Link>
		</li>
	);
};
export default CharacterCardFromList;
