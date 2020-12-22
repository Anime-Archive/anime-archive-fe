import "./Banner.css";

const Banner = (props) => {
  // Pass in an image and title for banner component
  return (
    <div className="bannerBg">
      <div>
        <img src={props.bannerImage} alt="anime banner" />
      </div>
      <div className="bannerText">
        <h3>{props.title}</h3>
      </div>
    </div>
  );
};

export default Banner;
