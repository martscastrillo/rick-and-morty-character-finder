const FilterBySpecie = (props) => {
    const handleOnChange = (ev) => {
		props.handleFilterBySpecie(ev.target.value);
	};
    return 	<div className="select">
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


}
export default FilterBySpecie;

