import FilterDropdown from "../../components/filterDropdown/FilterDropdown.js";
import { filterData } from "../../utils/index.js";
import Line from "../../components/line/Line.js";
import "./Filter.css";

const Filter = (props) => {
  function clearFilter() {
    props.setQueryStringObj({
      searchTerm: props.queryStringObj.searchTerm,
      genre: null,
      sort: null,
    });

    const allFilters = document.querySelectorAll("select");

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
