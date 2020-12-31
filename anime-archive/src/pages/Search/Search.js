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

  // API results
  const [animeData, setAnimeData] = useState(null);

  // User search input
  const [searchText, setSearchText] = useState("");

  const url = new URL(window.location.href);

  // Holds users filter and search state
  const [filterAndSearchState, setFilterAndSearchState] = useState({
    searchTerm: url.searchParams.get("searchTerm"),
    genre: url.searchParams.get("genre"),
    sort: url.searchParams.get("sort"),
    status: url.searchParams.get("status")
      ? url.searchParams.get("status")
      : ["RELEASING", "FINISHED", "NOT_YET_RELEASED", "CANCELLED", "HIATUS"],
  });

  console.log(filterAndSearchState);
  // Grabs user text from input field and stores in searchText above
  function searchHandler(event) {
    setSearchText(event.target.value);
  }

  // Triggers API call on true
  const [trigger, setTrigger] = useState(false);

  function searchSubmit(event) {
    event.preventDefault();
    filterAndSearchState.searchTerm = searchText.length > 0 ? searchText : null;
    const qs = buildQueryString(filterAndSearchState);
    window.history.pushState({}, "Search", `/search${qs}`);
    setTrigger(true);
  }

  // API call
  useEffect(() => {
    console.log(filterAndSearchState);
    axios
      .post("https://graphql.anilist.co", {
        query: fetchUserSearch,
        variables: filterAndSearchState,
      })
      .then(function (res) {
        setAnimeData(res.data.data.Page);
        setTrigger(false);
      })
      .catch(function (err) {
        console.log(err);
        setTrigger(false);
      });
  }, [trigger]);

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
          url={url}
          filterAndSearchState={filterAndSearchState}
          setFilterAndSearchState={setFilterAndSearchState}
        />
      ) : null}

      {/* Api search results turned into anime cards here */}
      {!animeData || trigger ? (
        <Loader />
      ) : (
        animeData.media.map((item) => <AnimeCard key={item.id} data={item} />)
      )}

      <div className="load">
        <button>Load More</button>
      </div>
    </div>
  );
}
