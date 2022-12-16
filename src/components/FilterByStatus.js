const FilterByStatus = (props) => {
    const renderStatus = () => {

        const handleOnChangeChecked = (ev) => {
            props.handleFilterByStatus(ev.target.value);
        };
        
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
      

	
   
    return <div className="checkbox">{renderStatus()}</div>
}
export default FilterByStatus;