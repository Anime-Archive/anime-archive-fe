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
        <br />
        <progress value={`${props.data.recommend}`} max="100" />
      </label>
    </div>
  );
};

export default CarouselCard;
