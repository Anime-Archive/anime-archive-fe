import { useState } from "react";
// Components
import FilterCard from "../filterCard/FilterCard";
import CarouselCard from "../carouselCard/CarouselCard";
import { Loader } from "../../components/loader/Loader.js";
// Styling
import "./Carousel.css";
// Data related
import { filterData } from "../../utils/carouselData";
// Graphql queries
import { GET_CAROUSEL } from "../../graphql/index.js";
// Apollo Client
import { useQuery } from "@apollo/client";

const Carousel = (props) => {
  // Places black indicator on current filter in carousel
  const setFilterIndicator = (filterId) => {
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

  // Keeps track of the current filter we need to fetch
  const [currentFilter, setCurrentFilter] = useState(defaultFilter.querySort);

  // API Call to fetch Carousel data
  const Carousel = () => {
    const { loading, error, data } = useQuery(GET_CAROUSEL, {
      variables: { filterName: currentFilter },
    });
    if (loading) return <Loader />;
    if (error) return <Loader />;

    return data.Page.media.map((card) => (
      <CarouselCard key={card.id} data={card} />
    ));
  };

  return (
    <section>
      <div className="filters">
        <div key={defaultFilter.id} className="filterCard">
          <div
            className={`filterContent filter-${defaultFilter.id}`}
            onClick={() => (
              setFilterIndicator(defaultFilter.id),
              setCurrentFilter(defaultFilter.querySort)
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
            setFilterIndicator={setFilterIndicator}
            setCurrentFilter={setCurrentFilter}
          />
        ))}
      </div>
      <div className="cardContainer">
        <Carousel />
      </div>
    </section>
  );
};

export default Carousel;
