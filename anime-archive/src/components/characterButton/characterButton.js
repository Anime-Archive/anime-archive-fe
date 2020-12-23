import "./characterButton.css";

const characterButton = (props) => {
  // For characterButton to work properly pass in an array with 3 objects
  // Inside each object have an id and an image
  return (
    <div className="cardContainer">
      {props.data.map((character) => (
        <div className="characterCardPadding" key={character.id}>
          <div className="characterCarouselCard">
            <div className="characterCarouselImageContainer">
              <img src={character.image.medium} alt="anime character" />
            </div>
            <div className="characterNames">
              {/* Checks if character has both first and last name, if not display the one that does exist */}
              <h4>
                {character.name.last && character.name.first
                  ? `${character.name.last} ${character.name.first}`
                  : character.name.last
                  ? character.name.last
                  : character.name.first}
              </h4>
              <h4>Aliases:</h4>
              <p>
                {character.name.alternative.length > 1
                  ? character.name.alternative.join(", ")
                  : "Character has no alias"}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default characterButton;
