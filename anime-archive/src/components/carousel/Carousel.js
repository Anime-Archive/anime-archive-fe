import { useState, useEffect } from "react";
import axios from "axios";
// Components
import FilterCard from "../filterCard/FilterCard";
import CarouselCard from "../carouselCard/CarouselCard";
import { Loader } from "../../components/loader/Loader.js";
// Styling
import "./Carousel.css";
// Data related
import { filterData } from "../../utils/carouselData";
// Graphql
import { fetchCarousel } from "../../graphql/index.js";

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

  // Holds data for carousel cards and will change based on filter selected in carousel
  const [carouselCardData, setCarouselCardData] = useState(null);

  // Loader
  const [carouselLoading, setCarouselLoading] = useState(false);

  // Grabs first filter in data structure and make it the default filter
  const defaultFilter = filterData[0];

  // Removes the default filter so we wont display it twice
  const filters = filterData.slice(1);

  // Tracks filter change and holds newly selected query sorting name
  const [queryFilter, setQueryFilter] = useState("POPULARITY_DESC");

  // Dynamic filter call to api triggered on everytime a new is selected
  useEffect(() => {
    setCarouselLoading(true);
    axios
      .post("https://graphql.anilist.co", {
        query: fetchCarousel,
        variables: { filterName: queryFilter },
      })
      .then(function (response) {
        setCarouselCardData(response);

        setTimeout(() => {
          setCarouselLoading(false);
        }, 1000);
      })
      .catch(function (error) {
        console.log(error);
        setCarouselLoading(false);
      });
  }, [queryFilter]);

  return (
    <section>
      <div className="filters">
        <div key={defaultFilter.id} className="filterCard">
          <div
            className={`filterContent filter-${defaultFilter.id}`}
            onClick={() => (
              currentFilter(defaultFilter.id),
              setQueryFilter(defaultFilter.querySort)
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
            setQueryFilter={setQueryFilter}
          />
        ))}
      </div>

      {/* Query for carousel data based on filter selected above to dynamically populate carousel container below */}
      <div className="cardContainer">
        {!carouselCardData || carouselLoading ? (
          <Loader />
        ) : (
          carouselCardData.data.data.Page.media.map((card) => (
            <CarouselCard key={card.id} data={card} />
          ))
        )}
      </div>
    </section>
  );
};

export default Carousel;
