import CharacterCardFromList from "./CharacterCardFromList";
import "../styles/CharacterList.scss";
const CharacterList = ({ data }) => {
	if (data.length >= 1) {
		const characterElements = data.map((character, index) => {
			return <CharacterCardFromList character={character} key={index} />;
		});

		return (
			<section className="sectionlist">
				<ul className="list">{characterElements}</ul>
			</section>
		);
	} else {
		return (
			<section className="error">
				<p className="error__div">
					We have not found <span className="error__span">who</span> you are
					looking for,
				</p>
				<p className="error__div">please try again</p>
			</section>
		);
	}
};

export default CharacterList;
