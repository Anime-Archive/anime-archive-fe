import "./Filter.css";

const Filter = (props) => {
  function filterHandler(event) {
    props.setQueryStringObj({
      ...props.queryStringObj,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <div className="filterComponent">
      <div className="filterHeader">
        <h2>Filters</h2>
        <p>clear all</p>
      </div>

      <form>
        <h4>Sort</h4>
        <select name="sort" onChange={(event) => filterHandler(event)}>
          <option value={null}>None</option>
          <option value="TRENDING_DESC">Trending</option>
          <option value="POPULARITY_DESC">Popular</option>
          <option value="FAVOURITES_DESC">Favorites</option>
        </select>
      </form>
    </div>
  );
};

export default Filter;
