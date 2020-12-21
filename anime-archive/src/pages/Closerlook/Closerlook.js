import { Link } from "react-router-dom";
import { closerlookData } from "../../utils/closerlookData";
import BackToTop from "../../components/backToTop/BackToTop.js";
import CharacterButton from "../../components/characterButton/characterButton.js";
import { Footer } from "../../components/footer/Footer.js";
import "./Closerlook.css";

export default function Closerlook() {
  const data = closerlookData[0];
  return (
    <div>
      {/* Title and Banner */}
      <div className="closerlookBg">
        <img src={data.bannerImage} alt="anime banner" />
        <div className="closerlookHeroText">
          <h3>{data.title.english}</h3>
        </div>
      </div>

      <BackToTop />

      {/* Top floating data card */}
      <div className="closerlookFloat">
        <div className="closerlookCover">
          <img src={data.coverImage.large} alt="anime cover" />
          <div className="closerlookStats">
            <h4>Format</h4>
            <p>{data.format}</p>
            <h4>Episodes</h4>
            <p>{data.episodes}</p>
            <h4>Status</h4>
            <p>{data.status}</p>
            <h4>Studios</h4>
            <p>{data.studios.nodes[0].name}</p>
          </div>
        </div>

        <div className="closerlookDetails">
          <h4>Genre</h4>
          <p>{data.genres.join(", ")}</p>

          <br />

          {/* Character giant button */}

          <div className="closerlookCharacterSection">
            <h4>Characters</h4>
            <Link to="/characters" className="links">
              <p>view more</p>
            </Link>
          </div>

          <CharacterButton data={data.characters.nodes} />

          <br />

          <h4>Description</h4>
          <p>{data.description}</p>

          <br />

          <div className="trailer">
            {data.trailer ? (
              <a
                href={`https://www.youtube.com/watch?v=${data.trailer.id}`}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                Trailer
              </a>
            ) : (
              <button className="button">Trailer</button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
