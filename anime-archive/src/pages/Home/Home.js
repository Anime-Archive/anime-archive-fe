import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Carousel from "../../components/carousel/Carousel.js";
import Section from "../../components/section/Section.js";
import SearchImg from "../../assets/icons/searchIcon.png";
import "./Home.css";
import axios from "axios";
import { sectionData } from "../../utils/sectionData.js";
import { useState, useEffect } from "react";
import { Loader } from "../../components/loader/Loader.js";
import { fetchHomepage } from "../../graphql/index.js";

export default function Home() {
  const [apiData, setapiData] = useState(null);

  useEffect(async () => {
    await axios
      .post("https://graphql.anilist.co", { query: fetchHomepage })
      .then(function (response) {
        setapiData(response);
      })
      .catch(function (error) {
        console.log(`Error ${error} in fetching homepage, ${error.statusText}`);
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

          <Carousel apiData={apiData.data.data.carousel.media} />
          {/* Our sections will be created with sectiondata structure and will spit out cards with query used to pull data from api */}
          {sectionData.map((section) => (
            <Section key={section.id} data={section} apiData={apiData} />
          ))}
        </div>
      )}
    </>
  );
}
