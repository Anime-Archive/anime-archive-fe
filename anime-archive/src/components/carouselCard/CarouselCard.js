// Styling
import "./CarouselCard.css";

const CarouselCard = (props) => {
  const data = props.data;
  var rating = data.averageScore;
  var grade;

  /* 
  Takes in a integer (show rating) and returns a grade
  to give the recommended bar proper styling
  */
  if (rating < 40) {
    grade = "F";
  } else if (rating >= 40 && rating < 70) {
    grade = "C";
  } else if (rating >= 70) {
    grade = "A";
  }

  return (
    <div className="carouselCard">
      <div className="carouselImage">
        <img src={data.coverImage.large} alt="anime cover" />
      </div>

      <h3 className="carouselCardTitle">
        {!data.title.english ? data.title.native : data.title.english}
      </h3>

      <label>
        <p>{!rating ? "No Results" : `${rating}% Recommend`}</p>

        {/* Parent div below is the container for the progress bar background in gray */}
        <div className="recommendBar ">
          {/* Inner self closing div is the dynamic bar that fills the progress bar */}

          <div
            className={`recommendFill ${grade}`}
            style={{ width: `${rating}%` }}
          />
        </div>
      </label>
    </div>
  );
};

export default CarouselCard;
