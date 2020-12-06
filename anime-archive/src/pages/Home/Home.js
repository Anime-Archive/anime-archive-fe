import Logo from "../../components/logo/Logo";
import Carousel from "../../components/carousel/Carousel.js";
import Section from "../../components/section/Section.js";
import { sectionData } from "../../utils/sectionData";
import SearchImg from "../../assets/icons/searchIcon.png";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <header>
        <Logo />
        {/* Wrap link or onClick to send to searchpage below */}
        <img src={SearchImg} alt="search icon" />
      </header>

      <Carousel />

      {/* Our sections will be created with sectiondata structure and will spit out cards with query used to pull data from api */}
      {sectionData.map((section) => (
        <Section key={section.id} data={section} />
      ))}
    </div>
  );
}
