import "./footer.css";
import SocialItem from "../socialItem/socialItem";

const Footer = () => {
  return (
    <footer id="footer">
      <div>
        <a href="/" className="logo" data-lang-key="name">
          Iryna Bryzhan
        </a>
      </div>
      <SocialItem></SocialItem>
    </footer>
  );
};
export default Footer;
