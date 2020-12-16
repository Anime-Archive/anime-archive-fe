import "./AnimeCard.css";

const AnimeCard = (props) => {
  console.log(props);
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

  const newMonth = month[props.data.startDate.month];

  // Above object is being used to turn integer month returned from api into a string month
  // Then saving it as variable to use for start date in card below

  return (
    <div className="animeCard">
      <div className="cardImage">
        <img src={props.data.coverImage.large} alt="anime cover" />
      </div>
      <div className="cardDetails">
        <h3 className="animeCardTitle">{props.data.title.english}</h3>
        <div>
          <h4>Start Date</h4>
          <p>{`${newMonth} ${props.data.startDate.day}, ${props.data.startDate.year}`}</p>
          <br />
          <h4>Status</h4>
          <p>{props.data.status}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
