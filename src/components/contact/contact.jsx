import Title from "../title/title";
import Dot from "../../img/Dots.png";

import "./contact.css";

const Contact = () => {

  return (
    <div id="contact">
      <Title title="Contact me" ></Title>
      <img src={Dot} alt="Dot" className="dot3" />
      <img src={Dot} alt="Dot" className="dot4" />

      <form className="form">
        <div class="group">
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value) {
                e.target.classList.add("used");
              } else {
                e.target.classList.remove("used");
              }
            }}
          />
          <span class="bar"></span>
          <label data-lang-key="label-name">Name</label>
        </div>
        <div class="group">
          <input
            type="text"
            onChange={(e) => {
              if (e.target.value) {
                e.target.classList.add("used");
              } else {
                e.target.classList.remove("used");
              }
            }}
          />
          <span class="bar"></span>
          <label>Email</label>
        </div>
        <div class="group">
          <textarea
            onChange={(e) => {
              if (e.target.value) {
                e.target.classList.add("used");
              } else {
                e.target.classList.remove("used");
              }
            }}
          ></textarea>

          <label data-lang-key="message">Message</label>
        </div>
        <div className="button-submit">
        <a  href="/" className="button-sub" data-lang-key="button-submit" > Send Message</a>
         
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          
        
        </div>
      </form>
    </div>
  );
};

export default Contact;
