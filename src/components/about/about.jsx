import "./about.css";
import Title from "../title/title";
import MyPhoto from "../../img/photo_2024-02-04_22-23-58-removebg.png";

import React from "react";

const About = () => {
  return (
    <div id="about">
      <Title title="About me"></Title>
      <div className="about">
        <div className="about-text" data-lang-key="about-text-1">
          My name is Iryna, I am a Junior Front-end Developer. I completed
          courses in web development, JavaScript and React at SevenEducation
          under the guidance of a mentor and now I am studying at Hillel IT
          School for the Front-end Pro course.
        </div>
        <p className="about-title" data-lang-key="about-text-title">
          Why me?
        </p>

        <div className="about-content">
          <ul className="about-content-list">
            <li
              data-lang-key="about-text-2"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-once="true"
            >
              I have a strong interest in website development, able to provide
              responsive and aesthetic layout, according to requirements and
              standards.
            </li>
            <li
              data-lang-key="about-text-3"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-once="true"
            >
              I am organized, flexible and passionate as a developer, and my
              desire is to make websites look top notch and convert visitors
              into leads.
            </li>
            <li
              data-lang-key="about-text-4"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-once="true"
            >
              I know how to find the necessary information, I can independently
              solve problems and make decisions.
            </li>
            <li
              data-lang-key="about-text-5"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-once="true"
            >
              I give priority to constant self-improvement and professional
              development
            </li>
            <li
              data-lang-key="about-text-6"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-once="true"
            >
              I am communicative and able to work in a team.
            </li>
          </ul>

          <div
            className="about-img"
            data-aos="zoom-in"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <img className="" src={MyPhoto} alt="MyPhoto" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

// Моє ім'я Ірина, я Junior Front-end Developer. Я пройшла курси з веб-розробки в SevenEducation під керівництвом ментора та зараз навчаюсь в Hillel IT School на курсі Front-end Pro.
// Чому я?
// Маю стійкий інтерес до розробки веб-сайтів, здатна забезпечити адаптивну та естетичну верстку, відповідно до вимог та стандартів.

// Я маю організованість, гнучкість і пристрасть як інтерфейс-розробник, і моє бажання - це забезпечити вигляд веб-сайтів на вищому рівні та перетворити відвідувачів у потенційних клієнтів.
// Вмію знаходити потрібну інформацію, можу самостійно вирішувати проблеми та приймати рішення

// Надаю перевагу постійному самовдосконаленню та професійному розвитку

// Комунікабельна та вмію працювати в команді

// <div className="about-text" data-aos="zoom-in" data-aos-delay="300" data-aos-duration="800" data-aos-once="true">
//            <p data-lang-key="about-text-1"> My name is Iryna and I am a Junior Front-end Developer, I completed courses in web development, JavaScript and React at 7Education under the guidance of a mentor, and also listened to several online courses.
//             </p>
//             <p data-lang-key="about-text-2">I have no commercial work experience, but I have a strong interest in website development, able to provide responsive and aesthetic layout, according to requirements and standards.
//             </p>
//             <p data-lang-key="about-text-3">I complete tasks on time and give priority to constant self-improvement and professional development.
//             </p>
//             </div>
//             <div className="about-img" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="800" data-aos-once="true">
//                <img className="" src={MyPhoto} alt="MyPhoto"  />
//             </div>
