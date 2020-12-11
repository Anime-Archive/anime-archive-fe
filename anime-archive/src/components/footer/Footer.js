import "./Footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <section className="footer">
      <Link to="/about" className="links">
        <h2>About Us</h2>
      </Link>
    </section>
  );
};
