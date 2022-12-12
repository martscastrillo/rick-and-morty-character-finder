
import CharacterCardFromList from "./CharacterCardFromList";

const CharacterList = ({data}) => {
  const characterElements = data.map((character, index)=>{
  
    return <CharacterCardFromList character={character} key={index}/>;
  })

	return (
		<section>
			<ul className="list">{characterElements}</ul>
		</section>
	);
};

export default CharacterList;
