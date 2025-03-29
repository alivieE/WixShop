import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import images from "../../assets/index";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  const updateCartCount = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalItems);
  };

  useEffect(() => {
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);
  return (
    <header className={s.header}>
      <Cart
        className={s.bagAndCount}
        onClick={() => {
          setOpenCart(!openCart);
        }}
      ></Cart>

      <div className={s.menu}>
        <input
          onClick={() => {
            setisOpenMenu(!isOpenMenu);
          }}
          type="checkbox"
          id="burgerCheckbox"
          class={s.burgerCheckbox}
          checked={isOpenMenu}
        />
        <label for="burgerCheckbox" class={s.burger}></label>
        {isOpenMenu && <div className={s.wrap}></div>}
        <div className={`${s.overlay} ${isOpenMenu ? s.open : ""}`}>
          <nav>
            <ul className={s.menuList}>
              <li
                class={s.menuItem}
                onClick={() => {
                  setisOpenMenu(!isOpenMenu);
                }}
              >
                <Link to="/">Home</Link>
              </li>
              <li
                class={s.menuItem}
                onClick={() => {
                  setisOpenMenu(!isOpenMenu);
                }}
              >
                <Link to="/about">About</Link>
              </li>
              <li
                class={s.menuItem}
                onClick={() => {
                  setisOpenMenu(!isOpenMenu);
                }}
              >
                <Link to="/cheeses">Cheeses</Link>
              </li>
              <li
                class={s.menuItem}
                onClick={() => {
                  setisOpenMenu(!isOpenMenu);
                }}
              >
                <Link to="/meats">Meats</Link>
              </li>
              <li
                class={s.menuItem}
                onClick={() => {
                  setisOpenMenu(!isOpenMenu);
                }}
              >
                <Link to="/provision">Provision</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
