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
import { fetchSection, fetchCarousel } from "../../graphql/index.js";

export default function Home() {
  // Holds data for carousel cards and will change based on filter selected in carousel
  const [carouselCardData, setCarouselCardData] = useState(null);

  // Holds data for section cards
  const [sectionCardData, setSectionCardData] = useState(null);

  // Tracks filter change and holds newly selected query sorting name
  const [queryFilter, setQueryFilter] = useState("POPULARITY_DESC");

  // Dynamic filter call to api triggered on everytime a new is selected
  useEffect(() => {
    axios
      .post("https://graphql.anilist.co", {
        query: fetchCarousel,
        variables: { filterName: queryFilter },
      })
      .then(function (response) {
        setCarouselCardData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [queryFilter]);

  // Initial data for all section cards pulled in a single call to api
  useEffect(() => {
    axios
      .post("https://graphql.anilist.co", { query: fetchSection })
      .then(function (response) {
        setSectionCardData(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {!carouselCardData || !sectionCardData ? (
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
          <Carousel
            carouselCardData={carouselCardData.data.data.Page.media}
            setQueryFilter={setQueryFilter}
          />

          {/* Our sections will be created with sectionData structure and will spit out cards with the apiData */}
          {sectionData.map((section) => (
            <Section
              key={section.id}
              data={section}
              sectionCardData={sectionCardData}
            />
          ))}
        </div>
      )}
    </>
  );
}
