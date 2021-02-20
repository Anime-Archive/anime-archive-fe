import "./FilterCard.css";

const FilterCard = (props) => {
  return (
    <div className="filterCard">
      <div
        className={`filterContent filter-${props.data.id}`}
        onClick={() => (
          props.setFilterIndicator(props.data.id),
          props.setCurrentFilter(props.data.querySort)
        )}
      >
        <p>{props.data.name}</p>
      </div>
    </div>
  );
};

export default FilterCard;
