import AnimeCard from "../../components/animeCard/AnimeCard.js";
import "./Section.css";

const Section = (props) => {
  return (
    <section>
      <div className="sectionHeader">
        <h2>{props.data.sectionNames}</h2>
        {/* Wrap view more with dynamic link to push to searchpage based on section user wants to view more in link */}
        <p>view more</p>
      </div>

      {/* With query we can pull 4 cards and cycle through dynamically */}
      {props.data.query.map((item) => (
        <AnimeCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Section;
