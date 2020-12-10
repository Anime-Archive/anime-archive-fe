import Scroll from "react-scroll";
import UpIcon from "../../assets/icons/upIcon.png";
import "./BackToTop.css";

const BackToTop = () => {
  return (
    <div
      className="scrollToTop"
      onClick={() =>
        Scroll.animateScroll.scrollToTop({
          duration: 500,
          smooth: true,
        })
      }
    >
      <img src={UpIcon} alt="up" />
    </div>
  );
};

export default BackToTop;
