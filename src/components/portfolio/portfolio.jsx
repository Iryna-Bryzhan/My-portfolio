import Title from "../title/title";
import "./portfolio.css";

import iconsLink from "../../img/akar-icons_link-chain.png";
import iconsGithub from "../../img/akar-icons_github-fill.png";
import card1 from "../../img/Screenshot_24.png";
import card2 from "../../img/Screenshot_1.png";
import card3 from "../../img/Screenshot_2.png";
import card4 from "../../img/Screenshot_4.png";
import card5 from "../../img/Screenshot_5.png";
import card6 from "../../img/Screenshot_psy.png";
import card7 from "../../img/My_portfolio.png";
import card8 from "../../img/rick-and_Morty.png";
import card9 from "../../img/monodata.png";
import { useState } from "react";

const Portfolio = () => {
  const initialDisplayedCards = 6;
  const [displayedCards, setDisplayedCards] = useState(initialDisplayedCards);

  // Array of card data
  const cardsData = [
    {
      image: card1,
      title: "Landing page for NRG.SPACE",
      description: "Page development, deployment on hosting, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript",
      links: [
        {
          url: "https://nrgspace.com.ua/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/NRG.space",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text",
      },
    },
    {
      image: card2,
      title: "Landing page for NEXT-ENERGY",
      description:
        "Making changes to the website, adding sections, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript",
      links: [
        {
          url: "https://www.next-energy.pro/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/Iryna-Bryzhan.next-energy.github.io",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-2",
      },
    },
    {
      image: card6,
      title: "Landing page for a psychologist",
      description: "Creating a design, developing a page, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript, WOW.js library",
      links: [
        {
          url: "https://iryna-bryzhan.github.io/psychologist-Bryzhan-Tetiana/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/psychologist-Bryzhan-Tetiana",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-7",
      },
    },
    {
      image: card7,
      title: "My portfolio",
      description: "Page development, deployment on hosting, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript, React, AOS.js library",
      links: [
        {
          url: "https://my-portfolio-swart-one-44.vercel.app/en",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/My-portfolio",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-7",
      },
    },
    {
      image: card9,
      title: "Landing page for Monodata",
      description: "Page development, deployment on hosting, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript, jQuery, AOS.js library",
      links: [
        {
          url: "hhttp://monodata.online/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/monodata",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-7",
      },
    },
    {
      image: card3,
      title: "Pet-project To Do List",
      description: "Implementation of To Do List on the React framework",
      stack: "Tech stack: HTML, CSS, JavaScript, React",
      links: [
        {
          url: "https://to-do-list-srcw.vercel.app/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/ToDo-List/tree/master",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-3",
      },
    },
    {
      image: card8,
      title: "Pet-project Rick and Morty",
      description: "Working with the API, receiving and displaying data",
      stack: "Tech stack: HTML, CSS, JavaScript, React",
      links: [
        {
          url: "https://homework-react-rick-and-morty-edpz.vercel.app/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/homework_react_rick_and_morty",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-6",
      },
    },
    {
      image: card4,
      title: "Pet-project Portfolio",
      description: "Implementation of adaptive layout",
      stack: "Tech stack: HTML, CSS",
      links: [
        {
          url: "https://iryna-bryzhan.github.io/Pet-project-Portfolio/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/Pet-project-Portfolio",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-4",
      },
    },
    {
      image: card5,
      title: "Conversions of simplified syntax",
      description:
        "Implementation of the pet-project according to the technical specifications",
      stack: "Tech stack: HTML, CSS, JavaScript",
      links: [
        {
          url: "https://iryna-bryzhan.github.io/Conversions-of-simplified-syntax/",
          text: "Live Preview",
          img: iconsLink,
          langKey: "preview",
        },
        {
          url: "https://github.com/Iryna-Bryzhan/Conversions-of-simplified-syntax",
          text: "View Code",
          img: iconsGithub,
          langKey: "view",
        },
      ],
      langKey: {
        description: "card-title-text-5",
      },
    },
  ];

  const handleSeeMoreClick = () => {
    // Increase the number of displayed cards when "See more" is clicked
    setDisplayedCards(displayedCards + 3);
  };

  return (
    <div id="portfolio">
      <Title title="Portfolio"></Title>

      <div className="cards">
        {cardsData.slice(0, displayedCards).map((card, index) => (
          <div
            key={index}
            className="card"
            data-aos="zoom-in"
            data-aos-delay="500"
            data-aos-duration="800"
            data-aos-once="true"
          >
            <div className="card__image-holder">
              <img className="card__image" src={card.image} alt="wave" />
            </div>
            <div className="card-info">
              <div className="card-title">
                <h2>{card.title}</h2>
                <p
                  className="card-title-descr"
                  data-lang-key={card.langKey.description}
                >
                  {card.description}
                </p>
                <p className="card-title-stack">
                  <strong>{card.stack}</strong>
                </p>
              </div>
              <div className="card-links">
                {card.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    className="card-link-item"
                    href={link.url}
                    target="blank"
                  >
                    <img src={link.img} alt="link-chain" />
                    <p data-lang-key={link.langKey}>{link.text}</p>
                  </a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {displayedCards < cardsData.length && (
        <div className="button-seeMore">
          <button
            className="button-submit seeMore"
            onClick={handleSeeMoreClick}
          >
            <div className="button-sub" data-lang-key="button-see-more">
              See more
            </div>
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
