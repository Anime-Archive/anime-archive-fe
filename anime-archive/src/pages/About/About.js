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
            <h2 className="subheading">Anime Lovers</h2>
            <p>
              We are fans of manga, geeks by nature, addicted to the binge and
              completely crazy about all things anime.
              <br />
              <br />
              Anime Archive is a community of anime and magna enthusiasts who
              simply would like a recommendation of a show to binge or to check
              out what’s currently trending in the Anime Archive community! We
              are here to inform, entertain, and inspire the binge through the
              content and experiences we create.
              <br />
              <br />
              The Anime Archive application is built using react on the client
              side, as per the premium anime content we supply you, its actually
              being provided by our good ole friends over at{" "}
              <span>
                <a
                  className="api-resource"
                  target="_blank"
                  href="https://anilist.co/"
                >
                  Anilist
                </a>
              </span>
              . If you or anyone you know would like to design and create an
              application using the same data available to us, head over to the{" "}
              <span>
                <a
                  className="api-resource"
                  target="_blank"
                  href="https://anilist.gitbook.io/anilist-apiv2-docs/"
                >
                  Anilist docs
                </a>
              </span>{" "}
              for more information on their API. Thanks again!
            </p>
          </div>
        </section>
        <section className="sub-section">
          <div className="meet-the-developers">
            <h2 className="subheading developers">Meet the Developers</h2>
            {/* Displaying cards for each developer who worked on application */}
            <DevCard />
          </div>
        </section>
      </div>
    </section>
  );
}
