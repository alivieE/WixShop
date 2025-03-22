import React, { useState } from "react";
import s from "./ShopItem.module.css";
import images from "../../assets/index";
const ShopItem = () => {
  const [count, setCount] = useState(1);

  function handleCountChange(event) {
    setCount(Number(event.target.value));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <li>
      <form action="submit">
        <img className={s.productImg} src={images.cheeseONE} />
        <div className={s.productNamePrice}>
          <p>I`m a Product</p>
          <p>$8.99</p>
        </div>
        <div className={s.inputBox}>
          <button
            type="button"
            onClick={() => {
              if (count - 1 === 0) {
                return;
              }
              setCount(count - 1);
            }}
            className={s.buttonMinus}
          >
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
            min={"1"}
            max={"10"}
          />
          <button
            type="button"
            className={s.buttonPlus}
            onClick={() => {
              setCount(count + 1);
            }}
          >
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
        <button className={s.addToCart} onSubmit={handleSubmit}>
          Add to Cart
        </button>
      </form>
    </li>
  );
};

export default ShopItem;
