import "./about.css"
import Title from '../title/title';
import MyPhoto from "../../img/photo_2024-02-04_22-23-58-removebg.png"

import React from 'react';

const About = () => {

  return (
        <div id="about" >
            <Title title="About me"></Title>
            <div className="about-content">
            <div className="about-text" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" data-aos-once="true">
           <p data-lang-key="about-text-1"> My name is Iryna and I am a Junior Front-end Developer, I completed courses in web development, JavaScript and React at 7Education under the guidance of a mentor, and also listened to several online courses.
            </p> 
            <p data-lang-key="about-text-2">I have no commercial work experience, but I have a strong interest in website development, able to provide responsive and aesthetic layout, according to requirements and standards.
            </p> 
            <p data-lang-key="about-text-3">I complete tasks on time and give priority to constant self-improvement and professional development.
            </p>
            </div>
            <div className="about-img" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" data-aos-once="true">
               <img className="" src={MyPhoto} alt="MyPhoto"  />
            </div>
            </div>
        </div>
    )
}
export default About