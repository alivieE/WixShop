import React, { useState, useEffect } from "react";
import s from "./Cart.module.css";
import CartItem from "../CartItem/CartItem";
import productsData from "../../data/products";
import { Notify } from "notiflix/build/notiflix-notify-aio";
const BOT_TOKEN = "7813534435:AAEyo5_fBYcofudoepYwxSaryVXN7VlVyhI";
const CHAT_ID = "859093814";

const Cart = ({
  openCart,
  product,
  setOpenCart,
  productList,
  setProductList,
}) => {
  const totalPrice = productList.reduce((acc, sumProducts) => {
    const currentProduct = productsData.find(
      (productsData) => sumProducts.id === productsData.id
    );

    return acc + currentProduct.price * sumProducts.quantity;
  }, 0);

  function onSubmitToBot(e) {
    let message = "Замовлення";
    const currentProduct = productList.forEach((orderProduct) => {
      const newMessage = `\n${orderProduct.id}, Count: ${orderProduct.quantity} `;
      message += newMessage;
    });
    message += `\nTotal: ${totalPrice.toFixed(2)}$`;
    console.log(currentProduct);
    console.log(message);

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
          setProductList([]);
          setOpenCart(false);
        } else {
          Notify.failure("Помилка при надсиланні: " + data.description);
        }
      })
      .catch((error) => {
        Notify.failure("Помилка запиту: " + error);
      });
  }

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
      <div className={s.listWrap}>
        <h2 className={s.text}>Cart ({productList.length} items)</h2>
        <div className={s.horizontalLine}></div>
        <ul className={s.list}>
          {productList.map((product) => {
            return (
              <li className={s.cartItem}>
                <CartItem
                  product={product}
                  productList={productList}
                  setProductList={setProductList}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.subWrap}>
        <div className={s.subPrice}>
          <h2 className={s.subtotal}>Subtotal</h2>
          <h2 className={s.price}>${totalPrice.toFixed(2)}</h2>
        </div>
        <div className={s.description}>
          <p>Taxes and shopping are caulated at checkout</p>
        </div>
        <button type="button" className={s.btnCheck} onClick={onSubmitToBot}>
          Checkout
        </button>

        <button type="button" className={s.btnViewCart}>
          View Cart
        </button>
        <div className={s.lock}>
          <button className={s.lock}>
            <svg
              width="11"
              height="14"
              viewBox="0 0 11 14"
              xmlns="http://www.w3.org/2000/svg"
              class="QXycij"
              data-hook="SecureCheckoutDataHook.lock"
            >
              <g fill="currentColor" fill-rule="evenodd">
                <path d="M0 12.79c0 .558.445 1.01.996 1.01h9.008A1 1 0 0 0 11 12.79V6.01c0-.558-.445-1.01-.996-1.01H.996A1 1 0 0 0 0 6.01v6.78Z"></path>
                <path
                  d="M9.5 5v-.924C9.5 2.086 7.696.5 5.5.5c-2.196 0-4 1.586-4 3.576V5h1v-.924c0-1.407 1.33-2.576 3-2.576s3 1.17 3 2.576V5h1Z"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
            Secure Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
