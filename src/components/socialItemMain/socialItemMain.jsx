import "./socialItemMain.css";
import inst from "../../img/instagram.svg";
import linkedin from "../../img/in.svg";
import github from "../../img/github-fill.svg";
import mail from "../../img/mail.svg";

const SocialItemMain = () => {
  return (
    <div className="socials-main">
      <div className="social-items-main">
        <a className="social-main" href="mailto:ira97brig@gmail.com">
          <img src={mail} alt="mail" />
        </a>
        <a
          className="social-main"
          href="https://github.com/Iryna-Bryzhan?tab=repositories"
          target="blank"
        >
          <img src={github} alt="github" />
        </a>
        <a
          className="social-main"
          href="https://www.linkedin.com/in/%D1%96%D1%80%D0%B8%D0%BD%D0%B0-%D0%B1%D1%80%D0%B8%D0%B6%D0%B0%D0%BD%D1%8C-bab7a3229/"
          target="blank"
        >
          <img src={linkedin} alt="linkedin" />
        </a>
        <a
          className="social-main"
          href="https://www.instagram.com/iryna_bryzhan/?igshid=NzZlODBkYWE4Ng%3D%3D"
          target="blank"
        >
          <img src={inst} alt="inst" />
        </a>
      </div>
    </div>
  );
};
export default SocialItemMain;
