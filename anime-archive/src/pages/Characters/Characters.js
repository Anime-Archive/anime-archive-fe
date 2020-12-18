import CharacterCard from "../../components/characterCard/characterCard.js";
import { characterData } from "../../utils/charactersData.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import { Footer } from "../../components/footer/Footer.js";
import "./Characters.css";

export default function Characters() {
  const data = characterData[0];
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
      <div className="charactersFloat">
        {data.characters.nodes.map((character) => (
          <CharacterCard key={character.id} data={character} />
        ))}
      </div>

      <Footer />
    </div>
  );
}
