// Developer images
import Erik from "../assets/img/Erik.jpeg";
import Josue from "../assets/img/Josue.jpeg";

// Icons
import portfolio from "../assets/icons/portfolio.png";
import github from "../assets/icons/github.png";
import linkedin from "../assets/icons/linkedin.png";

// Developer data structure
export const developerData = [
  {
    id: 1,
    name: "Erik Rodriguez",
    img: Erik,
    role: "Software Engineer",
    media: [
      {
        id: 1,
        name: "Portfolio",
        link: "https://erikrodriguez.me/",
        icon: portfolio,
      },
      {
        id: 2,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/erikrodriguez-webdev/",
        icon: linkedin,
      },
      {
        id: 3,
        name: "Github",
        link: "https://github.com/ErikRodriguez-webdev",
        icon: github,
      },
    ],
  },
  {
    id: 2,
    name: "Josue Rodriguez",
    img: Josue,
    role: "Software Engineer",
    media: [
      {
        id: 1,
        name: "Portfolio",
        link: "https://josuerodriguez.me/",
        icon: portfolio,
      },
      {
        id: 2,
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/maybejosue/",
        icon: linkedin,
      },
      {
        id: 3,
        name: "Github",
        link: "https://github.com/maybejosue",
        icon: github,
      },
    ],
  },
];
