import "./characterCard.css";

const characterCard = (props) => {
  return (
    <div className="characterCard">
      <div className="cardImage">
        <img src={props.data.image.large} alt="anime character" />
      </div>

      <div className="cardNames">
        {/* Checks if character has both first and last name, if not display the one that does exist */}
        <h3>
          {props.data.name.first && props.data.name.last
            ? `${props.data.name.first} ${props.data.name.last}`
            : props.data.name.first
            ? props.data.name.first
            : props.data.name.last}
        </h3>
        <h4>Aliases:</h4>
        <p>
          {props.data.name.alternative[0] === ""
            ? "Character has no alias"
            : props.data.name.alternative.join(", ")}
        </p>
      </div>
    </div>
  );
};

export default characterCard;
