import "./footer.css";
import SocialItem from "../socialItem/socialItem";
import { useLang } from "../../code/main";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <a href="/" className="logo" data-lang-key="name">
          Iryna Bryzhan
        </a>
      </div>

      <div className="menu-list">
        <a href="#about" data-lang-key="about">
          About me
        </a>
        <a href="#skills" data-lang-key="skills">
          Skills
        </a>
        <a href="#portfolio" data-lang-key="portfolio">
          Portfolio
        </a>
      </div>
    </footer>
  );
};
export default Footer;
