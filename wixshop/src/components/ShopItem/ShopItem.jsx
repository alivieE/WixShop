import React, { useState } from "react";
import s from "./ShopItem.module.css";
import images from "../../assets/index";
import productsData from "../../data/products";

const ShopItem = ({ id, productList, setProductList }) => {
  const [count, setCount] = useState(1);

  function handleCountChange(event) {
    setCount(Number(event.target.value));
  }

  function handleAddToCart(e) {
    e.preventDefault();
    setProductList((prev) => {
      if (
        prev.some((product) => {
          return product.id === id;
        })
      ) {
        const updatedCart = prev.map((item) =>
          item.id === id
            ? { ...item, quantity: Number(item.quantity + count) }
            : item
        );
        return updatedCart;
      } else {
        const newCart = [...prev, { id, quantity: Number(count) }];
        return newCart;
      }
    });
  }

  const currentProduct = productsData.find((product) => product.id === id);

  return (
    <li>
      <form action="submit" onSubmit={handleAddToCart}>
        <div className={s.wrapImg}>
          {currentProduct.saleAmount > 0 && <p className={s.notify}>SALE</p>}
          {currentProduct.isNew > 0 && <p className={s.notify}>NEW</p>}
          <img className={s.productImg} src={images[currentProduct.id]} />
        </div>
        <div className={s.productNamePrice}>
          <p>{currentProduct.name}</p>
          {currentProduct.saleAmount === 0 ? (
            <p>${currentProduct.price}</p>
          ) : (
            <div className={s.priceWrap}>
              <p className={s.lineThrough}>${currentProduct.price}</p>
              <p className={s.newPrice}>
                $
                {(
                  currentProduct.price -
                  (currentProduct.price * currentProduct.saleAmount) / 100
                ).toFixed(2)}
              </p>
            </div>
          )}
        </div>
        <div className={s.inputBox}>
          <button
            type="button"
            onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
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
            min="1"
            max="50"
          />
          <button
            type="button"
            className={s.buttonPlus}
            onClick={() => setCount((prev) => Math.min(prev + 1, 10))}
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
        <button type="submit" className={s.addToCart}>
          Add to Cart
        </button>
      </form>
    </li>
  );
};

export default ShopItem;
