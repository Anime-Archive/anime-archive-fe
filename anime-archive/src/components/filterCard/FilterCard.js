import "./FilterCard.css";

const FilterCard = (props) => {
  return (
    <div className="filterCard">
      <p>{props.data.name}</p>
    </div>
  );
};

export default FilterCard;
