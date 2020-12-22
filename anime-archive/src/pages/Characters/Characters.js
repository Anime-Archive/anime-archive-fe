import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { characterData } from "../../utils/charactersData.js";
// Components
import CharacterCard from "../../components/characterCard/characterCard.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import { Footer } from "../../components/footer/Footer.js";
import Banner from "../../components/banner/Banner.js";
// Styling
import "./Characters.css";

export default function Characters() {
  const data = characterData[0];

  // Holds data for character cards
  const [charactersData, setCharactersData] = useState(null);

  // Grabs anime id from url
  const { id } = useParams();

  // Data call to api for all characters in anime
  useEffect(() => {
    console.log(id);
  }, []);

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
