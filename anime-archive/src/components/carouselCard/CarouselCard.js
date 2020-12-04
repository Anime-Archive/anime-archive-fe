import "./CarouselCard.css";

const CarouselCard = (props) => {
  return (
    <div className="carouselCard">
      <div className="carouselImage">
        <img src={props.data.cover} alt="anime cover" />
      </div>

      <p>{props.data.name}</p>

      <label>
        {`${props.data.recommend}% Recommend`}

        {/* Parent div below is the container for the progress bar background in gray */}
        <div className="recommendBar">
          {/* Inner self closing div is the dynamic bar that fills the progress bar */}
          <div
            className="recommendFill"
            style={{ width: `${props.data.recommend}%` }}
          />
        </div>
      </label>
    </div>
  );
};

export default CarouselCard;
