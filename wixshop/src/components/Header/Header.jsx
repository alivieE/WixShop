import React, { useState, useEffect } from "react";
import s from "./Header.module.css";
import images from "../../assets/index";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [cartCount, setCartCount] = useState(0);

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
      <div className={s.bagAndCount}>
        <img className={s.bag} src={images.bag} alt="bag" />
        <p className={s.text}>{cartCount}</p>
      </div>

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
