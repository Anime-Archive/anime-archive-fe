import { useState, useEffect } from "react";
import Logo from "../../components/logo/Logo.js";
import BackToTop from "../../components/backToTop/BackToTop.js";
import SearchIcon from "../../assets/icons/searchIcon.png";
import FilterIcon from "../../assets/icons/filterIcon.png";
import "./Search.css";
import Filter from "../../components/filter/Filter.js";
import ExitIcon from "../../assets/icons/exitIcon.png";

export default function Search() {
  // Reveal filters
  const [showFilters, setShowFilters] = useState(false);

  // User search input
  const [searchText, setSearchText] = useState("");

  const [queryStringObj, setQueryStringObj] = useState({
    searchTerm: null,
    genre: null,
  });

  // Grabs user text from input field and stores in searchText above
  function searchHandler(event) {
    setSearchText(event.target.value);
  }

  // User search text via query to api returns data result
  function searchSubmit(event) {
    event.preventDefault();
    queryStringObj.searchTerm = searchText;
    const qs = buildQueryString(queryStringObj);
    window.history.pushState(
      {
        variables: queryStringObj,
      },
      "Search",
      `${qs}`
    );
  }

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
          queryStringObj={queryStringObj}
          setQueryStringObj={setQueryStringObj}
        />
      ) : null}

      {/* Api search results turned into anime cards here */}
      {/* {animeData.map((result) => (
        <AnimeCard key={result.id} data={result} />
      ))} */}

      <div className="load">
        <button>Load More</button>
      </div>
    </div>
  );
}
