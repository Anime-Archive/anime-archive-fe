// Components
import FilterCard from "../filterCard/FilterCard";
import CarouselCard from "../carouselCard/CarouselCard";
// Styling
import "./Carousel.css";
// Data related
import { filterData } from "../../utils/carouselData";

const Carousel = (props) => {
  // Places black indicator on current filter in carousel
  const currentFilter = (filterId) => {
    const oldFilter = document.querySelector(`.activeDot`);
    oldFilter.remove();

    const newFilter = document.querySelector(`.filter-${filterId}`);

    const dot = document.createElement("div");
    dot.classList.add("activeDot");
    newFilter.appendChild(dot);
  };

  // Grabs first filter in data structure and make it the default filter
  const defaultFilter = filterData[0];

  // Removes the default filter so we wont display it twice
  const filters = filterData.slice(1);

  return (
    <section>
      <div className="filters">
        <div key={defaultFilter.id} className="filterCard">
          <div
            className={`filterContent filter-${defaultFilter.id}`}
            onClick={() => (
              currentFilter(defaultFilter.id),
              props.setQueryFilter(defaultFilter.querySort)
            )}
          >
            <p>{defaultFilter.name}</p>
            <div className="activeDot"></div>
          </div>
        </div>

        {/* Maps through filters */}
        {filters.map((filter) => (
          <FilterCard
            key={filter.id}
            data={filter}
            currentFilter={currentFilter}
            setQueryFilter={props.setQueryFilter}
          />
        ))}
      </div>

      {/* Query for carousel data based on filter selected above to dynamically populate carousel container below */}
      <div className="cardContainer">
        {props.apiData.map((card) => (
          <CarouselCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
