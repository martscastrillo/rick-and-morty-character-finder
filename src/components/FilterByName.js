const FilterByName = (props) => {
    const handleInput = (ev) => {
      props.handleFilterName(ev.target.value);
      console.log(ev.target.value);
    };
  
    return (
       <form className='inputbox'> 
       <input type="text" placeholder="Search" value={props.filterByName} onInput={handleInput}/>
       </form>
    );
  };
  
  export default FilterByName;
  