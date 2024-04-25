import React, { useEffect } from "react";
import "./menu.css";
import "../../index";
// import {langArr} from "../../lang"
import { currentLang } from "../../code/main";
import { useLang } from "../../code/main";

function myFunction() {
  let menuBurger = document.querySelector(".menu-burger");
  let containerBurger = document.querySelector(".container-burger");

  if (containerBurger.classList.contains("change")) {
    containerBurger.classList.remove("change");
    menuBurger.style.display = "none"; // Приховуємо меню при видаленні класу .change
  } else {
    containerBurger.classList.add("change");
    menuBurger.style.display = "block"; // Показуємо меню при додаванні класу .change
  }
}

const Menu = () => {
  const { lang, changeLanguage } = useLang();

  useEffect(() => {
    const savedLang = localStorage.getItem("selectedLang");
    if (savedLang) {
      changeLanguage(savedLang); // Установка сохраненного языка при первом рендере компонента
    } else {
      changeLanguage(currentLang); // Если нет сохраненного языка, установите текущий язык
    }
  }, []); // Пустой массив зависимостей означает, что эффект будет вызван только при монтировании компонента

  const handleLanguageChange = (newLang) => {
    changeLanguage(newLang);
    localStorage.setItem("selectedLang", newLang); // Сохраняем выбранный язык в localStorage
  };

  const handleMenuClick = () => {
    myFunction(); // Викликаємо функцію для зміни класу при кліку на пункт меню
  };

  const handleScroll = () => {
    const header = document.querySelector(".menu");
    if (window.scrollY > 0) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", handleScroll);

  return (
    <>
      <div className="menu">
        {/* Добавляем атрибут data-lang-key для всех текстов, которые нужно перевести */}
        <a href="/" className="logo" data-lang-key="name">
          Iryna Bryzhan
        </a>
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
          <div className="contactMe">
            <a href="#contact" data-lang-key="contact">
              CONTACT ME
            </a>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <button
            className={`change-lang ${lang === "ua" ? "active" : ""}`}
            onClick={() => handleLanguageChange("ua")}
          >
            UA
          </button>
          <button
            className={`change-lang ${lang === "en" ? "active" : ""}`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>{" "}
        </div>
        <div class="container-burger" onClick={myFunction}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
      </div>

      {/* Добавляем атрибут data-lang-key для всех текстов в меню-бургере */}
      <div className="menu-burger">
        <div className="menu-burger-item">
          <a href="#about" onClick={handleMenuClick} data-lang-key="about">
            About me
          </a>
          <a href="#skills" onClick={handleMenuClick} data-lang-key="skills">
            Skills
          </a>
          <a
            href="#portfolio"
            onClick={handleMenuClick}
            data-lang-key="portfolio"
          >
            Portfolio
          </a>
          <div className="contactMe">
            <a
              href="#contact"
              data-lang-key="contact"
              onClick={handleMenuClick}
            >
              CONTACT ME
            </a>
          </div>
          <button
            className={`change-lang ${lang === "ua" ? "active" : ""}`}
            onClick={() => handleLanguageChange("ua")}
          >
            UA
          </button>
          <button
            className={`change-lang ${lang === "en" ? "active" : ""}`}
            onClick={() => handleLanguageChange("en")}
          >
            EN
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
