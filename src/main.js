import "./index.css";
import { langArr } from "./lang";
import { useState, useEffect } from "react";
import AOS from "aos";

document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll(".menu-list a");

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", smoothScroll);
  }
});
function smoothScroll(event) {
  event.preventDefault();
  var targetId = this.getAttribute("href");
  var targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ scrollBehavior: "smooth" });
}

const useLang = () => {
  const [lang, setLang] = useState(getDefaultLanguage());

  const changeLanguage = (newLang) => {
    setLang(newLang);
  };

  useEffect(() => {
    document.querySelectorAll("[data-lang-key]").forEach((element) => {
      const key = element.getAttribute("data-lang-key");
      element.textContent = langArr[key][lang];
    });

    window.history.pushState(null, null, `/${lang}`);
  }, [lang]);

  return { lang, changeLanguage };
};

let currentLang = getDefaultLanguage();

function getDefaultLanguage() {
  let lang = localStorage.getItem("lang");
  if (!lang) {
    localStorage.setItem("lang", "en"); // Устанавливаем язык по умолчанию при первом открытии страницы
    lang = "en";
  }
  return lang;
}

const changeLanguage = (lang) => {
  currentLang = lang;
  localStorage.setItem("lang", lang); // Сохраняем выбранный язык в localStorage

  document.querySelectorAll("[data-lang-key]").forEach((element) => {
    const key = element.getAttribute("data-lang-key");
    element.textContent = langArr[key][lang];
  });

  // Здесь можно добавить логику для обновления URL с новым языком
  window.history.pushState(null, null, `/${lang}`);
};

export { currentLang, changeLanguage, useLang, langArr };

AOS.init();
