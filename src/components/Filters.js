const Filters = (props) => {
  const handleInput = (ev) => {
    props.handleFilterName(ev.target.value);

  };
  const handleSubmit = (ev) => {
    ev.preventDefault();
    };
  return (
     <form className='formbox' onSubmit={handleSubmit}> 
     <input className="formbox__input" type="text" placeholder="Search" value={props.filterByName} onInput={handleInput}/> 
           {/*  <div className="select"><select className="formbox__select" name="status" id="status">
                <option value="All">All</option>
                <option value="Alive">Alive</option>
                <option value="Dead">Dead</option>
                <option value="unknown">unknown</option>
            </select></div>
            <button className="formbox__btn">Search</button>
     */}
     </form>
  );
};
export default Filters;
