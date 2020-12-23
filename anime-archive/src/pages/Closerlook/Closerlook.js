import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
// Components
import { Loader } from "../../components/loader/Loader.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import CharacterButton from "../../components/characterButton/characterButton.js";
import { Footer } from "../../components/footer/Footer.js";
import Banner from "../../components/banner/Banner.js";
// Styling
import "./Closerlook.css";
// Graphql
import { fetchAnimeInfo } from "../../graphql/index.js";

export default function Closerlook() {
  // Holds anime data once API fetch is successful
  const [animeData, setAnimeData] = useState(null);

  // Initiates loader instance
  const [closerlookLoading, setCloserlookLoading] = useState(false);

  let { id } = useParams();

  // API call to fetch a particular animes info
  useEffect(() => {
    setCloserlookLoading(true);
    axios
      .post("https://graphql.anilist.co", {
        query: fetchAnimeInfo,
        variables: { id: id },
      })
      .then(function (response) {
        setAnimeData(response.data.data.Media);
        setCloserlookLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [id]);

  return (
    <>
      {!animeData || closerlookLoading ? (
        <Loader />
      ) : (
        <div key={animeData.id}>
          {/* Title and Banner */}
          <Banner
            title={
              // Checks whether or not a title is availible to display on screen, until it hits a default title
              !animeData.title.english
                ? !animeData.title.userPreferred
                  ? "No name found in Database 😭"
                  : animeData.title.userPreferred
                : animeData.title.english
            }
            bannerImage={animeData.bannerImage}
          />

          <BackToTop />

          {/* Top floating data card */}
          <div className="closerlookFloat">
            <div className="closerlookCover">
              <img src={animeData.coverImage.large} alt="anime cover" />
              <div className="closerlookStats">
                <h4>Format</h4>
                <p>{!animeData.format ? "Unknown" : animeData.format}</p>
                <h4>Episodes</h4>
                <p>{!animeData.episodes ? "TBA" : animeData.episodes}</p>
                <h4>Status</h4>
                <p>{!animeData.status ? "Unknown" : animeData.status}</p>
                <h4>Studios</h4>
                <p>
                  {
                    // Checks whether anime has studios before accessing key
                    animeData.studios.nodes &&
                    animeData.studios.nodes.length >= 1
                      ? !animeData.studios.nodes[0].name
                        ? "Unknown"
                        : animeData.studios.nodes[0].name
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
                  animeData.genres && animeData.genres.length >= 1
                    ? animeData.genres.join(", ")
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

              <CharacterButton data={animeData.characters.nodes} />

              <br />

              <h4>Description</h4>
              <p>
                {!animeData.description
                  ? "Unfortunatley, there is no description for this anime as of yet -- stay tuned! 😃"
                  : animeData.description}
              </p>

              <br />

              <div className="trailer">
                {!animeData.trailer ? (
                  <button className="button">Trailer</button>
                ) : (
                  <a
                    href={`https://www.youtube.com/watch?v=${animeData.trailer.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="button"
                  >
                    Trailer
                  </a>
                )}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
}
