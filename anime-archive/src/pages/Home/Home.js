import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
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
import { fetchHomepage } from "../../graphql/index.js";

export default function Home() {
  const [apiData, setapiData] = useState(null);

  useEffect(() => {
    axios
      .post("https://graphql.anilist.co", { query: fetchHomepage })
      .then(function (response) {
        setapiData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!apiData ? (
        <Loader />
      ) : (
        <div>
          <header>
            <Logo />
            {/* Wrap link/onClick to send to searchpage below */}
            <Link to="/search">
              <img src={SearchImg} alt="search icon" />
            </Link>
          </header>

          {/* Carousel component to the homepage */}
          <Carousel apiData={apiData.data.data.carousel.media} />

          {/* Our sections will be created with sectionData structure and will spit out cards with the apiData */}
          {sectionData.map((section) => (
            <Section key={section.id} data={section} apiData={apiData} />
          ))}
        </div>
      )}
    </>
  );
}
