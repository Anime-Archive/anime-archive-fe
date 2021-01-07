import { useEffect } from "react";
import { filterData } from "../../utils/index.js";
import "./FilterDropdown.css";
const FilterDropdown = (props) => {
  // Updates the query object with new value based on filters changed
  function filterHandler(event) {
    // User changes are recorded and saved as key/value format
    props.setFilterAndSearchState({
      ...props.filterAndSearchState,
      [event.target.name]:
        event.target.value.length > 0 ? event.target.value : null,
    });
    props.setAnimeData(null);
    props.setTrigger(true);
  }

  // Returns number of dropdown active filter to set as default
  function filtersKey(name) {
    // Creates an nested object using filterData for quick look ups
    const answerKey = {};

    for (let filter of filterData) {
      let filterName = filter.name;
      answerKey[filterName] = {};
      for (let pair of filter.options) {
        answerKey[filterName][pair.value] = pair.id;
      }
    }

    // Check using argument by looking up value of dropdown from URL
    if (props.filterAndSearchState[name]) {
      return answerKey[name][props.filterAndSearchState[name]];
    } else {
      return 0;
    }
  }

  useEffect(() => {
    // After building each dropdown
    // Check if we need to update active filter on dropdown
    if (filtersKey(props.data.name) > 0) {
      const dropdown = document.querySelector(`#${props.data.name}`);

      dropdown.selectedIndex = filtersKey(props.data.name);
    }
  }, []);

  return (
    <div className="dropdownSpacer">
      <div className="dropdownCard">
        {/* Filter name */}
        <h4>{props.data.title}</h4>

        {/* Filter dropdown with options*/}
        <select
          name={props.data.name}
          onChange={(event) => filterHandler(event)}
          id={`${props.data.name}`}
        >
          {/* Default option */}
          <option value="">None</option>

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
