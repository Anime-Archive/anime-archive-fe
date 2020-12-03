
import React from "react";
import "./About.css";
import portfolio from "../assets/icons/portfolio.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";
import { developerData } from "../utils/index.js";

export default function About() {
  return (
    <section id="about">
      <div className="about">
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
            {developerData.map((developer) => (
              <div className="card">
                <div className="card-content-conatiner">
                  <div className="developer-img-container">
                    <img className="developer-img" src={developer.img} />
                  </div>
                  <div className="content">
                    <div className="dev-info">
                      <p className="card-text">{developer.name}</p>
                      <p className="card-text">{developer.role}</p>
                    </div>
                    <div className="about-contact-info">
                      <p className="contact">Contact:</p>
                      <div className="about-icon-container">
                        <a href={developer.media.github} target="_blank">
                          <div className="icon-container">
                            <img src={portfolio} />
                          </div>
                        </a>
                        <a href={developer.media.github} target="_blank">
                          <div className="icon-container">
                            <img src={linkedin} />
                          </div>
                        </a>
                        <a href={developer.media.github} target="_blank">
                          <div className="icon-container">
                            <img src={github} />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
