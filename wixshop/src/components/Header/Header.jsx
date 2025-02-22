import React from "react";
import s from "./Header.module.css";

const Header = () => {
  return (
    <div>
      <div class={s.menu}>
        <input type="checkbox" id="burgerCheckbox" class={s.burgerCheckbox} />
        <label for="burgerCheckbox" class={s.burger}></label>
        <ul class={s.menuList}>
          <li>
            <a href="#" class={s.menuItem}>
              Главная
            </a>
          </li>
          <li>
            <a href="#" class={s.menuItem}>
              О нас
            </a>
          </li>
          <li>
            <a href="#" class={s.menuItem}>
              Команда
            </a>
          </li>
          <li>
            <a href="#" class={s.menuItem}>
              Контакты
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
