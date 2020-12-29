import { Link } from "react-router-dom";
// Styling
import "./AnimeCard.css";

export const AnimeCard = (props) => {
  const data = props.data;
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

  const newMonth = month[data.startDate.month];

  // Above object is being used to turn integer month returned from api into a string month
  // Then saving it as variable to use for start date in card below
  return (
    <Link className="links" to={`closerlook/${props.data.id}`}>
      <div className="animeCard">
        <div className="cardImage">
          <img src={data.coverImage.large} alt="anime cover" />
        </div>
        <div className="cardDetails">
          <h3 className="animeCardTitle">
            {/* if there is no english title, display userPreferred */}
            {!data.title.english
              ? data.title.userPreferred
              : data.title.english}
          </h3>
          <div>
            <h4>Start Date</h4>
            {/* if there is no start month or day: give us the year, else: give us everything */}
            <p>
              {!data.startDate.day || !newMonth
                ? data.startDate.year
                : `${newMonth} ${data.startDate.day}, ${data.startDate.year}`}
            </p>
            <br />
            <h4>Status</h4>
            <p>{!data.status ? "Unknown" : data.status}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AnimeCard;
