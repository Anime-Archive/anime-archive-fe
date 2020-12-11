import { Link } from "react-router-dom";
import "./Logo.css";

const Logo = () => {
  // Official Logo of Anime Archive
  // The span tag wrapping Archive is what gives the special purple color
  return (
    <h1 className="main-logo">
      <Link to="/" className="links">
        Anime <span>Archive</span>
      </Link>
    </h1>
  );
};

export default Logo;
