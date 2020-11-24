import Logo from "../components/logo/Logo";
import SearchImg from "../assets/icons/searchIcon.png";
import "../App.css";

export default function Home() {
  return (
    <div>
      <div>
        <Logo />
        {/* Wrap link or onClick to send to searchpage vvvvvv */}
        <img src={SearchImg} alt="search icon" />
      </div>
    </div>
  );
}
