import React, { useState, useEffect } from "react";
import s from "./CartItem.module.css";
import images from "../../assets/index";
import productsData from "../../data/products";
import products from "../../data/products";

const CartItem = ({ product, productList, setProductList }) => {
  const [count, setCount] = useState(product.quantity);
  // console.log(product);

  function handleCountChange(event) {
    setCount(Number(event.target.value));
  }

  const currentProduct = productsData.find(
    (dataProduct) => dataProduct.id === product.id
  );
  // console.log(currentProduct);

  // const totalPrice = dataProduct.price;

  function handleMinus() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }
  function handlePlus() {
    setCount(count + 1);
  }

  useEffect(() => {
    setProductList((prev) => {
      return prev.map((someProduct) => {
        if (someProduct.id === product.id) {
          return { id: product.id, quantity: count };
        }
        return someProduct;
      });
    });
  }, [count]);

  function deleteProdact() {
    setProductList((prev) => {
      return prev.filter((prevProduct) => {
        return product.id !== prevProduct.id;
      });
    });
  }
  return (
    <>
      <div className={s.firstWrap}>
        <img className={s.productImg} src={images[currentProduct.id]} />
      </div>
      <div className={s.secondWrap}>
        <div className={s.productNameAndDelete}>
          <p>{currentProduct.name}</p>
          <div onClick={deleteProdact}>
            <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path
                fill-rule="evenodd"
                d="M13.5,3 C14.327,3 15,3.673 15,4.5 L15,4.5 L15,5 L19,5 L19,6 L18,6 L18,17.5 C18,18.879 16.878,20 15.5,20 L15.5,20 L7.5,20 C6.122,20 5,18.879 5,17.5 L5,17.5 L5,6 L4,6 L4,5 L8,5 L8,4.5 C8,3.673 8.673,3 9.5,3 L9.5,3 Z M17,6 L6,6 L6,17.5 C6,18.327 6.673,19 7.5,19 L7.5,19 L15.5,19 C16.327,19 17,18.327 17,17.5 L17,17.5 L17,6 Z M10,9 L10,16 L9,16 L9,9 L10,9 Z M14,9 L14,16 L13,16 L13,9 L14,9 Z M13.5,4 L9.5,4 C9.224,4 9,4.225 9,4.5 L9,4.5 L9,5 L14,5 L14,4.5 C14,4.225 13.776,4 13.5,4 L13.5,4 Z"
              ></path>
            </svg>
          </div>
        </div>
        <div>
          <p>${currentProduct.price}</p>
        </div>
        <div className={s.inputBox}>
          <button type="button" onClick={handleMinus} className={s.buttonMinus}>
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
            min="1"
            max="50"
          />
          <button type="button" className={s.buttonPlus} onClick={handlePlus}>
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
      </div>
    </>
  );
};

export default CartItem;
