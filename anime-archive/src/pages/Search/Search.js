import { useState } from "react";
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
// Graphql queries
import { GET_USER_SEARCH } from "../../graphql";
// Apollo Client
import { useQuery } from "@apollo/client";
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

  // API call to retrive anime data reletive to use search attributes
  const Search = () => {
    const qs = buildQueryString(filterAndSearchState);
    window.history.pushState({}, "Search", `/search${qs}`);

    const { loading, error, data, fetchMore } = useQuery(GET_USER_SEARCH, {
      variables: { ...filterAndSearchState, pageNum: 1 },
    });

    if (loading || !data) return <Loader />;
    if (error) return <Loader />;

    const results = data.Page.media;
    const { currentPage, hasNextPage } = data.Page.pageInfo;

    if (!hasNextPage) {
      setShowLoadButton(false);
    }

    return (
      <>
        {/* Dropdown Filters render when filter icon is clicked setting showFilters state to True */}
        {showFilters ? (
          <Filter
            url={url}
            filterAndSearchState={filterAndSearchState}
            setFilterAndSearchState={setFilterAndSearchState}
          />
        ) : null}

        {/* Api search results turned into anime cards here */}

        {results.map((item) => (
          <AnimeCard key={item.id} data={item} />
        ))}

        <div className="load">
          {showLoadButton ? (
            <button
              onClick={() => {
                //  Get additional anime and concatenate it with the pre existing one
                fetchMore({
                  variables: {
                    ...filterAndSearchState,
                    pageNum: currentPage + 1,
                  },

                  updateQuery: (prevResult, { fetchMoreResult }) => {
                    if (!prevResult.Page.media) {
                      return fetchMoreResult;
                    } else {
                      fetchMoreResult.Page.media = [
                        ...prevResult.Page.media,
                        ...fetchMoreResult.Page.media,
                      ];
                    }
                    return fetchMoreResult;
                  },
                });
              }}
            >
              Load More
            </button>
          ) : null}
        </div>
      </>
    );
  };

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

      <Search />
    </div>
  );
}
