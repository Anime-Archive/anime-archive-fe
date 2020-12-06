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

  // Above object is being used to turn integer month returned from api into a string month
  // Then saving it as variable to use for start date in card below

  return (
    <div className="animeCard">
      <div className="cardImage">
        <img src={props.data.cover} alt="anime cover" />
      </div>

      <div className="cardDetails">
        <h3>{props.data.name}</h3>
        <h4>Start Date</h4>
        <p>{`${newMonth} ${props.data.day}, ${props.data.year}`}</p>
        <br />
        <h4>Status</h4>
        <p>{props.data.status}</p>
      </div>
    </div>
  );
};

export default AnimeCard;
