import "./CarouselCard.css";

const CarouselCard = (props) => {
  return (
    <div className="carouselCard">
      <div className="carouselImage">
        <img src={props.data.cover} alt="anime cover" />
      </div>

      <h3>{props.data.name}</h3>

      <label>
        <p>{`${props.data.recommend}% Recommend`}</p>

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
