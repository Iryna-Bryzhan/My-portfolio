import React, { useState } from "react";
import Title from "../title/title";
import Dot from "../../img/Dots.png";
import Success from "../../img/free-icon-success-7778643.png";
import ErrorImg from "../../img/free-icon-cross-6711656.png";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
    updateInputClasses(e);
  };

  const updateInputClasses = (e) => {
    if (e.target.value) {
      e.target.classList.add("used");
    } else {
      e.target.classList.remove("used");
    }
  };

     // Функция для проверки валидности email
   function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

  const validateName = () => {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    const name = nameInput.value.trim();

    if (name === "") {
      nameError.textContent = "Please enter your name";
      return false;
    } else {
      nameError.textContent = "";
      return true;
    }
  };

  const validateEmail = () => {
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const email = emailInput.value.trim();

    if (email === "") {
      emailError.textContent = "Please enter your email";
      return false;
    } else if (!isValidEmail(email)) {
      emailError.textContent = "Please enter a valid email";
      return false;
    } else {
      emailError.textContent = "";
      return true;
    }
  };
  const validateMessage = () => {
    const messageInput = document.getElementById("message");
    const messageError = document.getElementById("message-error");
    const message = messageInput.value.trim();

    if (message === "") {
      messageError.textContent = "Please enter your message";
      return false;
    } else {
      messageError.textContent = "";
      return true;
    }
  };

    // Функция для скрытия модального окна с сообщением об ошибке
function hideModalError() {
  document.querySelector('.modal-error').style.display = 'none';
}

// Функция для показа модального окна с сообщением об ошибке при неудачной отправке данных
function showModalError() {
  const modalError = document.querySelector('.modal-error');
  modalError.style.display = 'block';

  // Скрыть модальное окно через 3 секунды
  setTimeout(function() {
      hideModalError();
  }, 3000);
}

// Функция для скрытия модального окна с сообщением об успешной отправке
function hideModalSuccess() {
  document.querySelector('.modal-success').style.display = 'none';
}

// Функция для показа модального окна с сообщением об успешной отправке данных
function showModalSuccess() {
  const modalSuccess = document.querySelector('.modal-success');
  modalSuccess.style.display = 'block';

  // Скрыть модальное окно через 3 секунды
  setTimeout(function() {
      hideModalSuccess();
  }, 3000);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    // Валидация формы
    if (validateName() && validateEmail() && validateMessage()) {
      // Данные валидны - выводим в консоль
      console.log(formData);
      // Очищаем форму
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    

      
    // Эмуляция неудачной отправки данных (замените эту часть на реальный код отправки данных на сервер)
    const isSuccess = true;

    if (isSuccess) {
        showModalSuccess(); // Показываем модальное окно с сообщением об успешной отправке
    } else {
        showModalError(); // Показываем модальное окно с сообщением об ошибке
    }
      // Обновляем классы инпутов после сброса значений
  const inputs = document.querySelectorAll('.form input, .form textarea');
  inputs.forEach(input => input.classList.remove("used"));
};
};






  return (
    <div id="contact">
      <Title title="Contact me" />
      <img src={Dot} alt="Dot" className="dot3" />
      <img src={Dot} alt="Dot" className="dot4" />

      <div className="modal-error" style={{ display: 'none' }}>
    <div className="error-content">
      <div className="error-icon">
        <img src={ErrorImg} alt="error" />
      </div>
      <div className="error-text" data-lang-key="button-error-text">Sorry, an error occurred!</div>
    </div>
  </div>

  <div className="modal-success" style={{ display: 'none' }}>
    <div className="success-content">
      <div className="success-icon">
        <img src={Success} alt="success" />
      </div>
      <div className="success-text" data-lang-key="button-success-text">Message sent!</div>
    </div>
  </div>


      <form className="form" onSubmit={handleSubmit}>
        <div className="group">
          <input
            id="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={validateName}
          />
          <span className="bar"></span>
          <label>Name<span className="required">*</span></label>
          <div className="error" id="name-error"></div>
        </div>
        <div className="group">
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={validateEmail}
          />
          <span className="bar"></span>
          <label>Email<span className="required">*</span></label>
          <div className="error" id="email-error"></div>
        </div>
        <div className="group">
          <textarea
            id="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={validateMessage}
          ></textarea>
           <span className="bar"></span>
          <label>Message<span className="required">*</span></label>
          <div className="error" id="message-error"></div>
        </div>

        <button type="submit" data-lang-key="button-submit" className="button-submit">Send Message</button>
      </form>

    </div>
  );
};

export default Contact;
