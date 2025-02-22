import React, { useState } from 'react';
import s from './Header.module.css';

const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  return (
    <div>
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
        <div className={`${s.overlay} ${isOpenMenu ? s.open : ''}`}>
          <ul className={s.menuList}>
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
    </div>
  );
};

export default Header;
