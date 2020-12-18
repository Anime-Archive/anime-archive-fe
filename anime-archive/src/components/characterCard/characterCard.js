import "./characterCard.css";

const characterCard = (props) => {
  return (
    <div className="characterCard">
      <div className="cardImage">
        <img src={props.data.image.large} alt="anime character" />
      </div>

      <div className="cardNames">
        <h3>{props.data.name.full}</h3>
        <h3>{props.data.name.native}</h3>
      </div>
    </div>
  );
};

export default characterCard;
