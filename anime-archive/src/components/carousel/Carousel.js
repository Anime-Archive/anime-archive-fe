import FilterCard from "../filterCard/FilterCard";
import CarouselCard from "../carouselCard/CarouselCard";
import { filterData, carouselData } from "../../utils/carouselData";
import "./Carousel.css";

const Carousel = () => {
  return (
    <section>
      <div className="filters">
        {filterData.map((item) => (
          <FilterCard key={item.id} data={item} />
        ))}
      </div>

      <div className="cardContainer">
        {carouselData.map((item) => (
          <CarouselCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
