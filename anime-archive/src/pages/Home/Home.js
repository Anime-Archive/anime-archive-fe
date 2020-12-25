import { Link } from "react-router-dom";
// Components
import Carousel from "../../components/carousel/Carousel.js";
import Section from "../../components/section/Section.js";
import Logo from "../../components/logo/Logo";
import { Footer } from "../../components/footer/Footer.js";
// Styling
import "./Home.css";
// Images and icons
import SearchImg from "../../assets/icons/searchIcon.png";
// Data related
import { sectionData } from "../../utils/sectionData.js";

export default function Home() {
  return (
    <>
      <div>
        <header>
          <Logo />
          {/* Wrap link/onClick to send to searchpage below */}
          <Link to="/search">
            <img src={SearchImg} alt="search icon" />
          </Link>
        </header>

        {/* Carousel component to the homepage */}
        <Carousel />

        {/* Our sections will be created with sectionData structure and will spit out cards with the apiData */}
        {sectionData.map((section) => (
          <Section key={section.id} data={section} />
        ))}
      </div>
      <Footer />
    </>
  );
}
