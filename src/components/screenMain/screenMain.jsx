import React from "react"
import "./screenMain.css"
import screenBg from "../../img/Rectangle 67.png"
// import MyPhoto from "../../img/photo_2022-03-29_16-05-30.jpg"
import MyPhoto from "../../img/IMG_20191023_185340_081.jpg"
import SocialItem from "../socialItem/socialItem"
import SocialItemMain from "../socialItemMain/socialItemMain"
import {langArr} from "../../lang"

const ScreenMain = () => {
    return( 
        <div className="screen-main">
        <div className="container-screen-main">
            <div className="info-left">
                <h3 className="main-text  animate__animated animate__fadeInDownBig " data-lang-key="main-text">Hello, I am</h3>
                <h1 className="name animate__animated animate__bounceInLeft animate__delay-1s"  data-lang-key="name">Iryna Bryzhan</h1>
                <p className="prof animate__animated animate__fadeInRight animate__delay-2s" data-lang-key="prof">Front-end Developer</p>
                <div className="myCV animate__animated animate__fadeIn animate__delay-3s">
                <a  data-lang-key="myCV" href="https://drive.google.com/file/d/1ef-xhQS7kkBqTjJabnFYJfyR2ra1Si23/view" target="blank">
                My CV
                    </a>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                   
                    </div>
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