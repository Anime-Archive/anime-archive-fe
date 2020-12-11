import "./FilterCard.css";

const FilterCard = (props) => {
  return (
    <div className="filterCard">
      <div
        className={`filterContent filter-${props.data.id}`}
        onClick={() => {
          props.currentFilter(props.data.id);
        }}
      >
        <p>{props.data.name}</p>
      </div>
    </div>
  );
};

export default FilterCard;
