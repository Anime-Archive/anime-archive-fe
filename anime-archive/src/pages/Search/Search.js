import { useState } from "react";
import Logo from "../../components/logo/Logo.js";
import AnimeCard from "../../components/animeCard/AnimeCard.js";
import { animeData } from "../../utils/animeData.js";
import SearchIcon from "../../assets/icons/searchIcon.png";
import FilterIcon from "../../assets/icons/filterIcon.png";
import "./Search.css";

export default function Search() {
  // User search input
  const [searchText, setSearchText] = useState("");

  // Grabs user text from input field and stores in searchText above
  function searchHandler(event) {
    setSearchText(event.target.value);
  }

  // User search text via query to api returns data result
  function searchSubmit(event) {
    event.preventDefault();
    console.log(searchText);
  }

  return (
    <div>
      <header>
        <Logo />
      </header>

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

          <img src={FilterIcon} alt="filter" />
        </div>
      </div>

      {/* Api search results turned into anime cards here */}
      {animeData.map((result) => (
        <AnimeCard key={result.id} data={result} />
      ))}

      <div className="load">
        <button>Load More</button>
      </div>
    </div>
  );
}
