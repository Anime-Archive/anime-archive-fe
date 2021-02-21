import { Link, useParams } from "react-router-dom";
// Components
import { Loader } from "../../components/loader/Loader.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import CharacterButton from "../../components/characterButton/characterButton.js";
import { Footer } from "../../components/footer/Footer.js";
import Banner from "../../components/banner/Banner.js";
import Logo from "../../components/logo/Logo.js";
// Styling
import "./Closerlook.css";
// Graphql queries
import { GET_ANIME_INFO } from "../../graphql/index.js";
// Apollo Client
import { useQuery } from "@apollo/client";

export default function Closerlook() {
  let { id } = useParams();

  // API Call to fetch AnimeData data
  const AnimeData = () => {
    const { loading, error, data } = useQuery(GET_ANIME_INFO, {
      variables: { id: id },
    });

    if (loading) return <Loader />;
    if (error) return <Loader />;
    const anime = data.Media;

    return (
      <div key={anime.key}>
        <Banner
          title={
            // Checks whether or not a title is availible to display on screen, until it hits a default title
            !anime.title.english
              ? !anime.title.userPreferred
                ? "No name found in Database 😭"
                : anime.title.userPreferred
              : anime.title.english
          }
          bannerImage={anime.bannerImage}
        />

        <BackToTop />

        <div className="closerlookCard">
          <div className="closerlookCover">
            <img src={anime.coverImage.large} alt="anime cover" />
            <div className="closerlookStats">
              <h4>Format</h4>
              <p>{!anime.format ? "Unknown" : anime.format}</p>
              <h4>Episodes</h4>
              <p>{!anime.episodes ? "TBA" : anime.episodes}</p>
              <h4>Status</h4>
              <p>{!anime.status ? "Unknown" : anime.status}</p>
              <h4>Studios</h4>
              <p>
                {
                  // Checks whether anime has studios before accessing key
                  anime.studios.nodes && anime.studios.nodes.length >= 1
                    ? !anime.studios.nodes[0].name
                      ? "Unknown"
                      : anime.studios.nodes[0].name
                    : "Unknown"
                }
              </p>
            </div>
          </div>

          <div className="closerlookDetails">
            <h4>Genre</h4>
            <p>
              {
                // Checks whether genre has true in order to display
                anime.genres && anime.genres.length >= 1
                  ? anime.genres.join(", ")
                  : "Unknown"
              }
            </p>

            <br />

            {/* Character giant button */}

            <div className="closerlookCharacterSection">
              <h4>Characters</h4>
              <Link to={`/closerlook/${id}/characters`} className="links">
                <p>view more</p>
              </Link>
            </div>

            <CharacterButton anime={anime.characters.nodes} />

            <br />

            <h4>Description</h4>
            <p>
              {!anime.description
                ? "Unfortunatley, there is no description for this anime as of yet -- stay tuned! 😃"
                : anime.description}
            </p>

            <br />

            <div className="trailer">
              {!anime.trailer ? (
                <button className="button">Trailer</button>
              ) : (
                <a
                  href={`https://www.youtube.com/watch?v=${anime.trailer.id}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button"
                >
                  Trailer
                </a>
              )}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="closerlookHeader">
        <Logo />
      </div>

      <AnimeData />
    </>
  );
}
