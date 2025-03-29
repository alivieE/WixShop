import React, { useState, useEffect } from "react";
import s from "./Cart.module.css";
import images from "../../assets/index";

const Cart = ({ openCart, setOpenCart, cartCount }) => {
  return (
    <div>
      <div
      // className={s.bagAndCount}
      // onClick={() => {
      //   setOpenCart(!openCart);
      // }}
      >
        <img className={s.bag} src={images.bag} alt="bag" />
        <p className={s.text}>{cartCount}</p>

        <div className={s.cartClose}>
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            width="24"
            height="24"
            class="sOnyBDt"
          >
            <path
              fill-rule="evenodd"
              d="M19.2928932,3.99989322 L20,4.707 L12.7068932,11.9998932 L20,19.2928932 L19.2928932,20 L11.9998932,12.7068932 L4.707,20 L3.99989322,19.2928932 L11.2928932,11.9998932 L3.99989322,4.707 L4.707,3.99989322 L11.9998932,11.2928932 L19.2928932,3.99989322 Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Cart;
