import { useState, useEffect } from "react";
import axios from "axios";
//helper functions
import { buildQueryString } from "../../utils/index.js";
// Styling
import "./Search.css";
//icons
import SearchIcon from "../../assets/icons/searchIcon.png";
import FilterIcon from "../../assets/icons/filterIcon.png";
import "./Search.css";
import Filter from "../../components/filter/Filter.js";
import ExitIcon from "../../assets/icons/exitIcon.png";
// Graphql
import { fetchUserSearch } from "../../graphql";
// Components
import { Loader } from "../../components/loader/Loader.js";
import { AnimeCard } from "../../components/animeCard/AnimeCard.js";
import Logo from "../../components/logo/Logo.js";
import BackToTop from "../../components/backToTop/BackToTop.js";

export default function Search() {
  // Reveal filters
  const [showFilters, setShowFilters] = useState(false);

  // Reveal load more button
  const [showLoadButton, setShowLoadButton] = useState(true);

  // API results
  const [animeData, setAnimeData] = useState(null);

  // Page number default
  const [page, setPage] = useState(1);

  // Grabs next page of query results
  function moreResults() {
    setPage(page + 1);
  }

  const url = new URL(window.location.href);

  // User search input
  const [searchText, setSearchText] = useState(
    url.searchParams.get("searchTerm") ? url.searchParams.get("searchTerm") : ""
  );

  // Holds users filter and search state
  const [filterAndSearchState, setFilterAndSearchState] = useState({
    searchTerm: url.searchParams.get("searchTerm"),
    genre: url.searchParams.get("genre"),
    sort: url.searchParams.get("sort"),
    status: url.searchParams.get("status")
      ? url.searchParams.get("status")
      : ["RELEASING", "FINISHED", "NOT_YET_RELEASED", "CANCELLED", "HIATUS"],
    sMaterial: url.searchParams.get("sMaterial")
      ? url.searchParams.get("sMaterial")
      : [
          "ORIGINAL",
          "MANGA",
          "LIGHT_NOVEL",
          "VISUAL_NOVEL",
          "VIDEO_GAME",
          "OTHER",
          "NOVEL",
          "DOUJINSHI",
          "ANIME",
        ],
    streaming: url.searchParams.get("streaming"),
    format: url.searchParams.get("format")
      ? url.searchParams.get("format")
      : ["TV", "TV_SHORT", "MOVIE", "SPECIAL", "OVA", "ONA", "MUSIC"],
    year: url.searchParams.get("year"),
  });

  // Grabs user text from input field and stores in searchText above
  function searchHandler(event) {
    setSearchText(event.target.value);
  }

  // Triggers API call on true
  const [trigger, setTrigger] = useState(false);

  function searchSubmit(event) {
    event.preventDefault();
    if (searchText.length > 0) {
      filterAndSearchState.searchTerm = searchText;
      window.location.replace(
        `/search?searchTerm=${filterAndSearchState.searchTerm}`
      );
    } else {
      window.location.replace(`/search`);
    }

    setShowLoadButton(true);
  }

  // API call
  useEffect(() => {
    if (trigger) {
      const qs = buildQueryString(filterAndSearchState);
      window.history.pushState({}, "Search", `/search${qs}`);
      setTrigger(false);
    }
    axios
      .post("https://graphql.anilist.co", {
        query: fetchUserSearch,
        variables: { ...filterAndSearchState, pageNum: page },
      })
      .then((res) => {
        if (animeData === null) {
          setAnimeData(res.data.data.Page.media);
        } else if (res.data.data.Page.media.length === 0) {
          setShowLoadButton(false);
        } else {
          setAnimeData((prevAnime) => [
            ...prevAnime,
            ...res.data.data.Page.media,
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, trigger]);

  return (
    <div>
      <header>
        <Logo />
      </header>

      <BackToTop />

      <div className="searchSection">
        <div className="searchBar">
          <img src={SearchIcon} alt="search" />

          <form onSubmit={(event) => searchSubmit(event)}>
            <input
              type="text"
              name="search"
              value={searchText}
              autoComplete="off"
              onChange={(event) => searchHandler(event)}
              placeholder="Ex: One Piece"
            />
          </form>

          {/* Displays filter icon as default and when active an exit "x" is shown */}
          <div onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? (
              <img src={ExitIcon} alt="exit" />
            ) : (
              <img src={FilterIcon} alt="filters" />
            )}
          </div>
        </div>
      </div>

      {/* Dropdown Filters render when filter icon is clicked setting showFilters state to True */}
      {showFilters ? (
        <Filter
          setTrigger={setTrigger}
          setAnimeData={setAnimeData}
          url={url}
          filterAndSearchState={filterAndSearchState}
          setFilterAndSearchState={setFilterAndSearchState}
        />
      ) : null}

      {/* Api search results turned into anime cards here */}
      {!animeData ? (
        <Loader />
      ) : (
        animeData.map((item) => <AnimeCard key={item.id} data={item} />)
      )}

      <div className="load">
        {showLoadButton ? (
          <button onClick={moreResults}>Load More</button>
        ) : null}
      </div>
    </div>
  );
}
