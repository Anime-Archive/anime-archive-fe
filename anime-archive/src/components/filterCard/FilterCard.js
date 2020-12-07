import "./FilterCard.css";

const FilterCard = (props) => {
  // Places black indicator on current filter in carousel
  const currentFilter = (filterId) => {
    const filter = document.querySelector(`.filter-${filterId}`);
    const dot = document.createElement("div");
    dot.classList.add("dot");
    filter.appendChild(dot);
  };

  window.onload = () => {
    currentFilter(1);
  };

  return (
    <div className="filterCard">
      <div
        className={`filterContent filter-${props.data.id}`}
        onClick={() => {
          const oldFilter = document.querySelector(`.dot`);
          oldFilter.remove();
          currentFilter(props.data.id);
        }}
      >
        <p>{props.data.name}</p>
      </div>
    </div>
  );
};

export default FilterCard;
