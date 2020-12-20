import "./characterButton.css";

const characterButton = (props) => {
  // For characterButton to work properly pass in an array with 3 objects
  // Inside each object have an id and an image
  return (
    <div className="cardContainer">
      {props.data.map((character) => (
        <div className="characterCarouselCard">
          <img
            key={character.id}
            s
            src={character.image.large}
            alt="anime character"
          />
        </div>
      ))}
    </div>
  );
};

export default characterButton;
