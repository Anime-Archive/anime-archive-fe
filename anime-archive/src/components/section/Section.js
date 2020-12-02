import AnimeCard from "../../components/animeCard/AnimeCard.js";
import "./Section.css";

const Section = () => {
  return (
    <section>
      <div className="sectionHeader">
        <h4>Title</h4>
        <p>view more</p>
      </div>

      <AnimeCard />
    </section>
  );
};

export default Section;
