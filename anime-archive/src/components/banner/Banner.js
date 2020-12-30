import DefaultBanner from "../../assets/img/defaultBanner.png";
import "./Banner.css";

const Banner = (props) => {
  // Pass in an image and title for banner component
  console.log(props.bannerImage);
  return (
    <div className="bannerBg">
      <div>
        {props.bannerImage ? (
          <img src={props.bannerImage} alt="anime banner" />
        ) : (
          <img src={DefaultBanner} alt="default anime banner" />
        )}
      </div>
      <div className="bannerText">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Banner;
