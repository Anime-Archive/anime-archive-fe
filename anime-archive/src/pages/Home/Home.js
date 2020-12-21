import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// Components
import Carousel from "../../components/carousel/Carousel.js";
import Section from "../../components/section/Section.js";
import Logo from "../../components/logo/Logo";
import { Loader } from "../../components/loader/Loader.js";
// Styling
import "./Home.css";
// Images and icons
import SearchImg from "../../assets/icons/searchIcon.png";
// Data related
import { sectionData } from "../../utils/sectionData.js";
// Graphql
import { fetchSection } from "../../graphql/index.js";

export default function Home() {
  // Holds data for section cards
  const [sectionCardData, setSectionCardData] = useState(null);

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
        {!sectionCardData ? (
          <Loader />
        ) : (
          sectionData.map((section) => (
            <Section
              key={section.id}
              data={section}
              sectionCardData={sectionCardData}
            />
          ))
        )}
      </div>
    </>
  );
}
