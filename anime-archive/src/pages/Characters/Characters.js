import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// Components
import CharacterCard from "../../components/characterCard/characterCard.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import { Footer } from "../../components/footer/Footer.js";
import Banner from "../../components/banner/Banner.js";
import { Loader } from "../../components/loader/Loader.js";
// Styling
import "./Characters.css";
// Graphql
import { fetchCharacters } from "../../graphql/index.js";

export default function Characters() {
  // Holds data for character cards
  const [charactersData, setCharactersData] = useState(null);

  // Grabs anime id from url
  const { id } = useParams();

  // Loader
  const [charactersLoading, setCharactersLoading] = useState(false);

  // Data call to api for all characters in anime
  useEffect(() => {
    setCharactersLoading(true);
    axios
      .post("https://graphql.anilist.co", {
        query: fetchCharacters,
        variables: { id: id },
      })
      .then(function (response) {
        setCharactersData(response);
        setCharactersLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setCharactersLoading(false);
      });
  }, []);

  return (
    <div>
      {/* Title and Banner */}
      {!charactersData || charactersLoading ? (
        <Loader />
      ) : (
        <Banner
          title={charactersData.data.data.Media.title.english}
          bannerImage={charactersData.data.data.Media.bannerImage}
        />
      )}

      <BackToTop />

      {/* Top floating data card */}
      <div className="charactersFloat">
        {!charactersData || charactersLoading ? (
          <Loader />
        ) : (
          charactersData.data.data.Media.characters.nodes.map((character) => (
            <CharacterCard key={character.id} data={character} />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
}
