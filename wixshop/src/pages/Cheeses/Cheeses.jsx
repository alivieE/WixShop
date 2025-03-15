import { React, useState } from "react";
import s from "./Cheeses.module.css";
import GoogtoEat from "../../components/GoodtoEat/GoogtoEat";
import images from "../../assets/index";

const Cheeses = () => {
  const [count, setcount] = useState(1);

  function handleCountChange(event) {
    setcount(Number(event.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const count = setcount;
  }

  return (
    <div className={s.Cheeses}>
      <GoogtoEat text={"SHOP WITH US"}></GoogtoEat>
      <p className={s.title}>Cheeses</p>
      <div className={s.description}>
        <p className={s.descriptionWrap}>
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you
        </p>
      </div>
      <ul>
        <li>
          <img className={s.productImg} src={images.cheeseONE} />
          <p>I`m a Product</p>
          <p>$8.99</p>
          <div className={s.inputBox}>
            <button className={s.buttonMinus}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
                class="sVHsHKp"
              >
                <path
                  fill-rule="evenodd"
                  d="M20,12 L20,13 L5,13 L5,12 L20,12 Z"
                ></path>
              </svg>
            </button>
            <input
              type="number"
              className={s.input}
              value={count}
              onChange={handleCountChange}
            />
            <button className={s.buttonPlus} onClick={handleSubmit}>
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
                class="sVHsHKp"
              >
                <path
                  fill-rule="evenodd"
                  d="M13,5 L13,12 L20,12 L20,13 L13,13 L13,20 L12,20 L11.999,13 L5,13 L5,12 L12,12 L12,5 L13,5 Z"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Cheeses;
