import FilterDropdown from "../../components/filterDropdown/FilterDropdown.js";
import { filterData } from "../../utils/index.js";
import Line from "../../components/line/Line.js";
import "./Filter.css";

const Filter = (props) => {
  // Resets query object holding values and dropdown filters to display None
  function clearFilter() {
    // Drop all filter values except searchTerm
    props.setQueryStringObj({
      searchTerm: props.queryStringObj.searchTerm,
      genre: null,
      sort: null,
    });

    // Grab and set all dropdowns to a variable in an array
    const allFilters = document.querySelectorAll("select");

    // Loop through resetting each to 0th value to display None
    for (let dropdown of allFilters) {
      dropdown.selectedIndex = 0;
    }
  }

  return (
    <div className="filterComponent">
      <Line />

      <div className="filterHeader">
        <h2>Filters</h2>
        <p onClick={() => clearFilter()}>clear all</p>
      </div>

      {/* Mapping through data structure to display all filters, each with a title and dropdown */}
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

      <Line />
    </div>
  );
};

export default Filter;
