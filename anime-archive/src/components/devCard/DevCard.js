import React from "react";
import "./DevCard.css";

// Data structure
import { developerData } from "../../utils/index.js";

export const DevCard = () => {
  return (
    <>
      {developerData.map((developer) => (
        <div key={developer.id} className="card">
          <div className="card-content-conatiner">
            <div className="developer-img-container">
              <img className="developer-img" src={developer.img} />
            </div>
            <div className="content">
              <div className="dev-info">
                <h3 className="card-text">{developer.name}</h3>
                <h4 className="card-text">{developer.role}</h4>
              </div>
              <div className="about-contact-info">
                <h4 className="contact">Contact:</h4>
                <div className="about-icon-container">
                  {/* Displays a btn with an icon that links to respective source */}
                  {developer.media.map((source) => (
                    <a key={source.id} href={source.link} target="_blank">
                      <div className="icon-container">
                        <img src={source.icon} />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
