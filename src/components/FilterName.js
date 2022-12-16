const FilterName = (props) => {
    const handleInput = (ev) => {
		props.handleFilterName(ev.target.value);
	};
    return 	<input
    className="formbox__input"
    type="text"
    placeholder="Search"
    value={props.filterByName}
    onInput={handleInput}
/>
}
export default FilterName;