const FilterByStatus = (props) => {
	const handleOnChangeChecked = (ev) => {
		props.handleFilterByStatus(ev.target.value);
	};
	const renderStatus = () => {
		const characterStatus = props.characterData.map((eachCharacter) => {
			return eachCharacter.status;
		});
		const newSet = new Set(characterStatus);
		const oneStatus = [...newSet];

		return oneStatus.map((oneStatusItem, index) => {
			return (
				<span className="checkbox__span" key={index}>
					<input
						className="checkbox__span__input"
						type="checkbox"
						id={oneStatusItem}
						name="origin"
						value={oneStatusItem}
						onChange={handleOnChangeChecked}
						checked={props.filterByStatus.includes(oneStatusItem)}
					/>
					<label htmlFor={oneStatusItem}>{oneStatusItem}</label>
				</span>
			);
		});
	};
	return <div className="checkbox">{renderStatus()}</div>;
};
export default FilterByStatus;
