import React from "react"
import "./screenMain.css"
// import screenBg from "../../img/Rectangle 67.png"
// import MyPhoto from "../../img/photo_2022-03-29_16-05-30.jpg"

import SocialItemMain from "../socialItemMain/socialItemMain"
// import {langArr} from "../../lang"
// import MyPhoto from "../../img/IMG_20191023_185340_081.jpg"
// import SocialItem from "../socialItem/socialItem"

const ScreenMain = () => {
    return( 
        <div className="screen-main">
        <div className="container-screen-main">
            <div className="info-left">
                <h3 className="main-text" data-aos="fade-down"  data-lang-key="main-text">Hello, I am</h3>
                <h1 className="name" data-aos="fade-right" data-aos-delay="600"  data-lang-key="name">Iryna Bryzhan</h1>
                <p className="prof"  data-aos="fade-up-left" data-aos-delay="1000" data-lang-key="prof">Front-end Developer</p>
                <a href="https://drive.google.com/file/d/1VfEZAwrYO6yivymSkEGF7HoaoJEVKnVd/view" target="blank" className="myCV " data-aos="fade-up-left" data-aos-delay="1500">
                <div data-lang-key="myCV" className="myCV-text" >
                My CV
                    </div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                   
                    </a>
            </div> 
            <SocialItemMain></SocialItemMain>

            {/* <div className="info-right animate__animated animate__fadeInRight animate__delay-1s	">
                <img src={screenBg} alt="screenBg" />
                <img className="myPhoto" src={MyPhoto} alt="MyPhoto" />
            </div> */}
        </div>
        </div>
    )
}

export default ScreenMain