import "./AnimeCard.css";

const AnimeCard = (props) => {
  return (
    <div className="animeCard">
      <div className="cardImage">
        <img src={props.data.cover} alt="anime cover" />
      </div>

      <div className="cardDetails">
        <p>{props.data.name}</p>
        <h8>Start Date</h8>
        <h9>{`${props.data.month}-${props.data.day}-${props.data.year}`}</h9>
        <br />
        <h8>Status</h8>
        <h9>{props.data.status}</h9>
      </div>
    </div>
  );
};

export default AnimeCard;
