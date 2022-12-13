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
	const handleOnClick = (ev) => {
		props.handleFilterBySpecie("All");
		props.handleFilterName("");
    props.handleFilterByStatus(ev.target.value);
		return "All";
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
				>
					<option value="All">All</option>
					<option value="Human">Human</option>
					<option value="Alien">Alien</option>
				</select>
			</div>
		
			<div className="checkbox">
				<span className="checkbox__span">
					<input
						className="checkbox__span__input"
						type="checkbox"
						id="status1"
						name="status1"
						value="Alive"
            onChange={handleOnChangeChecked}
            checked={props.filterByStatus}
					/>
					<label htmlFor="status1">Alive</label>
				</span>
        <span className="checkbox__span">
					<input
						className="checkbox__span__input"
						type="checkbox"
						id="status2"
						name="status2"
						value="Dead"
            onChange={handleOnChangeChecked}
            checked={props.filterByStatus}
					/>
					<label htmlFor="status2">Dead</label>
				</span>
        <span className="checkbox__span">
					<input
						className="checkbox__span__input"
						type="checkbox"
						id="status3"
						name="status3"
						value="Alive"
            onChange={handleOnChangeChecked}
            checked={props.filterByStatus}
					/>
					<label htmlFor="status3">Unknown</label>
				</span>
				
			</div>
      <button className="formbox__btn" onClick={handleOnClick}>
				Reset
			</button>
		</form>
	);
};
export default Filters;
