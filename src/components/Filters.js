import "../styles/Filters.scss";
import FilterName from "./FilterName";
import FilterByStatus from "./FilterByStatus";
import FilterBySpecie from "./FilterBySpecie";

const Filters = (props) => {
	const handleSubmit = (ev) => {
		ev.preventDefault();
	};
	const handleOnClick = () => {
		props.handleReset();
	};

	return (
		<form className="formbox" onSubmit={handleSubmit}>
			<FilterName
				handleFilterName={props.handleFilterName}
				filterByName={props.filterByName}
			></FilterName>
			<FilterBySpecie
				handleFilterBySpecie={props.handleFilterBySpecie}
				filterBySpecie={props.filterBySpecie}
			></FilterBySpecie>
			<FilterByStatus
				filterByStatus={props.filterByStatus}
				characterData={props.characterData}
				handleFilterByStatus={props.handleFilterByStatus}
			></FilterByStatus>

			<button className="formbox__btn" onClick={handleOnClick}>
				Reset
			</button>
		</form>
	);
};
export default Filters;
