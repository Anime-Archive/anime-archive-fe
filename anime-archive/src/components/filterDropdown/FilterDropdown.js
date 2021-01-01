import "./FilterDropdown.css";

const FilterDropdown = (props) => {
  // Updates the query object with new value based on filters changed
  function filterHandler(event) {
    // User changes are recorded and saved as key/value format
    props.setFilterAndSearchState({
      ...props.filterAndSearchState,
      [event.target.name]: event.target.value,
    });
    props.setTrigger(true);
  }

  return (
    <div className="dropdownSpacer">
      <div className="dropdownCard">
        {/* Filter name */}
        <h4>{props.data.title}</h4>

        {/* Filter dropdown with options*/}
        <select
          name={props.data.name}
          onChange={(event) => filterHandler(event)}
        >
          {/* Default option */}
          <option value={null}>None</option>

          {/* Filter specific option based on data structure */}
          {props.data.options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterDropdown;
