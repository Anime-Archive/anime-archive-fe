import FilterCard from "../filterCard/FilterCard";
import CarouselCard from "../carouselCard/CarouselCard";
import { filterData, carouselData } from "../../utils/carouselData";
import "./Carousel.css";

const Carousel = () => {
  return (
    <section>
      <div className="filters">
        {filterData.map((filter) => (
          <FilterCard key={filter.id} data={filter} />
        ))}
      </div>

      {/* Query for carousel data based on filter selected above to dynamically populate carousel container below */}
      <div className="cardContainer">
        {carouselData.map((card) => (
          <CarouselCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
