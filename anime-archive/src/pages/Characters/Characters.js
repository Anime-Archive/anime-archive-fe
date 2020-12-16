import { closerlookData } from "../../utils/closerlookData";
import BackToTop from "../../components/backToTop/BackToTop.js";
import { Footer } from "../../components/footer/Footer.js";
import "./Characters.css";

export default function Characters() {
  const data = closerlookData[0];
  return (
    <div>
      {/* Refactor Title and Banner  from Closerlook and Characters */}
      <div className="charactersBg">
        <div>
          <img src={data.bannerImage} alt="anime banner" />
        </div>
        <div className="charactersHeroText">
          <h3>{data.title.english}</h3>
        </div>
      </div>

      <BackToTop />

      {/* Top floating data card */}
      <div className="charactersFloat"></div>

      <Footer />
    </div>
  );
}
