import { Link } from "react-router-dom";
import Logo from "../../components/logo/Logo";
import Carousel from "../../components/carousel/Carousel.js";
import Section from "../../components/section/Section.js";
import SearchImg from "../../assets/icons/searchIcon.png";
import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Loader } from "../../components/loader/Loader.js";

export default function Home() {
  // const dataStructure = {
  //   POPULAR: "POPULAR_DESC",
  //   TRENDING: "TRENDING_DESC",
  //   SCORE: "SCORE_DESC",
  //   FAVOURITES: "FAVOURITES_DESC",
  // };

  const sort = "TRENDING_DESC";

  const homepage = `{
    Page(page: 1, perPage: 5) {
      carousel: media(type: ANIME, sort: ${sort}){
        id
        coverImage{
          medium
        }
        title{
          english
        }
        averageScore
      }
      upcoming: media(type: ANIME, sort: TRENDING_DESC, status: NOT_YET_RELEASED) {
        id
        coverImage{
          medium
        }
        title {
          native
          english
        }
        startDate {
          year
          month
          day
        }
        status
      }
      airing: media(type: ANIME, sort: TRENDING_DESC, status: RELEASING) {
        id
        coverImage{
          medium
        }
        title {
          native
          english
        }
        startDate {
          year
          month
          day
        }
        status
      }
    
    }

  }
  `;

  const [homeData, setHomeData] = useState(null);

  useEffect(async () => {
    await axios
      .post("https://graphql.anilist.co", { query: homepage })
      .then(function (response) {
        setHomeData(response.data.data.Page);
      })
      .catch(function (error) {
        console.log(
          `Error ${error.status} in fetching homepage, ${error.statusText}`
        );
      });
  }, []);

  console.log(homeData.upcoming);
  return (
    <>
      {!homeData ? (
        <Loader />
      ) : (
        <div>
          <header>
            <Logo />
            {/* Wrap link or onClick to send to searchpage below */}
            <Link to="/search">
              <img src={SearchImg} alt="search icon" />
            </Link>
          </header>

          <Carousel />
          {/* Our sections will be created with sectiondata structure and will spit out cards with query used to pull data from api */}
          {/* {homeData.upcoming.map((section) => (
            <Section key={section.id} data={section} homeData={homeData} />
          ))} */}
        </div>
      )}
    </>
  );
}
