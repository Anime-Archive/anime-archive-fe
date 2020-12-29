import "./FilterDropdown.css";

const FilterDropdown = (props) => {
  function filterHandler(event) {
    props.setQueryStringObj({
      ...props.queryStringObj,
      [event.target.name]: event.target.value,
    });
  }
  return (
    <div className="dropdownCard">
      <h4>{props.data.title}</h4>
      <select name={props.data.name} onChange={(event) => filterHandler(event)}>
        <option value={null}>None</option>

        {props.data.options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterDropdown;
