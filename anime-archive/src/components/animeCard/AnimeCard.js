import "./AnimeCard.css";

const AnimeCard = (props) => {
  const month = {
    1: "Jan",
    2: "Feb",
    3: "Mar",
    4: "Apr",
    5: "May",
    6: "Jun",
    7: "Jul",
    8: "Aug",
    9: "Sep",
    10: "Oct",
    11: "Nov",
    12: "Dec",
  };

  const newMonth = month[props.data.month];

  return (
    <div className="animeCard">
      <div className="cardImage">
        <img src={props.data.cover} alt="anime cover" />
      </div>

      <div className="cardDetails">
        <p>{props.data.name}</p>
        <h8>Start Date</h8>
        <h9>{`${newMonth} ${props.data.day}, ${props.data.year}`}</h9>
        <br />
        <h8>Status</h8>
        <h9>{props.data.status}</h9>
      </div>
    </div>
  );
};

export default AnimeCard;
