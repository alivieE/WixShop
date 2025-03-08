import React, { useState } from "react";
import s from "./Header.module.css";
import images from "../../assets/index";
import { Link } from "react-router-dom";
const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  return (
    <header className={s.header}>
      <div className={s.bagAndCount}>
        <img className={s.bag} src={images.bag} alt="bag" />
        <p className={s.text}>12</p>
      </div>

      <div className={s.menu}>
        <input
          onClick={() => {
            setisOpenMenu(!isOpenMenu);
          }}
          type="checkbox"
          id="burgerCheckbox"
          class={s.burgerCheckbox}
        />
        <label for="burgerCheckbox" class={s.burger}></label>
        {isOpenMenu && <div className={s.wrap}></div>}
        <div className={`${s.overlay} ${isOpenMenu ? s.open : ""}`}>
          <nav>
            <ul className={s.menuList}>
              <li class={s.menuItem}>
                <Link to="/">Головна</Link>
              </li>
              <li class={s.menuItem}>
                <Link to="/about">Про нас</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
