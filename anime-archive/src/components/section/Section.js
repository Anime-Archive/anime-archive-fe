import { Link } from "react-router-dom";
// Components
import AnimeCard from "../../components/animeCard/AnimeCard.js";
import { Loader } from "../../components/loader/Loader.js";
// Styling
import "./Section.css";
// Graphql queries
import { GET_SECTION } from "../../graphql/index.js";
// Apollo client
import { useQuery } from "@apollo/client";

const Section = (props) => {
  // API Call to fetch Section data
  const Section = () => {
    const { loading, error, data } = useQuery(GET_SECTION);

    if (loading) return <Loader />;
    if (error) return <Loader />;

    return data[props.data.extension].media.map((item) => (
      <AnimeCard key={item.id} data={item} />
    ));
  };

  return (
    <section>
      <div className="sectionHeader">
        <h2>{props.data.sectionNames}</h2>
        {/* Wrap view more with dynamic link to push to searchpage based on section user wants to view more in link */}
        <Link className="links" to={`search${props.data.queryString}`}>
          <p>view more</p>
        </Link>
      </div>

      <Section />
    </section>
  );
};

export default Section;
