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
        <div className="recommendBar">
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
