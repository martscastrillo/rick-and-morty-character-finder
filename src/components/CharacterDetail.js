import { Link } from "react-router-dom";
import "../styles/CharacterDetail.scss";
import { useParams } from "react-router-dom";
import Alien from "../images/alien.png";
import Dead from "../images/Dead.png";
import Alive from "../images/Alive.png";
import Human from "../images/Human.png";
import unknown from "../images/unknown.png";
import NotFoundPage from "./NotFoundPage";
const CharacterDetail = (props) => {
	const params = useParams();

	const characterFound = props.findCharacter(params.characterId);
	const checkSpecies = () => {
		if (characterFound.species === "Human") {
			return (
				<img
					src={Human}
					alt="human"
					title={`${characterFound.species} icon`}
					className="card__img-species"
				/>
			);
		}
		if (characterFound.species === "Alien") {
			return (
				<img
					src={Alien}
					alt="alien"
					title={`${characterFound.species} icon`}
					className="card__img-species"
				/>
			);
		}
	};
	const checkStatus = () => {
		if (characterFound.status === "Alive") {
			return (
				<img
					src={Alive}
					alt="alive"
					title={`${characterFound.status} icon`}
					className="card__img-species"
				/>
			);
		}
		if (characterFound.status === "Dead") {
			return (
				<img
					src={Dead}
					alt="dead"
					title={`${characterFound.status} icon`}
					className="card__img-species"
				/>
			);
		}

		if (characterFound.status === "unknown") {
			return (
				<img
					src={unknown}
					alt="unknown"
					title={`${characterFound.status} icon`}
					className="card__img-species"
				/>
			);
		}
	};

	if (characterFound !== undefined) {
		return (
			<li className="detailSuperbox">
				<Link to="/" className="link">
					{" "}
					<i className="fa-solid fa-chevron-left"></i>Return
				</Link>
				<div className="detail">
					<img
						className="detail__image"
						src={characterFound.image}
						alt={characterFound.name}
						title={characterFound.name}
					/>
					<div className="detailtextbox">
						<h2 className="detail__name">{characterFound.name}</h2>
						<h3 className="detail__status">
							Status:{" "}
							<span className="detailspan">{characterFound.status}</span>
							{checkStatus()}
						</h3>
						<h3 className="detail__origin">
							Origin:{" "}
							<span className="detailspan">{characterFound.origin}</span>
						</h3>
						<h3 className="detail__species">
							Species:{" "}
							<span className="detailspan">{characterFound.species}</span>
							{checkSpecies()}
						</h3>
						<h3 className="detail__episodes">
							Episodes:{" "}
							<span className="detailspan">
								{characterFound.episode.length}
							</span>
						</h3>
					</div>
				</div>
			</li>
		);
	} else {
		return <NotFoundPage />;
	}
};
export default CharacterDetail;
