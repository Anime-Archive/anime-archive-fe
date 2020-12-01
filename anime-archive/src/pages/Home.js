import Logo from "../components/logo/Logo";
import Carousel from "../components/carousel/Carousel.js";
import SearchImg from "../assets/icons/searchIcon.png";
import "../App.css";

export default function Home() {
  return (
    <div>
      <header>
        <Logo />
        {/* Wrap link or onClick to send to searchpage vvvvvv */}
        <img src={SearchImg} alt="search icon" />
      </header>

      <Carousel />
    </div>
  );
}
