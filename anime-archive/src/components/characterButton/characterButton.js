import "./characterButton.css";

const characterButton = (props) => {
  // For characterButton to work properly pass in an array with 3 objects
  // Inside each object have an id and an image
  return (
    <div className="characterButtonCard">
      {props.data.map((character) => (
        <img
          key={character.id}
          src={character.image.large}
          alt="anime character"
        />
      ))}
      <div className="cardButton">
        <h4>View All</h4>
      </div>
    </div>
  );
};

export default characterButton;
