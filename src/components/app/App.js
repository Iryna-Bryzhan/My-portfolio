import React from "react";
import "./App.css";
import Menu from "../menu/menu";
import ScreenMain from "../screenMain/screenMain";
import About from "../about/about";
import Skills from "../skills/skills";
import Portfolio from "../portfolio/portfolio";
import ContactMe from "../contactMe/contactMe";
import Footer from "../footer/footer";
import "animate.css";
import Quite from "../quote/quote";
import Contact from "../contact/contact";

function App() {
  return (
    <div className="app">
      <Menu></Menu>
      <ScreenMain></ScreenMain>
      <div className="container">
        <About> </About>
      </div>
      <Skills></Skills>
      <Quite></Quite>
      <div className="container">
        <Portfolio></Portfolio>
      </div>
      {/* <ContactMe></ContactMe> */}
      <Contact></Contact>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
