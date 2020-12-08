import Logo from "../../components/logo/Logo.js";
import SearchIcon from "../../assets/icons/searchIcon.png";
import FilterIcon from "../../assets/icons/filterIcon.png";
import "./Search.css";

export default function Search() {
  return (
    <div>
      <header>
        <Logo />
      </header>

      <div className="searchSection">
        <div className="searchBar">
          <img src={SearchIcon} alt="search" />
          <input
            type="text"
            name="search"
            autoComplete="off"
            placeholder="Ex: One Piece"
          />
        </div>
        <div>
          <img src={FilterIcon} alt="filter" />
        </div>
      </div>
    </div>
  );
}
