import CharacterCard from "../../components/characterCard/characterCard.js";
import { characterData } from "../../utils/charactersData.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import { Footer } from "../../components/footer/Footer.js";
import Banner from "../../components/banner/Banner.js";
import "./Characters.css";

export default function Characters() {
  const data = characterData[0];
  return (
    <div>
      {/* Title and Banner */}
      <Banner title={data.title.english} bannerImage={data.bannerImage} />

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
