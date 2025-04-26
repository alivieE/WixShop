import React, { useState } from "react";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";
import s from "./FindUs.module.css";

import { Notify } from "notiflix/build/notiflix-notify-aio";
const BOT_TOKEN = "7813534435:AAEyo5_fBYcofudoepYwxSaryVXN7VlVyhI";
const CHAT_ID = "859093814";

const FindUs = () => {
  // Create state for form inputs
  const [formData, setFormData] = useState({
    first: "",
    last: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  function onSubmitToBot(e) {
    e.preventDefault();

    // Create the message with all form data
    let message = "Дані користувача:\n";
    message += `Ім'я: ${formData.first}\n`;
    message += `Прізвище: ${formData.last}\n`;
    message += `Email: ${formData.email}\n`;
    message += `Повідомлення: ${formData.message}`;

    console.log("Sending message:", message);

    fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.ok) {
          Notify.success("Повідомлення надіслано!", {
            timeout: 3000,
          });
          // Reset form after successful submission
          setFormData({
            first: "",
            last: "",
            email: "",
            message: "",
          });
        } else {
          Notify.failure("Помилка при надсиланні: " + data.description);
        }
      })
      .catch((error) => {
        Notify.failure("Помилка запиту: " + error);
      });
  }

  return (
    <div>
      <GoogtoEat text={"VISIT"}></GoogtoEat>
      <div className={s.description}>
        <p className={s.descriptionWrap}>
          500 Terry Francine Street, San Francisco, CA 94158
        </p>
        <p className={s.descriptionWrapTwo}>
          M-F: 8am - 8pm / Sat: 9am - 6pm / Closed Sunday
        </p>
        <div style={{ width: "100%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.9149638155327!2d30.59868437711967!3d50.44268457159082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf8a4d81dddb%3A0x7b94cc0bae978d3c!2z0YPQuy4g0K3QvdGC0YPQt9C40LDRgdGC0L7Qsiwg0JrQuNC10LIsIDAyMDAw!5e0!3m2!1sru!2sua!4v1745064995857!5m2!1sru!2sua"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className={s.aboutUs}>
          <p>-</p>
          <p>CONTACT US</p>
          <p>-</p>
        </div>
        <div>
          <p>
            For questions about any of our products, or help with placing your
            order, don't hesitate to contact us:
          </p>
          <p>Email: info@mysite.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
        <form type="submit" onSubmit={onSubmitToBot} className={s.form}>
        <form onSubmit={onSubmitToBot} className={s.form}>
          <div className={s.inputWrap}>
            <label>First name*</label>
            <input
              name="first"
              value={formData.first}
              onChange={handleInputChange}
              required
              type="text"
              className={s.input}
            />
          </div>
          <div className={s.inputWrap}>
            <label>Last name*</label>
            <input
              name="last"
              value={formData.last}
              onChange={handleInputChange}
              required
              type="text"
              className={s.input}
            />
          </div>
          <div className={s.inputWrap}>
            <label>Email*</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              type="email"
              className={s.input}
            />
          </div>
          <div className={s.inputWrapMessage}>
            <label>Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={7}
              className={s.inputMessage}
            />
          </div>
          <button type="submit" className={s.btnSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FindUs;
