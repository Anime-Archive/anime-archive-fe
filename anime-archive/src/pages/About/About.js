import React from "react";
import Logo from "../../components/logo/Logo";
import "./About.css";
import { DevCard } from "../../components/devCard/DevCard.js";

export default function About() {
  return (
    <section id="about">
      <div className="about">
        <Logo />
        <section className="sub-section">
          <div className="anime-lovers">
            <h5 className="subheading">Anime Lovers</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deser
            </p>
          </div>
        </section>
        <section className="sub-section">
          <div className="meet-the-developers">
            <h5 className="subheading developers">Meet the Developers</h5>
            {/* Displaying cards for each developer who worked on application */}
            <DevCard />
          </div>
        </section>
      </div>
    </section>
  );
}
