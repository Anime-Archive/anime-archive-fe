import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { fetchAnimeInfo } from "../../graphql/index.js";
import { useEffect, useState } from "react";
import { Loader } from "../../components/loader/Loader.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import CharacterButton from "../../components/characterButton/characterButton.js";
import { Footer } from "../../components/footer/Footer.js";
import "./Closerlook.css";

export default function Closerlook() {
  const [animeData, setAnimeData] = useState(null);
  const [closerlookLoading, setCloserlookLoading] = useState(false);

  let { id } = useParams();

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
          <div className="closerlookBg">
            <img src={animeData.bannerImage} alt="anime banner" />
            <div className="closerlookHeroText">
              <h3>{animeData.title.english}</h3>
            </div>
          </div>

          <BackToTop />

          {/* Top floating data card */}
          <div className="closerlookFloat">
            <div className="closerlookCover">
              <img src={animeData.coverImage.large} alt="anime cover" />
              <div className="closerlookStats">
                <h4>Format</h4>
                <p>{animeData.format}</p>
                <h4>Episodes</h4>
                <p>{animeData.episodes}</p>
                <h4>Status</h4>
                <p>{animeData.status}</p>
                <h4>Studios</h4>
                <p>{animeData.studios.nodes[0].name}</p>
              </div>
            </div>

            <div className="closerlookDetails">
              <h4>Genre</h4>
              <p>{animeData.genres.join(", ")}</p>

              <br />

              {/* Character giant button */}

              <div className="closerlookCharacterSection">
                <h4>Characters</h4>
                <Link to="/characters" className="links">
                  <p>view more</p>
                </Link>
              </div>

              <CharacterButton data={animeData.characters.nodes} />

              <br />

              <h4>Description</h4>
              <p>{animeData.description}</p>

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
