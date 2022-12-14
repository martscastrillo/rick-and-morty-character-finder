import "../styles/Filters.scss";

const Filters = (props) => {
	const handleInput = (ev) => {
		props.handleFilterName(ev.target.value);
	};
	const handleOnChange = (ev) => {
		props.handleFilterBySpecie(ev.target.value);
	};
	const handleOnChangeChecked = (ev) => {
		props.handleFilterByStatus(ev.target.value);
	};
	const handleSubmit = (ev) => {
		ev.preventDefault();
	};
	const handleOnClick = () => {
		props.handleReset();
	};
	const renderStatus = () => {
		const characterStatus = props.characterData.map((eachCharacter) => {
			return eachCharacter.status;
		});
		const newSet = new Set(characterStatus);
		const oneStatus = [...newSet];

		return oneStatus.map((oneStatus, index) => {
			return (
				<span className="checkbox__span" key={index}>
					<input
						className="checkbox__span__input"
						type="checkbox"
						id={oneStatus}
						name="origin"
						value={oneStatus}
						onChange={handleOnChangeChecked}
						checked={props.filterByStatus.includes(oneStatus)}
					/>
					<label htmlFor={oneStatus}>{oneStatus}</label>
				</span>
			);
		});
	};

	return (
		<form className="formbox" onSubmit={handleSubmit}>
			<input
				className="formbox__input"
				type="text"
				placeholder="Search"
				value={props.filterByName}
				onInput={handleInput}
			/>
			<div className="select">
				<select
					className="formbox__select"
					name="status"
					id="status"
					checked={props.filterBySpecie}
					onChange={handleOnChange}
					value={props.filterBySpecie}
				>
					<option value="All">All</option>
					<option value="Human">Human</option>
					<option value="Alien">Alien</option>
				</select>
			</div>

			<div className="checkbox">{renderStatus()}</div>
			<button className="formbox__btn" onClick={handleOnClick}>
				Reset
			</button>
		</form>
	);
};
export default Filters;
