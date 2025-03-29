import React, { useState, useEffect } from "react";
import s from "./Cart.module.css";
import images from "../../assets/index";
import CartItem from "../CartItem/CartItem";

const Cart = ({ openCart, setOpenCart, productList }) => {
  return (
    <div className={s.mainWrap}>
      {}
      <div
        onClick={() => {
          setOpenCart(false);
        }}
        className={s.cartClose}
      >
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
      <h2 className={s.text}>Cart </h2>
      <div className={s.horizontalLine}></div>
      <ul>
        {productList.map((product) => {
          return (
            <li>
              <CartItem product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Cart;
