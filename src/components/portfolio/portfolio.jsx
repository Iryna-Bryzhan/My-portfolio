import Title from "../title/title"
import "./portfolio.css"

import iconsLink from "../../img/akar-icons_link-chain.png"
import iconsGithub from "../../img/akar-icons_github-fill.png"
import card1 from "../../img/Screenshot_24.png"
import card2 from "../../img/Screenshot_1.png"
import card3 from "../../img/Screenshot_2.png"
import card4 from "../../img/Screenshot_4.png"
import card5 from "../../img/Screenshot_5.png"
import card6 from "../../img/Screenshot_psy.png"
import card7 from "../../img/My_portfolio.png"
import { useState } from "react"



const Portfolio = () => {
    
    const initialDisplayedCards = 3;
    const [displayedCards, setDisplayedCards] = useState(initialDisplayedCards);
    
    // Array of card data
    const cardsData = [
        {
          image: card1,
          title: "Landing page for NRG.SPACE",
          description: "Page development, deployment on hosting, setting up forms",
          stack: "Tech stack: HTML, CSS, JavaScript",
          links: [
            { url: "https://nrgspace.com.ua/", text: "Live Preview", img: iconsLink, langKey: "preview" },
            { url: "https://github.com/Iryna-Bryzhan/NRG.space", text: "View Code", img: iconsGithub, langKey: "view" }
          ],
          langKey: {
            description: "card-title-text",
          }
        },
        {
          image: card2,
          title: "Landing page for NEXT-ENERGY",
          description: "Making changes to the website, adding sections, setting up forms",
          stack: "Tech stack: HTML, CSS, JavaScript",
          links: [
            { url: "https://www.next-energy.pro/", text: "Live Preview" , img: iconsLink, langKey: "preview" },
            { url: "https://github.com/Iryna-Bryzhan/Iryna-Bryzhan.next-energy.github.io", text: "View Code", img: iconsGithub, langKey: "view" }
        ],
        langKey: {
          description: "card-title-text-2",
        }
        },
        {
          image: card6,
          title: "Landing page for a psychologist",
          description: "Page development, deployment on hosting, setting up forms",
          stack: "Tech stack: HTML, CSS, JavaScript",
          links: [
            { url: "https://iryna-bryzhan.github.io/psychologist-Bryzhan-Tetiana/", text: "Live Preview", img: iconsLink, langKey: "preview" },
            { url: "https://github.com/Iryna-Bryzhan/psychologist-Bryzhan-Tetiana", text: "View Code" , img: iconsGithub, langKey: "view" }
        ],
        langKey: {
          description: "card-title-text",
        }
        },
    {
      image: card7,
      title: "My portfolio",
      description: "Page development, deployment on hosting, setting up forms",
      stack: "Tech stack: HTML, CSS, JavaScript, React",
      links: [
        { url: "https://my-portfolio-swart-one-44.vercel.app/en", text: "Live Preview", img: iconsLink, langKey: "preview" },
        { url: "https://github.com/Iryna-Bryzhan/My-portfolio" , text: "View Code" , img: iconsGithub, langKey: "view" }
    ],
    langKey: {
      description: "card-title-text",
    }
    },
        {
          image: card3,
          title: "Pet-project To Do List",
          description: "Implementation of To Do List on the React framework",
          stack: "Tech stack: HTML, CSS, JavaScript, React",
          links: [
            { url: "https://to-do-list-srcw.vercel.app/", text: "Live Preview",  img: iconsLink, langKey: "preview"  },
            { url: "https://github.com/Iryna-Bryzhan/ToDo-List/tree/master", text: "View Code"  , img: iconsGithub, langKey: "view" }
        ],
        langKey: {
          description: "card-title-text-3",
        }
        },
        {
          image: card4,
          title: "Pet-project Portfolio",
          description: "Implementation of adaptive layout",
          stack: "Tech stack: HTML, CSS",
          links: [
            { url: "https://iryna-bryzhan.github.io/Pet-project-Portfolio/", text: "Live Preview",  img: iconsLink, langKey: "preview"  },
            { url: "https://github.com/Iryna-Bryzhan/Pet-project-Portfolio", text: "View Code"  , img: iconsGithub, langKey: "view" }
        ],
        langKey: {
          description: "card-title-text-4",
        }
        },
        {
          image: card5,
          title: "Conversions of simplified syntax",
          description: "Implementation of the pet-project according to the technical specifications",
          stack: "Tech stack: HTML, CSS, JavaScript",
          links: [
            { url: "https://iryna-bryzhan.github.io/Conversions-of-simplified-syntax/", text: "Live Preview",  img: iconsLink, langKey: "preview"  },
            { url: "https://github.com/Iryna-Bryzhan/Conversions-of-simplified-syntax", text: "View Code"  , img: iconsGithub, langKey: "view" }
        ],
        langKey: {
          description: "card-title-text-5",
        }
        }
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
            <div key={index} className="card"  data-aos="zoom-in" data-aos-delay="500">
              <div className="card__image-holder">
                <img className="card__image" src={card.image} alt="wave" />
              </div>
              <div className="card-info">
              <div className="card-title">
  <h2>{card.title}</h2>
  <p className="card-title-descr" data-lang-key={card.langKey.description}>{card.description}</p>
  <p className="card-title-stack"><strong>{card.stack}</strong></p>
</div>
<div className="card-links">
  {card.links.map((link, linkIndex) => (

<a key={linkIndex} className="card-link-item" href={link.url} target="blank" >
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
            <button className="button-submit seeMore" onClick={handleSeeMoreClick}>
              <div className="button-sub" data-lang-key="button-see-more">
                See more
              </div>
              <span></span>
         <span></span>
         <span></span>
        <span></span>
          
            </button>
          </div>


        )}
      </div>
    );
  };
  
  export default Portfolio;





// const Portfolio = () => {

    
//     return(
//         <div id="portfolio">
//             <Title title="Portfolio" ></Title>

//             <div class="cards">

//   <div class="card">
//     <div class="card__image-holder">
//       <img class="card__image" src={card1} alt="wave" />
//     </div>
//     <div className="card-info">
//         <div class="card-title">
//             <h2>Landing page for NRG.space</h2>
//             <p class="card-title-descr" data-lang-key="card-title-text">Page development, deployment on hosting, setting up forms</p>
//             <p class="card-title-stack"><strong>Tech stack:</strong> HTML, CSS, JavaScript</p>
//         </div>
//         <div class="card-links">
//             <a className="card-link-item" href="https://nrgspace.com.ua/" target="blank">
//                 <img src={iconsLink} alt="link-chain" />
//                 <p data-lang-key="preview">Live Preview</p>
//             </a>
//             <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/NRG.space" target="blank">
//                 <img src={iconsGithub} alt="github-fill" />
//                 <p data-lang-key="view">View Code</p>
//             </a>
//         </div>
//     </div>  
//   </div>

//   <div class="card">
//     <div class="card__image-holder">
//       <img class="card__image" src={card2} alt="wave" />
//     </div>
//     <div className="card-info">
//         <div class="card-title">
//             <h2>Landing page for NEXT-ENERGY</h2>
//             <p class="card-title-descr" data-lang-key="card-title-text-2">Making changes to the website, adding sections, setting up forms</p>
//             <p class="card-title-stack"><strong>Tech stack:</strong> HTML, CSS, JavaScript</p>
//         </div>
//         <div class="card-links">
//             <a className="card-link-item" href="https://www.next-energy.pro/" target="blank">
//                 <img src={iconsLink} alt="link-chain" />
//                 <p data-lang-key="preview">Live Preview</p>
//             </a>
//             <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/Iryna-Bryzhan.next-energy.github.io" target="blank">
//                 <img src={iconsGithub} alt="github-fill" />
//                 <p data-lang-key="view">View Code</p>
//             </a>
//         </div>
//     </div>  
//   </div>

//   <div class="card">
//     <div class="card__image-holder">
//       <img class="card__image" src={card6} alt="wave" />
//     </div>
//     <div className="card-info">
//         <div class="card-title">
//             <h2>Landing page for a psychologist</h2>
//             <p class="card-title-descr" data-lang-key="card-title-text">Page development, deployment on hosting, setting up forms</p>
//             <p class="card-title-stack"><strong>Tech stack:</strong> HTML, CSS, JavaScript</p>
//         </div>
//         <div class="card-links">
//             <a className="card-link-item" href="https://iryna-bryzhan.github.io/psychologist-Bryzhan-Tetiana/" target="blank">
//                 <img src={iconsLink} alt="link-chain" />
//                 <p data-lang-key="preview">Live Preview</p>
//             </a>
//             <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/psychologist-Bryzhan-Tetiana" target="blank">
//                 <img src={iconsGithub} alt="github-fill" />
//                 <p data-lang-key="view">View Code</p>
//             </a>
//         </div>
//     </div>  
//   </div>

//   <div class="card">
//     <div class="card__image-holder">
//       <img class="card__image" src={card3} alt="wave" />
//     </div>
//     <div className="card-info">
//         <div class="card-title">
//             <h2>Pet-project To Do List</h2>
//             <p class="card-title-descr" data-lang-key="card-title-text-3">Implementation of To Do List on the React framework</p>
//             <p class="card-title-stack"><strong>Tech stack:</strong> HTML, CSS, JavaScript, React</p>
//         </div>
//         <div class="card-links"> 
//             <a className="card-link-item" href="https://to-do-list-srcw.vercel.app/" target="blank">
//                 <img src={iconsLink} alt="link-chain" />
//                 <p data-lang-key="preview">Live Preview</p>
//             </a>
//             <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/ToDo-List/tree/master" target="blank">
//                 <img src={iconsGithub} alt="github-fill" />
//                 <p data-lang-key="view">View Code</p>
//             </a>
//         </div>
//     </div>  
//   </div>



//   <div class="card">
//     <div class="card__image-holder">
//       <img class="card__image" src={card4} alt="wave" />
//     </div>
//     <div className="card-info">
//         <div class="card-title">
//             <h2>Pet-project Portfolio</h2>
//             <p class="card-title-descr" data-lang-key="card-title-text-4">Implementation of adaptive layout</p> 
//             <p class="card-title-stack"><strong>Tech stack:</strong> HTML, CSS</p>
//         </div>
//         <div class="card-links">
//             <a className="card-link-item" href="https://iryna-bryzhan.github.io/Pet-project-Portfolio/" target="blank">
//                 <img src={iconsLink} alt="link-chain" />
//                 <p data-lang-key="preview">Live Preview</p>
//             </a>
//             <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/Pet-project-Portfolio" target="blank">
//                 <img src={iconsGithub} alt="github-fill" />
//                 <p data-lang-key="view">View Code</p>
//             </a>
//         </div>
//     </div>  
//   </div>

//   <div class="card">
//     <div class="card__image-holder">
//       <img class="card__image" src={card5} alt="wave" />
//     </div>
//     <div className="card-info">
//         <div class="card-title">
//             <h2>Conversions of simplified syntax</h2>
//             <p class="card-title-descr" data-lang-key="card-title-text-5">Implementation of the pet-project according to the technical specifications</p>
//             <p class="card-title-stack"><strong>Tech stack:</strong> HTML, CSS, JavaScript</p>
//         </div>
//         <div class="card-links">
//             <a className="card-link-item" href="https://iryna-bryzhan.github.io/Conversions-of-simplified-syntax/" target="blank">
//                 <img src={iconsLink} alt="link-chain" />
//                 <p data-lang-key="preview">Live Preview</p>
//             </a>
//             <a className="card-link-item" href="https://github.com/Iryna-Bryzhan/Conversions-of-simplified-syntax" target="blank">
//                 <img src={iconsGithub} alt="github-fill" />
//                 <p data-lang-key="view">View Code</p>
//             </a>
//         </div>
//     </div>  
//   </div>

// </div>

// <div className="button-seeMore">
// <a href="/" className="button-submit seeMore">
//         <div className="button-sub" data-lang-key="button-see-more" >See more</div>
         
//           <span></span>
//           <span></span>
//           <span></span>
//           <span></span>
          
        
//         </a>

//         </div>
//         </div> 
//     )
// }
// export default Portfolio