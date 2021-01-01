import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// Components
import AnimeCard from "../../components/animeCard/AnimeCard.js";
import { Loader } from "../../components/loader/Loader.js";
// Styling
import "./Section.css";
// Graphql
import { fetchSection } from "../../graphql/index.js";

const Section = (props) => {
  // Holds data for section cards
  const [sectionCardData, setSectionCardData] = useState(null);

  // Loader
  const [sectionLoading, setSectionLoading] = useState(false);

  // Initial data for all section cards pulled in a single call to api
  useEffect(() => {
    setSectionLoading(true);
    axios
      .post("https://graphql.anilist.co", { query: fetchSection })
      .then(function (response) {
        setSectionCardData(response);
        setSectionLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setSectionLoading(false);
      });
  }, []);

  return (
    <section>
      <div className="sectionHeader">
        <h2>{props.data.sectionNames}</h2>
        {/* Wrap view more with dynamic link to push to searchpage based on section user wants to view more in link */}
        <Link className="links" to={`search${props.data.queryString}`}>
          <p>view more</p>
        </Link>
      </div>

      {/* With query we can pull 4 cards and cycle through dynamically */}
      {!sectionCardData || sectionLoading ? (
        <Loader />
      ) : (
        sectionCardData.data.data[props.data.extension].media.map((item) => (
          <AnimeCard key={item.id} data={item} />
        ))
      )}
    </section>
  );
};

export default Section;
