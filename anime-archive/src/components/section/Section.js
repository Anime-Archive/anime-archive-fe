import AnimeCard from "../../components/animeCard/AnimeCard.js";
import "./Section.css";

const Section = (props) => {
  return (
    <section>
      <div className="sectionHeader">
        <h3>{props.data.sectionNames}</h3>
        <p>view more</p>
      </div>

      {props.data.query.map((item) => (
        <AnimeCard key={item.id} data={item} />
      ))}
    </section>
  );
};

export default Section;
