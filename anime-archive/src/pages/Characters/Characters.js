import { useParams } from "react-router-dom";
// Components
import CharacterCard from "../../components/characterCard/characterCard.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import { Footer } from "../../components/footer/Footer.js";
import Banner from "../../components/banner/Banner.js";
import { Loader } from "../../components/loader/Loader.js";
import Logo from "../../components/logo/Logo.js";
// Styling
import "./Characters.css";
// Graphql queries
import { GET_CHARACTERS } from "../../graphql/index.js";
// Apollo Client
import { useQuery } from "@apollo/client";

export default function Characters() {
  // Grabs anime id from url
  const { id } = useParams();

  // API call to get characters
  const Characters = () => {
    const { loading, error, data } = useQuery(GET_CHARACTERS, {
      variables: { id: id },
    });
    if (loading) return <Loader />;
    if (error) return <Loader />;
    const characterData = data.Media;
    return (
      <>
        {/* Title and Banner */}
        <Banner
          title={characterData.title.english}
          bannerImage={characterData.bannerImage}
        />
        <BackToTop />
        {/* // Top floating data card */}
        <div className="characters">
          {characterData.characters.nodes.map((character) => (
            <CharacterCard key={character.id} data={character} />
          ))}
          <Footer />
        </div>
      </>
    );
  };

  return (
    <>
      <div className="charactersHeader">
        <Logo />
      </div>
      <Characters />
    </>
  );
}
