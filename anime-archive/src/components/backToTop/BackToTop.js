import UpIcon from "../../assets/icons/upIcon.png";
import "./BackToTop.css";

const BackToTop = () => {
  return (
    <div className="scrollToTop" onClick={() => window.scrollTo(0, 0)}>
      <img src={UpIcon} alt="up" />
    </div>
  );
};

export default BackToTop;
