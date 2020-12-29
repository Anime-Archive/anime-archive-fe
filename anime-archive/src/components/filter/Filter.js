import FilterDropdown from "../../components/filterDropdown/FilterDropdown.js";
import { filterData } from "../../utils/index.js";
import "./Filter.css";

const Filter = (props) => {
  return (
    <div className="filterComponent">
      <div className="filterHeader">
        <h2>Filters</h2>
        <p>clear all</p>
      </div>

      <form className="dropdownFilters">
        {filterData.map((dropdown) => (
          <FilterDropdown
            key={dropdown.id}
            data={dropdown}
            queryStringObj={props.queryStringObj}
            setQueryStringObj={props.setQueryStringObj}
          />
        ))}
      </form>
    </div>
  );
};

export default Filter;
