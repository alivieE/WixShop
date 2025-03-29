import React, { useState } from "react";
import s from "./ShopItem.module.css";
import images from "../../assets/index";
import productsData from "../../data/products";

const ShopItem = ({ id }) => {
  const [count, setCount] = useState(1);

  function handleCountChange(event) {
    setCount(Number(event.target.value));
  }

  function handleAddToCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + count } : item
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      const newCart = [...cart, { id, quantity: count }];
      localStorage.setItem("cart", JSON.stringify(newCart));
    }

    window.dispatchEvent(new Event("cartUpdated"));
    setCount(1);
  }

  const currentProduct = productsData.find((product) => product.id === id);

  return (
    <li>
      <form action="submit">
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
            <img src={images.minus} />-
          </button>
          <input
            type="number"
            className={s.input}
            value={count}
            onChange={handleCountChange}
            min="1"
            max="10"
          />
          <button
            type="button"
            className={s.buttonPlus}
            onClick={() => setCount((prev) => Math.min(prev + 1, 10))}
          >
            <img src={images.plus} />+
          </button>
        </div>
        <button type="button" className={s.addToCart} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </form>
    </li>
  );
};

export default ShopItem;
